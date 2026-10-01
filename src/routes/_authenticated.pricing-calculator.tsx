import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { Calculator, Copy, Download, Info, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';

export const Route = createFileRoute('/_authenticated/pricing-calculator')({
  head: () => ({
    meta: [
      { title: 'Precificação — Prime' },
      { name: 'description', content: 'Calcule um preço viável para sites e propostas.' },
      { property: 'og:title', content: 'Precificação — Prime' },
      { property: 'og:description', content: 'Equilibre escopo, custos e margem para seus projetos.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]
  }),
  component: PricingCalculatorPage
});

const money = (n: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n);
const extras = [
  { name: 'Blog', price: 150 },
  { name: 'Agendamento', price: 180 },
  { name: 'SEO inicial', price: 120 },
  { name: 'Catálogo', price: 250 }
];

const niches = [
  { name: 'Padrão', multiplier: 1, suggestion: 'Ideal para negócios locais genéricos.' },
  { name: 'Saúde', multiplier: 1.2, suggestion: 'Clínicas e médicos exigem design sóbrio e autoridade.' },
  { name: 'Advocacia', multiplier: 1.25, suggestion: 'Escritórios de alto valor agregado e seriedade.' },
  { name: 'Imobiliária', multiplier: 1.4, suggestion: 'Complexidade de filtros e volume de imagens.' },
  { name: 'Gastronomia', multiplier: 1.15, suggestion: 'Foco em visual e integração de cardápio.' }
];

const levels = [
  { name: 'Entrada', base: 350, ref: 'R$ 350' },
  { name: 'Simples', base: 590, ref: 'R$ 590' },
  { name: 'Intermediário', base: 750, ref: 'R$ 750' },
  { name: 'Profissional', base: 990, ref: 'R$ 990' },
  { name: 'Premium', base: 1450, ref: 'R$ 1.450' }
];

function PricingCalculatorPage() {
  const [model, setModel] = useState<'escopo' | 'horas' | 'tarifa' | 'custo'>('escopo');
  const [pages, setPages] = useState(3);
  const [levelIndex, setLevelIndex] = useState(1);
  const [nicheIndex, setNicheIndex] = useState(0);
  const [hours, setHours] = useState(8);
  const [hourly, setHourly] = useState(45);
  const [costs, setCosts] = useState(60);
  const [tax, setTax] = useState(6);
  const [selected, setSelected] = useState<string[]>([]);
  const activeLevel = levels[levelIndex] ?? levels[0] ?? { name: 'Entrada', base: 350, ref: 'R$ 350' };
  const activeNiche = niches[nicheIndex] ?? niches[0] ?? { name: 'Padrão', multiplier: 1, suggestion: 'Ideal para negócios locais.' };

  const result = useMemo(() => {
    const labor = hours * hourly;
    const extrasTotal = extras.filter(x => selected.includes(x.name)).reduce((n, x) => n + x.price, 0);
    
    // Novo cálculo baseado nos níveis solicitados
    const baseScope = activeLevel.base + (pages - 1) * 85 + extrasTotal;
    const scope = baseScope * activeNiche.multiplier;
    
    const minimum = (labor + costs) / (1 - tax / 100);
    
    const basis = model === 'horas' ? labor * 1.4 + costs + extrasTotal 
                : model === 'tarifa' ? hours * hourly + costs + extrasTotal 
                : model === 'custo' ? (labor + costs + extrasTotal) * 1.3 
                : scope;
    
    const price = Math.ceil(Math.max(basis, minimum) / 10) * 10;
    
    return {
      labor,
      minimum,
      price,
      profit: price * (1 - tax / 100) - labor - costs,
      margin: ((price * (1 - tax / 100) - labor - costs) / price) * 100
    };
  }, [pages, activeLevel, activeNiche, hours, hourly, costs, tax, selected, model]);

  const summary = `Proposta de site\n${pages} página(s) · ${activeLevel.name}\nNicho: ${activeNiche.name}\nAdicionais: ${selected.join(', ') || 'Nenhum'}\nInvestimento sugerido: ${money(result.price)}\nEscopo e prazo devem ser confirmados com o cliente.`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      toast.success('Resumo copiado!');
    } catch {
      toast.error('Não foi possível copiar.');
    }
  };

  const download = () => {
    const url = URL.createObjectURL(new Blob([summary], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'proposta-prime.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase text-primary">Prime Finance</p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">Precificação</h1>
          <p className="mt-2 text-sm text-muted-foreground">Use uma referência acessível, sem ignorar seu tempo e seus custos.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={copy}><Copy className="h-4 w-4" /> Copiar</Button>
          <Button variant="outline" onClick={download}><Download className="h-4 w-4" /> Baixar</Button>
        </div>
      </div>

      <div className="grid gap-7 lg:grid-cols-[1fr_340px]">
        <section className="space-y-7 border-y border-border py-6">
          <div>
            <p className="mb-3 text-sm font-bold">Modelo de cálculo</p>
            <div className="flex flex-wrap gap-2">
              {(['escopo', 'horas', 'tarifa', 'custo'] as const).map(x => (
                <Button key={x} variant={model === x ? 'default' : 'outline'} onClick={() => setModel(x)}>
                  {x === 'escopo' ? 'Escopo' : x === 'horas' ? 'Horas' : x === 'tarifa' ? 'Tarifa' : 'Custo'}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 flex justify-between text-sm font-bold">
              <label>Páginas</label>
              <span>{pages}</span>
            </div>
            <Slider min={1} max={12} value={[pages]} onValueChange={v => setPages(v[0] ?? pages)} />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold">Nível do Projeto</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {levels.map((x, i) => (
                <Button key={x.name} variant={levelIndex === i ? 'default' : 'outline'} className="h-auto min-h-12 flex-col items-start py-2 text-left" onClick={() => setLevelIndex(i)}>
                  <span className="text-xs font-bold">{x.name}</span>
                  <span className="text-[10px] opacity-70">Ref: {x.ref}</span>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold">Nicho de Mercado</p>
            <div className="flex flex-wrap gap-2">
              {niches.map((x, i) => (
                <Button key={x.name} variant={nicheIndex === i ? 'default' : 'outline'} size="sm" onClick={() => setNicheIndex(i)}>
                  {x.name}
                </Button>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
              <Info className="h-3 w-3" /> {activeNiche.suggestion}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold">
              Horas estimadas
              <Input type="number" min="1" value={hours} onChange={e => setHours(Math.max(1, Number(e.target.value) || 1))} className="mt-2" />
            </label>
            <label className="text-sm font-bold">
              Valor por hora (R$)
              <Input type="number" min="1" value={hourly} onChange={e => setHourly(Math.max(1, Number(e.target.value) || 1))} className="mt-2" />
            </label>
            <label className="text-sm font-bold">
              Custos do projeto (R$)
              <Input type="number" min="0" value={costs} onChange={e => setCosts(Math.max(0, Number(e.target.value) || 0))} className="mt-2" />
            </label>
            <label className="text-sm font-bold">
              Impostos estimados (%)
              <Input type="number" min="0" max="50" value={tax} onChange={e => setTax(Math.min(50, Math.max(0, Number(e.target.value) || 0)))} className="mt-2" />
            </label>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold">Adicionais</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {extras.map(x => (
                <Button key={x.name} variant={selected.includes(x.name) ? 'default' : 'outline'} className="h-auto min-h-12 justify-between whitespace-normal text-left" onClick={() => setSelected(v => v.includes(x.name) ? v.filter(n => n !== x.name) : [...v, x.name])}>
                  <span>{x.name}</span>
                  <span>+ {money(x.price)}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <aside className="self-start border border-primary bg-card p-6">
          <Calculator className="h-6 w-6 text-primary" />
          <p className="mt-5 text-xs font-black uppercase text-muted-foreground">Investimento sugerido</p>
          <p className="mt-2 break-words text-4xl font-black">{money(result.price)}</p>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold text-primary bg-primary/10 p-2 rounded">
              <TrendingUp className="h-3 w-3" />
              SUGESTÃO DE COBRANÇA POR NICHO APLICADA
            </div>
          </div>

          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            A precificação sugerida considera o nível do projeto ({activeLevel.name}) e o multiplicador de nicho ({activeNiche.name}).
          </p>

          <div className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
            <div className="flex justify-between gap-2">
              <span>Custo de trabalho</span>
              <strong>{money(result.labor)}</strong>
            </div>
            <div className="flex justify-between gap-2">
              <span>Preço mínimo sugerido</span>
              <strong>{money(result.minimum)}</strong>
            </div>
            <div className="flex justify-between gap-2">
              <span>Lucro estimado</span>
              <strong>{money(result.profit)}</strong>
            </div>
            <div className="flex justify-between gap-2">
              <span>Margem estimada</span>
              <strong>{result.margin.toFixed(1)}%</strong>
            </div>
          </div>

          {result.price > 1200 && (
            <p className="mt-5 border-l-4 border-primary bg-muted p-3 text-xs">
              Este escopo ultrapassa a faixa de entrada. Certifique-se de que o valor entregue ao cliente justifica o investimento.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
