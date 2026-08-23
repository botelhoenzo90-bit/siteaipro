import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Check, Play, Shield, Sparkles, Star, Wand2, Search, Calculator, Library, GraduationCap, Camera, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    title: "SiteAI Pro | Criador de Sites Corporativos com IA",
    meta: [
      {
        name: "description",
        content: "A maior plataforma futurista de criação estratégica de sites com Inteligência Artificial para agências e freelancers. Design premium em minutos.",
      },
      { property: "og:title", content: "SiteAI Pro | Design Futurista e IA" },
      { property: "og:description", content: "Crie sites corporativos de alta conversão com nossa inteligência artificial de elite." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function LandingPage() {
  const partners = [
    { name: "Shopee", color: "text-[#EE4D2D]" },
    { name: "Amazon", color: "text-[#FF9900]" },
    { name: "TikTok", color: "text-[#000000]" },
    { name: "Mercado Livre", color: "text-[#FFE600]" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/30 relative overflow-x-hidden grid-bg">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="scanline" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      
      {/* Urgent Top Banner */}
      <div className="bg-primary py-2.5 text-center text-[10px] sm:text-xs font-black text-primary-foreground uppercase tracking-widest px-4">
        Tempo esgotado! Adquira a plataforma imediatamente para não perder a oportunidade de aplicar o cupom <span className="bg-white text-primary px-2 py-0.5 rounded mx-1">PAIOFF50</span>
        <a href="#pricing" className="ml-2 underline hover:no-underline">Ver planos →</a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">SiteAI Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-xs font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Recursos</a>
            <a href="#gallery" className="text-xs font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Galeria</a>
            <a href="#how" className="text-xs font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Como funciona</a>
            <a href="#pricing" className="text-xs font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">Planos</a>
            <a href="#faq" className="text-xs font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="font-bold text-xs uppercase" asChild>
              <Link to="/auth">Entrar</Link>
            </Button>
            <Button className="gradient-brand border-0 font-bold px-6 shadow-xl shadow-primary/20" asChild>
              <Link to="/auth">Assinar agora</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 pt-24 pb-32 text-center overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]" />
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-20 pointer-events-none" 
          />
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="container mx-auto"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: ["-100%", "200%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 5 + i * 2,
                    repeat: Infinity,
                    delay: i * 3,
                    ease: "easeInOut",
                  }}
                  className="absolute h-[1px] w-64 bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ top: `${15 + i * 15}%`, left: 0 }}
                />
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles className="h-3 w-3" /> Inteligência Artificial de Elite
            </div>
            <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-tighter sm:text-8xl leading-[0.9] uppercase mb-8">
              Sites corporativos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Premium em minutos.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              Transforme a presença digital de qualquer empresa com design de estúdio e copy estratégica. Escalabilidade real para sua agência.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="h-16 px-12 text-lg font-black uppercase gradient-brand border-0 shadow-2xl shadow-primary/30 w-full sm:w-auto" asChild>
                <Link to="/auth">Assinar agora <ArrowRight className="ml-2 h-6 w-6" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-black uppercase border-border/60 hover:bg-muted/50 w-full sm:w-auto">
                Ver como funciona <Play className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Partners Marquee */}
        <div className="py-12 border-y border-border/40 bg-card/20 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="container mx-auto px-4 mb-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-center text-muted-foreground">Empresas parceiras na plataforma</p>
            </div>
            <div className="flex animate-marquee gap-12 whitespace-nowrap">
                {[...Array(4)].map((_, groupIdx) => (
                    <div key={groupIdx} className="flex gap-12 items-center">
                        {partners.map(p => (
                            <span key={`${groupIdx}-${p.name}`} className={`text-2xl font-black tracking-tighter opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default ${p.color}`}>
                                {p.name}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>

        {/* Features / Recursos */}
        <section id="features" className="py-32 container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                <div className="max-w-2xl">
                    <div className="text-primary text-xs font-black uppercase tracking-widest mb-4">Recursos</div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">Tudo o que você precisa <br /> pra criar como um estúdio.</h2>
                </div>
                <p className="text-muted-foreground text-lg font-medium md:text-right max-w-sm">
                    Dezenas de funcionalidades inteligentes dentro do SiteAI Pro. Veja o poder em ação.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "AI Builder Pro", desc: "Gere sites completos, copy e estrutura em segundos com prompts expert v3.0.", icon: Wand2 },
                    { title: "Prospecção VIP", desc: "Localize empresas que precisam de um site agora e aborde com scripts validados.", icon: Search },
                    { title: "Pricing Engine", desc: "Calcule orçamentos precisos com margem de lucro real e preços sugeridos.", icon: Calculator },
                    { title: "Library Premium", desc: "Acesse centenas de templates e blocos de código prontos para conversão.", icon: Library },
                    { title: "Academy", desc: "Aprenda a escalar sua agência para faturar 5 dígitos por mês com nossa metodologia.", icon: GraduationCap },
                    { title: "White Label", desc: "Apresente os resultados com sua marca e encante seus clientes.", icon: Shield },
                ].map((f, i) => (
                    <Card key={i} className="group p-8 border-border/50 bg-card/50 hover:border-primary/50 transition-all glass">
                        <f.icon className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-black uppercase mb-4 tracking-tighter">{f.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                    </Card>
                ))}
            </div>
        </section>

        {/* How it Works / Passo a Passo */}
        <section id="how" className="py-32 bg-card/30 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="text-primary text-xs font-black uppercase tracking-widest mb-4">Como funciona</div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">Três passos. <br />Resultado de estúdio.</h2>
                    <p className="text-muted-foreground text-lg font-medium">Do briefing à publicação em minutos. O fluxo completo para sua agência.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 hidden md:block" />
                    
                    {[
                        { step: "01", title: "Defina o Negócio", desc: "Insira os dados da empresa e deixe nossa IA entender o posicionamento ideal." },
                        { step: "02", title: "Gere a Estratégia", desc: "Nossa IA cria o design, a copy e a estrutura focada em conversão WhatsApp." },
                        { step: "03", title: "Feche o Contrato", desc: "Apresente um projeto impecável e valide com o cliente em tempo recorde." }
                    ].map((s, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="h-20 w-20 rounded-2xl bg-background border-2 border-border flex items-center justify-center text-2xl font-black text-primary group-hover:border-primary group-hover:scale-110 transition-all mb-8 shadow-xl">
                                {s.step}
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4">{s.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Pricing / Planos */}
        <section id="pricing" className="py-32 container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="text-primary text-xs font-black uppercase tracking-widest mb-4">Planos</div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">Escolha o ritmo <br />da sua criação.</h2>
                <div className="inline-flex items-center gap-2 p-4 rounded-2xl bg-primary/5 border border-primary/20 text-sm font-bold text-primary mt-4">
                    <Sparkles className="h-5 w-5" /> Cupom aplicado: PAIOFF50 (-50%)
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Mensal */}
                <div className="p-10 rounded-[2.5rem] border border-border bg-card/20 glass flex flex-col justify-between group hover:border-primary/30 transition-all relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Mensal</h3>
                        <p className="text-muted-foreground text-sm font-medium mb-8">Acesso completo com flexibilidade total.</p>
                        <div className="mb-8">
                            <p className="text-muted-foreground text-sm font-bold line-through">R$ 319,90</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black tracking-tighter uppercase">R$ 159,00</span>
                                <span className="text-muted-foreground text-sm font-bold uppercase">/mês</span>
                            </div>
                            <div className="inline-block px-2 py-1 rounded bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-wider mt-2">-50% OFF</div>
                        </div>
                        <ul className="space-y-4 mb-10">
                            {[ 'Acesso ao AI Builder Pro', 'Calculadora de Preços', 'Scripts de Vendas', 'Academy Starter', 'Suporte Prioritário' ].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm font-medium">
                                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check className="h-3 w-3 text-primary" />
                                    </div>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Button className="w-full h-16 text-lg font-black uppercase border-border/60 hover:bg-muted/50" variant="outline">Assinar mensal</Button>
                </div>

                {/* Vitalício */}
                <div className="p-10 rounded-[2.5rem] border-2 border-primary bg-primary/5 glass flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-primary/20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.2),transparent_70%)]" />
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-black uppercase px-4 py-2 rounded-bl-2xl tracking-widest z-10">Melhor custo-benefício</div>
                    <div className="absolute -top-24 -right-24 h-64 w-64 bg-primary/10 rounded-full blur-3xl" />
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Vitalício</h3>
                        <p className="text-muted-foreground text-sm font-medium mb-8">Pague uma vez. Use para sempre, sem mensalidade.</p>
                        <div className="mb-8">
                            <p className="text-muted-foreground text-sm font-bold line-through">R$ 597,00</p>
                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-muted-foreground text-sm font-bold uppercase">12x de</span>
                                    <span className="text-5xl font-black tracking-tighter uppercase">R$ 31,53</span>
                                </div>
                                <p className="text-sm font-bold text-primary mt-1">ou R$ 295,90 à vista</p>
                            </div>
                            <div className="inline-block px-2 py-1 rounded bg-primary/20 text-primary text-[10px] font-black uppercase tracking-wider mt-2">-50% OFF APLICADO</div>
                        </div>
                        <ul className="space-y-4 mb-10">
                            {[ 'Acesso Vitalício Ilimitado', 'Academy Completo (VIP)', 'Biblioteca Premium Full', 'Novas Funções Grátis', 'Prioridade Máxima' ].map(f => (
                                <li key={f} className="flex items-center gap-3 text-sm font-bold">
                                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                                        <Check className="h-3 w-3 text-white" />
                                    </div>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Button className="w-full h-16 text-lg font-black uppercase gradient-brand border-0 shadow-xl shadow-primary/20 relative z-10 group-hover:scale-[1.02] transition-transform">Garantir vitalício</Button>
                </div>
            </div>
            
            <p className="text-center text-[10px] text-muted-foreground mt-12 max-w-xl mx-auto uppercase font-black tracking-widest opacity-50">
                Ao adquirir qualquer plano você declara que leu e concorda com os Termos de Uso e a Política de Privacidade da plataforma SiteAI Pro.
            </p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-20">
                <div className="text-primary text-xs font-black uppercase tracking-widest mb-4">FAQ</div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">Tudo o que você <br />precisa saber.</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                    { q: "O que é o SiteAI Pro?", a: "Uma plataforma IA de alta performance para criação estratégica de sites corporativos focados em conversão WhatsApp para agências e freelancers." },
                    { q: "Preciso ter experiência com IA ou desenvolvimento?", a: "Não. Nossa inteligência cuida de toda a complexidade técnica, permitindo que você foque apenas na parte estratégica e no atendimento ao cliente." },
                    { q: "Os sites gerados são responsivos?", a: "Sim, todos os prompts e modelos são otimizados para oferecerem a melhor experiência possível em desktop, tablets e celulares." },
                    { q: "Como funcionam os scripts de abordagem?", a: "São modelos de texto validados que você pode copiar e adaptar para prospectar clientes via Instagram, WhatsApp, LinkedIn e E-mail." },
                    { q: "Posso cancelar minha assinatura mensal?", a: "Sim, o plano mensal não possui fidelidade. Você pode cancelar a qualquer momento sem letras miúdas." }
                ].map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border border-border/50 rounded-2xl bg-card/30 glass px-6 overflow-hidden">
                        <AccordionTrigger className="text-sm font-black uppercase tracking-tighter hover:text-primary transition-colors py-6">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-sm font-medium">
                            {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden bg-primary/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_60%)]" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
                    Pronto para dominar o mercado <br />
                    <span className="text-primary">de sites com IA?</span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button size="lg" className="h-16 px-12 text-lg font-black uppercase gradient-brand border-0 shadow-2xl shadow-primary/30 w-full sm:w-auto" asChild>
                        <Link to="/auth">Assinar agora</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-black uppercase border-border/60 w-full sm:w-auto" asChild>
                        <Link to="/auth">Já tenho conta</Link>
                    </Button>
                </div>
                <div className="mt-16 flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                    <span className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Geração em segundos</span>
                    <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Seus dados seguros</span>
                    <span className="flex items-center gap-2"><Check className="h-4 w-4" /> Atualizações mensais</span>
                </div>
            </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-20 bg-background relative z-10">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                            <Zap className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-black uppercase tracking-tighter">SiteAI Pro</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                        A maior plataforma de criação estratégica de sites com Inteligência Artificial para agências e freelancers do Brasil.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#" className="h-12 w-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors group">
                            <Camera className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                        </a>
                        <a href="#" className="h-12 w-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors group">
                            <MessageSquare className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                        </a>
                        <a href="#" className="h-12 w-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 transition-colors group">
                            <Zap className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                        </a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-foreground">Menu</h4>
                    <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                        <li><a href="#features" className="hover:text-primary transition-colors">Recursos</a></li>
                        <li><a href="#how" className="hover:text-primary transition-colors">Como funciona</a></li>
                        <li><a href="#pricing" className="hover:text-primary transition-colors">Planos</a></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-foreground">Suporte</h4>
                    <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                        <li><a href="#faq" className="hover:text-primary transition-colors">Perguntas Frequentes</a></li>
                        <li><Link to="/auth" className="hover:text-primary transition-colors">Entrar</Link></li>
                        <li><Link to="/auth" className="hover:text-primary transition-colors">Criar Conta</Link></li>
                    </ul>
                </div>
            </div>
            <div className="pt-12 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">© 2026 SiteAI Pro. Todos os direitos reservados.</p>
                <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                    <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                    <a href="#" className="hover:text-primary transition-colors">Termos</a>
                </div>
            </div>
        </div>
      </footer>

      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
