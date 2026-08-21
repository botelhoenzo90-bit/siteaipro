import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { TrendingUp, Calculator, Plus, Minus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  const calculatedPrice = useMemo(() => {
    let base = pages * 300;
    if (complexity === 2) base *= 1.5;
    if (complexity === 3) base *= 2.5;
    if (hasBlog) base += 800;
    if (hasEcommerce) base += 2500;
    
    // Add margin for hourly rate (assuming average time)
    const estimatedHours = pages * (complexity === 1 ? 4 : complexity === 2 ? 8 : 16);
    const timeCost = estimatedHours * hourlyRate;
    
    return Math.max(base, timeCost);
  }, [pages, complexity, hasBlog, hasEcommerce, hourlyRate]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calculadora de Precificação</h1>
        <p className="text-muted-foreground">Estime quanto cobrar pelo seu projeto de site com base na complexidade.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Parâmetros do Projeto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Quantidade de Páginas: {pages}</Label>
                </div>
                <Slider 
                  value={[pages]} 
                  onValueChange={(v) => setPages(v[0])} 
                  max={20} 
                  min={1} 
                  step={1} 
                />
              </div>

              <div className="space-y-3">
                <Label>Complexidade do Design</Label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 1, label: 'Básico' },
                    { val: 2, label: 'Interm.' },
                    { val: 3, label: 'Premium' }
                  ].map((lvl) => (
                    <Button
                      key={lvl.val}
                      variant={complexity === lvl.val ? "default" : "outline"}
                      onClick={() => setComplexity(lvl.val)}
                      className="h-9 text-xs"
                    >
                      {lvl.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-muted/20">
                  <Label className="cursor-pointer" htmlFor="blog">Blog Integrado</Label>
                  <input 
                    type="checkbox" 
                    id="blog" 
                    checked={hasBlog} 
                    onChange={(e) => setHasBlog(e.target.checked)}
                    className="h-4 w-4 accent-primary" 
                  />
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-muted/20">
                  <Label className="cursor-pointer" htmlFor="ecom">E-commerce</Label>
                  <input 
                    type="checkbox" 
                    id="ecom" 
                    checked={hasEcommerce} 
                    onChange={(e) => setHasEcommerce(e.target.checked)}
                    className="h-4 w-4 accent-primary" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label>Valor da sua hora (R$): {hourlyRate}</Label>
                </div>
                <Slider 
                  value={[hourlyRate]} 
                  onValueChange={(v) => setHourlyRate(v[0])} 
                  max={300} 
                  min={30} 
                  step={5} 
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="gradient-brand border-0 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp className="h-32 w-32" />
            </div>
            <CardHeader>
              <CardTitle>Sugestão de Preço</CardTitle>
              <CardDescription className="text-white/70">Estimativa baseada nos seus custos e mercado.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div className="text-5xl font-black">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculatedPrice)}
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Este valor é uma recomendação. Considere sempre a urgência do cliente e o seu portfólio para ajustes finais.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-white/60">Lucro Estimado</p>
                  <p className="text-lg font-bold">~65%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-white/60">Tempo Estimado</p>
                  <p className="text-lg font-bold">{pages * (complexity === 1 ? 4 : complexity === 2 ? 8 : 12)}h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-4">
            <Info className="h-6 w-6 text-primary shrink-0" />
            <div className="text-sm space-y-2">
              <p className="font-bold text-primary">Dica de Vendas</p>
              <p className="text-muted-foreground leading-relaxed">
                Apresente o preço como um investimento, não um custo. Use o **AI Proprosal** do sistema para justificar esse valor com ROI claro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
