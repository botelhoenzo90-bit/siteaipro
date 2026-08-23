import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.03] pointer-events-none" />
      
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">SiteAI Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Recursos</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Preços</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/auth">Entrar</Link>
            </Button>
            <Button className="gradient-brand border-0" asChild>
              <Link to="/auth">Criar conta</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pt-20 pb-32 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto">
            <h1 className="mx-auto max-w-5xl text-6xl font-extrabold tracking-tight sm:text-8xl leading-tight">
              Crie sites de alta conversão <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">em segundos</span> com IA.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-muted-foreground">
              A plataforma definitiva para agências e freelancers que buscam escala, design premium e resultados financeiros reais.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" className="h-14 px-10 text-lg gradient-brand border-0" asChild>
                <Link to="/auth">Começar Agora Grátis <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Planos que acompanham seu crescimento</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: 'Starter', price: 'Grátis', features: ['1 Projeto/mês', 'Prompt Básico', 'Calculadora Simples'] },
                    { name: 'Pro', price: 'R$ 97/mês', features: ['Projetos Ilimitados', 'Prompt Expert v3.0', 'Calculadora Avançada', 'Biblioteca Premium'], highlight: true },
                    { name: 'Agency', price: 'R$ 297/mês', features: ['Tudo do Pro', 'White Label', 'Suporte Prioritário', 'Estratégias de Venda'] }
                ].map((plan, i) => (
                    <div key={i} className={`p-8 rounded-3xl border ${plan.highlight ? 'border-primary bg-primary/5' : 'border-border bg-card'} relative`}>
                        {plan.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">Mais Popular</div>}
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-4xl font-black mt-4">{plan.price}</p>
                        <ul className="mt-8 space-y-4">
                            {plan.features.map(f => <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" /> {f}</li>)}
                        </ul>
                        <Button className="w-full mt-8" variant={plan.highlight ? 'default' : 'outline'}>Assinar agora</Button>
                    </div>
                ))}
            </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 text-center text-sm text-muted-foreground">
        © 2026 SiteAI Pro. Todos os direitos reservados.
      </footer>
    </div>
  );
}
