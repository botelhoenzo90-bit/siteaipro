import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, Target, Rocket, Shield, ArrowRight } from "lucide-react";
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
              <Link to="/auth">Criar conta grátis</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 pt-20 pb-32 md:pt-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
                🚀 A revolução da criação de sites chegou
              </div>
              <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl leading-tight">
                Crie sites profissionais com IA e <span className="text-transparent bg-clip-text gradient-brand inline-block">conquiste seus primeiros clientes</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Transforme ideias em sites completos usando prompts inteligentes, estratégias de venda e ferramentas profissionais.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="h-12 px-8 text-base gradient-brand border-0" asChild>
                  <Link to="/auth">Começar Agora <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  Ver Demonstração
                </Button>
              </div>
            </motion.div>

            {/* Mockup Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-20 overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-2xl shadow-primary/10"
            >
              <div className="border-b border-border/50 bg-muted/30 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                </div>
                <div className="mx-auto h-5 w-64 rounded-md bg-muted/50" />
              </div>
              <div className="aspect-[16/9] bg-gradient-to-br from-card to-background p-8">
                 <div className="grid grid-cols-12 gap-6 h-full">
                    <div className="col-span-3 space-y-4">
                      <div className="h-8 w-full rounded-lg bg-primary/20 animate-pulse" />
                      <div className="h-4 w-3/4 rounded-lg bg-muted/50" />
                      <div className="h-4 w-1/2 rounded-lg bg-muted/50" />
                    </div>
                    <div className="col-span-9 rounded-xl border border-dashed border-border flex items-center justify-center">
                      <span className="text-muted-foreground font-mono text-sm tracking-widest">DASHBOARD PREVIEW</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-card/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">O que você recebe no SiteAI Pro</h2>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Zap, title: "Gerador de Sites IA", desc: "Crie prompts ultra-profissionais para Lovable, Bolt e Framer." },
                { icon: Target, title: "Prospecção Inteligente", desc: "CRM completo para gerenciar e conquistar novos clientes." },
                { icon: Shield, title: "Propostas Express", desc: "Gere propostas comerciais irrecusáveis em segundos." },
                { icon: Rocket, title: "SiteAI Academy", desc: "Aprenda a vender sites de R$2.000 a R$5.000." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-border bg-card p-8 text-left transition-colors hover:border-primary/50"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-bold">SiteAI Pro</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 SiteAI Pro. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacidade</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
