import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { TrendingUp, Calculator, Download, Share2, Info, ChevronRight, Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/pricing-calculator")({
  component: PricingCalculatorPage,
});

function PricingCalculatorPage() {
  const [pages, setPages] = useState(5);
  const [complexity, setComplexity] = useState(2); // 1: Simple, 2: Medium, 3: High
  const [hasBlog, setHasBlog] = useState(false);
  const [hasEcommerce, setHasEcommerce] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(120);
  const [toolCosts, setToolCosts] = useState(250);
  const [taxRate, setTaxRate] = useState(6);

  const calculatedResult = useMemo(() => {
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
      margin: ((finalPrice - laborCost - toolCosts) / finalPrice) * 100,
      laborCost,
      taxAmount: finalPrice * (taxRate / 100)
    };
  }, [pages, complexity, hasBlog, hasEcommerce, hourlyRate, toolCosts, taxRate]);

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Calculadora de Precificação</h1>
          <p className="text-muted-foreground mt-2">Defina seus preços com base no esforço real e custos fixos.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> PDF</Button>
          <Button variant="outline" size="sm"><Share2 className="mr-2 h-4 w-4" /> Link</Button>
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
                    <Slider value={[pages]} onValueChange={(v) => v[0] !== undefined && setPages(v[0])} max={50} min={1} />
                  </div>

                  <div className="space-y-3">
                    <Label>Complexidade</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { val: 1, label: 'Simples' },
                        { val: 2, label: 'Médio' },
                        { val: 3, label: 'Premium' }
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
                      <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/30 cursor-pointer transition-colors" onClick={() => setHasBlog(!hasBlog)}>
                        <Label className="cursor-pointer">Blog / CMS (+ R$ 800)</Label>
                        <input type="checkbox" checked={hasBlog} readOnly className="h-4 w-4 accent-primary" />
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/30 cursor-pointer transition-colors" onClick={() => setHasEcommerce(!hasEcommerce)}>
                        <Label className="cursor-pointer">Loja Virtual (+ R$ 2.500)</Label>
                        <input type="checkbox" checked={hasEcommerce} readOnly className="h-4 w-4 accent-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Sua Hora (R$): {hourlyRate}</Label>
                    </div>
                    <Slider value={[hourlyRate]} onValueChange={(v) => v[0] !== undefined && setHourlyRate(v[0])} max={500} min={20} step={10} />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Custos Fixos (R$): {toolCosts}</Label>
                    </div>
                    <Slider value={[toolCosts]} onValueChange={(v) => v[0] !== undefined && setToolCosts(v[0])} max={2000} min={0} step={50} />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Impostos (%): {taxRate}%</Label>
                    </div>
                    <Slider value={[taxRate]} onValueChange={(v) => v[0] !== undefined && setTaxRate(v[0])} max={30} min={0} step={0.5} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
            <div className="flex gap-4">
              <Info className="h-6 w-6 text-primary shrink-0" />
              <div className="text-sm space-y-2">
                <p className="font-bold text-primary">Preços Sugeridos por Ocasião</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="p-3 bg-background rounded-xl border border-border">
                    <p className="font-bold text-xs uppercase text-muted-foreground">Iniciante / Portfólio</p>
                    <p className="text-lg font-black text-foreground">R$ 550 - R$ 900</p>
                    <p className="text-[10px] text-muted-foreground">Ideal para Landing Pages simples e ganhar autoridade.</p>
                  </div>
                  <div className="p-3 bg-background rounded-xl border border-border">
                    <p className="font-bold text-xs uppercase text-muted-foreground">Profissional / Agência</p>
                    <p className="text-lg font-black text-foreground">R$ 1.500 - R$ 3.500</p>
                    <p className="text-[10px] text-muted-foreground">Projetos com copy, SEO e integração de leads.</p>
                  </div>
                  <div className="p-3 bg-background rounded-xl border border-border">
                    <p className="font-bold text-xs uppercase text-muted-foreground">Premium / Custom</p>
                    <p className="text-lg font-black text-foreground">R$ 5.000+</p>
                    <p className="text-[10px] text-muted-foreground">Sistemas complexos, dashboards ou e-commerce robusto.</p>
                  </div>
                  <div className="p-3 bg-background rounded-xl border border-primary/20 bg-primary/5">
                    <p className="font-bold text-xs uppercase text-primary">Manutenção Mensal</p>
                    <p className="text-lg font-black text-primary">R$ 150 - R$ 450</p>
                    <p className="text-[10px] text-primary/70">Receita recorrente vitalícia por projeto.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="gradient-brand border-0 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <TrendingUp className="h-40 w-40" />
            </div>
            <CardHeader>
              <CardTitle>Resumo Financeiro</CardTitle>
              <CardDescription className="text-white/70">Lucro líquido estimado.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div className="text-5xl font-black tracking-tight">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculatedResult.total - calculatedResult.taxAmount - toolCosts)}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-white/60">Margem</p>
                  <p className="text-xl font-bold">{calculatedResult.margin.toFixed(1)}%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-white/60">Horas</p>
                  <p className="text-xl font-bold">{calculatedResult.hours}h</p>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-xs text-white/60">
                  <span>Valor p/ Cliente</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculatedResult.total)}</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Impostos</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculatedResult.taxAmount)}</span>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>Custos Fixos</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(toolCosts)}</span>
                </div>
                <div className="flex justify-between text-xs text-white/60 border-t border-white/10 pt-2 font-bold">
                  <span>Seu Lucro Real</span>
                  <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculatedResult.total - calculatedResult.taxAmount - toolCosts)}</span>
                </div>
              </div>

              <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12 mt-4 shadow-lg shadow-black/20">
                Gerar Orçamento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}