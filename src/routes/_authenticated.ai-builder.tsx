import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Wand2, Copy, Save, Edit, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/ai-builder")({
  component: AIBuilderPage,
});

function AIBuilderPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const [context, setContext] = useState("");
  const [niche, setNiche] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [objective, setObjective] = useState("");
  const [style, setStyle] = useState("");
  const [colors, setColors] = useState("");

  const handleGenerate = () => {
    if (!context || !niche) {
      toast.error("Por favor, preencha pelo menos o nicho e a explicação do negócio.");
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      const generatedPrompt = `PROMPT ULTRA DETALHADO (MODO EXPERT) - SITEAI PRO v2.0
==========================================================
ESTRATÉGIA PARA: ${companyName || 'Empresa Local'} (${niche}) em ${city || 'Localização Não Definida'}
OBJETIVO: ${objective || 'Conversão Máxima'}
ESTILO VISUAL: ${style || 'Moderno'} | CORES: ${colors || 'Brand Colors'}

CONTEXTO DO NEGÓCIO (INPUT DO USUÁRIO):
"${context}"

DIRETRIZES DE DESIGN E CÓPIA:
1. HEADER: Focar no diferencial competitivo mencionado no contexto.
2. HERO SECTION: Headline ultra-específica para o nicho ${niche}, usando o tom de voz adequado para o público-alvo.
3. SEÇÃO DE VALOR: Transformar o contexto fornecido ("${context.substring(0, 100)}...") em 3 pilares de benefícios tangíveis.
4. PROVA SOCIAL: Posicionamento estratégico baseado na autoridade local de ${city}.
5. CTA: Chamada para ação focada em ${objective}.

TÉCNICO: Layout responsivo, animações Framer Motion, Clean UI, tipografia premium.`;

      setResult(generatedPrompt);
      setLoading(false);
      toast.success("Prompt estratégico gerado com sucesso!");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Site Builder</h1>
        <p className="text-muted-foreground">Crie prompts ultra-profissionais para gerar sites em ferramentas de IA.</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-8 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Tipo de Negócio</Label>
            <Select onValueChange={setNiche}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o nicho" />
              </SelectTrigger>
              <SelectContent>
                {['Clínica', 'Restaurante', 'Advogado', 'Academia', 'Imobiliária'].map(n => (
                  <SelectItem key={n} value={n.toLowerCase()}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Nome da Empresa</Label>
            <Input placeholder="Ex: Clínica Harmony" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Cidade</Label>
            <Input placeholder="Ex: São Paulo" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Objetivo do Site</Label>
            <Select onValueChange={setObjective}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o objetivo" />
              </SelectTrigger>
              <SelectContent>
                {['Gerar clientes', 'Agendamento', 'Venda online', 'Capturar leads'].map(o => (
                  <SelectItem key={o} value={o.toLowerCase()}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Explique seu Negócio (Contexto para a IA)</Label>
          <Textarea 
            placeholder="Descreva seu negócio, diferenciais, público-alvo e o que torna sua oferta única..." 
            className="min-h-[120px]"
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Estilo Visual</Label>
            <Select onValueChange={setStyle}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o estilo" />
              </SelectTrigger>
              <SelectContent>
                {['Luxuoso', 'Minimalista', 'Moderno', 'Corporativo'].map(s => (
                  <SelectItem key={s} value={s.toLowerCase()}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Cores Desejadas</Label>
            <Input placeholder="Ex: Dourado e Branco" value={colors} onChange={(e) => setColors(e.target.value)} />
          </div>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          className="w-full h-12 gradient-brand border-0"
        >
          {loading ? "Gerando..." : <>Gerar Prompt Profissional <Wand2 className="ml-2 h-5 w-5" /></>}
        </Button>
      </div>

      {result && (
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Resultado do Prompt</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" onClick={() => { navigator.clipboard.writeText(result); toast.info("Prompt copiado!"); }}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline"><Save className="h-4 w-4" /></Button>
              <Button size="icon" variant="outline"><Edit className="h-4 w-4" /></Button>
              <Button size="icon" variant="outline"><Download className="h-4 w-4" /></Button>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-background border border-border font-mono text-sm whitespace-pre-wrap">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}
