import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Copy, Camera, Phone, Briefcase, Globe, Info, Zap, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const Route = createFileRoute("/_authenticated/scripts")({
  component: ScriptsPage,
});

function ScriptsPage() {
  const scripts = [
    {
      category: "Instagram (Direct)",
      icon: Camera,
      color: "text-pink-500",
      description: "Ideal para marcas visuais como clínicas, lojas e restaurantes.",
      items: [
        {
          title: "Abordagem Elogio + Gancho",
          text: "Olá [Nome], tudo bem? Acompanho seu trabalho na [Empresa] e vejo que vocês têm um posicionamento incrível. Notei que o link da bio poderia converter muito mais se tivesse um site focado em agendamentos. Já pensou em modernizar sua presença digital?"
        },
        {
          title: "Parceria Estratégica",
          text: "Oi [Nome], sou desenvolvedor de sites para o nicho de [Nicho]. Vi que seu perfil é referência na região de [Cidade], mas senti falta de uma página que facilite a vida do seu cliente. Toparia uma breve conversa sobre como automatizar suas vendas via site?"
        },
        {
          title: "Gatilho de Autoridade",
          text: "Olá [Nome]! Acabei de entregar um site para uma empresa do seu setor e eles dobraram o número de contatos semanais apenas com a mudança de layout. Vi que o seu perfil é muito forte e um site premium seria o próximo passo ideal. Topa conhecer o modelo?"
        }
      ]
    },
    {
      category: "WhatsApp / Abordagem Fria",
      icon: Phone,
      color: "text-green-500",
      description: "Comunicação direta para fechamentos rápidos.",
      items: [
        {
          title: "Abordagem Direta (Gatilho de Prova)",
          text: "Olá [Nome], sou o [Seu Nome]. Acabei de entregar um projeto para uma clínica no mesmo segmento que a sua e tivemos um aumento de 30% nos contatos. Vi o site atual de vocês e identifiquei 3 pontos que estão fazendo vocês perderem dinheiro hoje. Podemos conversar?"
        },
        {
          title: "Sugestão de Melhoria (Vídeo/Áudio)",
          text: "Fala [Nome], tudo bom? Estava navegando pelo Google e encontrei a [Empresa]. Tentei abrir o site pelo celular e ele demorou muito para carregar, o que afasta clientes. Criei um esboço de como ele ficaria na versão 2026. Quer ver?"
        },
        {
          title: "Quebra de Objeção (Preço)",
          text: "Entendo seu ponto sobre investimento, [Nome]. Por isso mesmo eu foco em sites que se pagam sozinhos através do aumento de conversão. Se eu te mostrar que o site se paga em 2 meses, a gente consegue avançar?"
        }
      ]
    },
    {
      category: "LinkedIn (B2B Corporativo)",
      icon: Briefcase,
      color: "text-blue-600",
      description: "Abordagem formal para empresas de médio/grande porte.",
      items: [
        {
          title: "Conexão Profissional",
          text: "Prezado [Nome], é um prazer conectar. Vejo que a [Empresa] está em expansão. Trabalho auxiliando empresas a consolidarem sua autoridade digital através de plataformas de alta conversão. Gostaria de trocar uma ideia sobre seus objetivos para este semestre?"
        },
        {
          title: "Análise de Concorrência",
          text: "Olá [Nome], notei que alguns de seus concorrentes diretos atualizaram suas plataformas digitais recentemente. Preparei um estudo de benchmarking focado em como a [Empresa] pode se destacar visualmente no mercado. Teria 10 minutos para uma call?"
        }
      ]
    },
    {
      category: "E-mail de Alta Conversão",
      icon: Globe,
      color: "text-primary",
      description: "Scripts estruturados para campanhas de Cold Mail.",
      items: [
        {
          title: "Assunto: Análise do site [Empresa]",
          text: "Olá [Nome],\n\nEstive analisando a presença digital da [Empresa] e notei que vocês estão investindo em tráfego, porém o site atual não possui elementos de conversão modernos (como FAQ dinâmico e CTAs inteligentes).\n\nPreparei uma proposta de renovação que se paga em menos de 30 dias com o aumento das conversões.\n\nAguardo seu retorno."
        },
        {
          title: "Assunto: Proposta estratégica para [Nicho]",
          text: "Bom dia [Nome],\n\nSou especialista em tecnologia para o setor de [Nicho] e ajudo empresas a captarem leads qualificados no automático.\n\nVi que o site da [Empresa] ainda não utiliza [Recurso Específico]. Gostaria de agendar uma breve demonstração de como isso pode impactar seu faturamento?\n\nAbs!"
        }
      ]
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Script copiado para a área de transferência!");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl font-black tracking-tight uppercase">Scripts de Venda</h1>
          <p className="text-muted-foreground mt-2">Abordagens validadas para converter contatos em contratos fechados.</p>
        </div>
        <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl flex items-center gap-4">
            <Star className="h-6 w-6 text-primary" />
            <div className="text-xs">
                <p className="font-bold text-primary">DICA VIP</p>
                <p className="text-muted-foreground uppercase font-black">Personalize sempre o 1º parágrafo.</p>
            </div>
        </div>
      </motion.div>

      <div className="grid gap-12">
        {scripts.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <div className="flex flex-col border-b border-border pb-4">
              <h2 className="text-2xl font-black flex items-center gap-3 uppercase tracking-tighter">
                <section.icon className={`h-8 w-8 ${section.color}`} />
                {section.category}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <Card key={i} className="group p-6 border-border/50 hover:border-primary/50 transition-all flex flex-col justify-between glass relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                    <Send className="h-12 w-12 text-primary" />
                  </div>
                  <div className="space-y-4 relative z-10">
                    <p className="font-black text-[10px] text-primary uppercase tracking-widest">{item.title}</p>
                    <div className="p-4 bg-background/50 rounded-xl border border-border/50 min-h-[120px]">
                      <p className="text-sm text-foreground italic leading-relaxed">
                        "{item.text}"
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => copyToClipboard(item.text)}
                    className="mt-6 w-full gradient-brand border-0 font-bold shadow-lg shadow-primary/10 group-hover:scale-[1.02] transition-transform"
                  >
                    <Copy className="mr-2 h-4 w-4" /> Copiar para Vender
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <Card className="p-8 border-primary/20 bg-primary/5 rounded-3xl">
        <div className="flex gap-6 flex-col md:flex-row items-center">
            <div className="h-20 w-20 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-xl shadow-primary/20">
                <Zap className="h-10 w-10 text-white" />
            </div>
            <div>
                <h3 className="text-xl font-black uppercase">Regra de Ouro do Fechamento</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Não foque em vender um "site". Foque em vender o <strong>resultado</strong> que o site trará. 
                    Seja aumento de clientes, autoridade de marca ou automação de processos. O site é apenas a ferramenta.
                </p>
            </div>
        </div>
      </Card>
    </div>
  );
}