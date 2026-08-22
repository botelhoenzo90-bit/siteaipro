import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { TrendingUp, Calculator, Plus, Minus, Info, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/pricing-calculator")({
  component: PricingCalculatorPage,
});

function PricingCalculatorPage() {
  const [pages, setPages] = useState(1);
  const [complexity, setComplexity] = useState(1); // 1: Simple, 2: Medium, 3: High
  const [hasBlog, setHasBlog] = useState(false);
  const [hasEcommerce, setHasEcommerce] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(80);
  const [toolCosts, setToolCosts] = useState(200);
  const [taxRate, setTaxRate] = useState(6);

  const calculatedPrice = useMemo(() => {
    let base = pages * 300;
    if (complexity === 2) base *= 1.5;
    if (complexity === 3) base *= 2.5;
    if (hasBlog) base += 800;
    if (hasEcommerce) base += 2500;
    
    const estimatedHours = pages * (complexity === 1 ? 4 : complexity === 2 ? 8 : 16);
    const laborCost = estimatedHours * hourlyRate;
    
    const subtotal = Math.max(base, laborCost) + toolCosts;
    const finalPrice = subtotal / (1 - (taxRate / 100));
    
    return {
      total: finalPrice,
      hours: estimatedHours,
      margin: ((finalPrice - laborCost - toolCosts) / finalPrice) * 100
    };
  }, [pages, complexity, hasBlog, hasEcommerce, hourlyRate, toolCosts, taxRate]);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calculadora de Precificação Pro</h1>
          <p className="text-muted-foreground">Calcule seu lucro real e gere orçamentos profissionais.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" /> Exportar PDF
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" /> Compartilhar
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Configurações do Projeto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Quantidade de Páginas: {pages}</Label>
                    </div>
                    <Slider 
                      value={[pages]} 
                      onValueChange={(v) => v[0] !== undefined && setPages(v[0])} 
                      max={30} 
                      min={1} 
                      step={1} 
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Complexidade do Projeto</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { val: 1, label: 'Lp Simples' },
                        { val: 2, label: 'Site Inst.' },
                        { val: 3, label: 'Plataforma' }
                      ].map((lvl) => (
                        <Button
                          key={lvl.val}
                          variant={complexity === lvl.val ? "default" : "outline"}
                          onClick={() => setComplexity(lvl.val)}
                          className="h-10 text-xs"
                        >
                          {lvl.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Label>Recursos Adicionais</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/30 transition-colors">
                        <Label className="cursor-pointer" htmlFor="blog">Blog / CMS</Label>
                        <input type="checkbox" id="blog" checked={hasBlog} onChange={(e) => setHasBlog(e.target.checked)} className="h-4 w-4 accent-primary" />
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/30 transition-colors">
                        <Label className="cursor-pointer" htmlFor="ecom">Loja Virtual</Label>
                        <input type="checkbox" id="ecom" checked={hasEcommerce} onChange={(e) => setHasEcommerce(e.target.checked)} className="h-4 w-4 accent-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Sua Hora (R$): {hourlyRate}</Label>
                    </div>
                    <Slider 
                      value={[hourlyRate]} 
                      onValueChange={(v) => v[0] !== undefined && setHourlyRate(v[0])} 
                      max={500} 
                      min={20} 
                      step={10} 
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Custos Fixos (R$): {toolCosts}</Label>
                    </div>
                    <Slider 
                      value={[toolCosts]} 
                      onValueChange={(v) => v[0] !== undefined && setToolCosts(v[0])} 
                      max={2000} 
                      min={0} 
                      step={50} 
                    />
                    <p className="text-[10px] text-muted-foreground">Domínio, Hospedagem, Plugins, API Keys.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Impostos / Taxas (%): {taxRate}%</Label>
                    </div>
                    <Slider 
                      value={[taxRate]} 
                      onValueChange={(v) => v[0] !== undefined && setTaxRate(v[0])} 
                      max={30} 
                      min={0} 
                      step={0.5} 
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="gradient-brand border-0 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <TrendingUp className="h-40 w-40" />
            </div>
            <CardHeader>
              <CardTitle>Lucro Estimado</CardTitle>
              <CardDescription className="text-white/70">Quanto sobrará no seu bolso.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div className="text-5xl font-black tracking-tight">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculatedPrice.total - (calculatedPrice.total * (taxRate/100)) - toolCosts)}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-white/60">Margem Líquida</p>
                  <p className="text-xl font-bold">{calculatedPrice.margin.toFixed(1)}%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-white/60">Esforço (Horas)</p>
                  <p className="text-xl font-bold">{calculatedPrice.hours}h</p>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-xs text-white/60">
                  <span>Valor de Venda (Cliente)</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculatedPrice.total)}</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Impostos Estimados</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculatedPrice.total * (taxRate/100))}</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Custos Fixos / Ferramentas</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(toolCosts)}</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Seu Custo de Mão de Obra</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculatedPrice.hours * hourlyRate)}</span>
                </div>
              </div>

              <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12">
                Gerar Orçamento Detalhado
              </Button>
            </CardContent>
          </Card>

          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-4">
            <Info className="h-6 w-6 text-primary shrink-0" />
            <div className="text-sm space-y-2">
              <p className="font-bold text-primary">Insight de Mercado</p>
              <p className="text-muted-foreground leading-relaxed">
                Sites com **Complexidade Premium** em 2026 estão sendo vendidos por valores 40% acima da média quando incluem integração com IA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
