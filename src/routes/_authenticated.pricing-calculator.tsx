import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { TrendingUp, Calculator, Download, Share2, Info, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/pricing-calculator")({
  component: PricingCalculatorPage,
});

function PricingCalculatorPage() {
  const [pages, setPages] = useState(5);
  const [complexity, setComplexity] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(120);

  const calculatePackages = useMemo(() => {
    const baseHourly = pages * (complexity === 1 ? 4 : complexity === 2 ? 10 : 20);
    const cost = baseHourly * hourlyRate;
    
    return [
      { name: "Básico", price: Math.round(cost * 1.2 / 50) * 50, desc: "Landing page simples e rápida.", hours: baseHourly * 0.8 },
      { name: "Sugerido (Pro)", price: 550, desc: "Site profissional completo e otimizado.", hours: baseHourly },
      { name: "Premium", price: Math.round(cost * 2.5 / 100) * 100, desc: "Plataforma avançada com funcionalidades.", hours: baseHourly * 1.5 }
    ];
  }, [pages, complexity, hourlyRate]);

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Precificação Inteligente</h1>
        <p className="text-muted-foreground mt-2">Valores baseados em esforço real e margem de mercado.</p>
      </div>

      <Card className="glass border-border/50 p-8">
        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label>Páginas estimadas: {pages}</Label>
                    <Slider value={[pages]} onValueChange={(v) => v[0] !== undefined && setPages(v[0])} max={50} min={1} />
                </div>
                <div className="space-y-2">
                    <Label>Complexidade: {complexity === 1 ? "Simples" : complexity === 2 ? "Médio" : "Complexo"}</Label>
                    <Slider value={[complexity]} onValueChange={(v) => v[0] !== undefined && setComplexity(v[0])} max={3} min={1} step={1} />
                </div>
                <div className="space-y-2">
                    <Label>Sua Hora (R$): {hourlyRate}</Label>
                    <Slider value={[hourlyRate]} onValueChange={(v) => v[0] !== undefined && setHourlyRate(v[0])} max={500} min={50} step={10} />
                </div>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-xl border border-border/50 flex flex-col justify-center gap-4">
                <h4 className="font-bold text-lg">Entenda seu cálculo:</h4>
                <p className="text-sm text-muted-foreground">O cálculo projeta o esforço em horas baseando-se na complexidade de cada página e na sua hora técnica. O valor sugerido de <strong>R$ 550</strong> é um ponto de entrada competitivo para o mercado brasileiro de sites institucionais.</p>
            </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {calculatePackages.map((pkg, i) => (
            <Card key={pkg.name} className={`p-6 border ${i === 1 ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}>
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-6">{pkg.desc}</p>
                <div className="text-4xl font-black mb-6">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pkg.price)}
                </div>
                <Button className={`w-full ${i === 1 ? 'gradient-brand' : 'bg-secondary'}`}>
                    Escolher Plano
                </Button>
            </Card>
        ))}
      </div>
    </div>
  );
}