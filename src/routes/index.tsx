import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Check, Play, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.03] pointer-events-none" />
      
      {/* Top Banner */}
      <div className="bg-primary py-2 text-center text-sm font-semibold text-primary-foreground">
        Tempo esgotado! Adquira a plataforma imediatamente para não perder a oportunidade de aplicar o cupom PAIOFF50
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">SiteAI Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Recursos</a>
            <a href="#gallery" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Galeria</a>
            <a href="#how" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Como funciona</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Planos</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/auth">Entrar</Link>
            </Button>
            <Button className="gradient-brand border-0" asChild>
              <Link to="/auth">Assinar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pt-20 pb-24 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto">
            <h1 className="mx-auto max-w-5xl text-6xl font-extrabold tracking-tight sm:text-8xl leading-tight">
              Sites corporativos de alta conversão <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">em minutos</span> com IA.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-muted-foreground">
              A plataforma definitiva para agências criarem sites premium para empresas, focados em conversão e performance.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" className="h-14 px-10 text-lg gradient-brand border-0" asChild>
                <Link to="/auth">Assinar agora <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg">
                Ver como funciona <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-card/50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Planos que acompanham seu crescimento</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Mensal */}
                    <div className="p-8 rounded-3xl border border-border bg-card">
                        <h3 className="text-xl font-bold">Mensal</h3>
                        <p className="text-4xl font-black mt-4">R$ 159,00 <span className="text-lg font-medium text-muted-foreground line-through">R$ 319,90</span></p>
                        <ul className="mt-8 space-y-4">
                            {[ 'Geração Ilimitada', 'Desconto 50% aplicado', 'Acesso Completo ao Editor', 'Suporte Prioritário' ].map(f => <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" /> {f}</li>)}
                        </ul>
                        <Button className="w-full mt-8 gradient-brand border-0">Assinar mensal</Button>
                    </div>
                    {/* Vitalício */}
                    <div className="p-8 rounded-3xl border-2 border-primary bg-primary/5">
                        <div className="absolute top-0 right-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-3 py-1 rounded-b-lg">Melhor custo-benefício</div>
                        <h3 className="text-xl font-bold">Vitalício</h3>
                        <p className="text-4xl font-black mt-4">R$ 295,90 <span className="text-lg font-medium text-muted-foreground line-through">R$ 597,00</span></p>
                        <p className="text-sm mt-2 text-muted-foreground">ou 12x de R$ 31,53</p>
                        <ul className="mt-8 space-y-4">
                            {[ 'Acesso Vitalício', 'Créditos Infinitos', 'Todos os Recursos Pro', 'Sem Mensalidade' ].map(f => <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" /> {f}</li>)}
                        </ul>
                        <Button className="w-full mt-8 gradient-brand border-0">Garantir vitalício</Button>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-24 container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold text-center mb-16">Perguntas frequentes</h2>
            <Accordion type="single" collapsible>
                {[
                    { q: "O que é o SiteAI Pro?", a: "Uma plataforma IA de alta performance para criação de sites corporativos." },
                    { q: "Preciso de experiência?", a: "Não, nossa IA cuida de todo o design e estrutura para você." },
                    { q: "Posso cancelar?", a: "Sim, no plano mensal você pode cancelar quando quiser." }
                ].map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
      </main>

      <footer className="border-t border-border py-12 text-center text-sm text-muted-foreground">
        © 2026 SiteAI Pro. Todos os direitos reservados.
      </footer>
    </div>
  );
}