import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Copy, Check, Send, Phone, Instagram, Linkedin, Globe } from "lucide-react";
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
      icon: Instagram,
      color: "text-pink-500",
      items: [
        {
          title: "Abordagem Elogio + Gancho",
          text: "Olá [Nome], tudo bem? Acompanho seu trabalho na [Empresa] e vejo que vocês têm um posicionamento incrível. Notei que o link da bio poderia converter muito mais se tivesse um site focado em agendamentos. Já pensou em modernizar sua presença digital?"
        },
        {
          title: "Parceria Estratégica",
          text: "Oi [Nome], sou desenvolvedor de sites para o nicho de [Nicho]. Vi que seu perfil é referência na região de [Cidade], mas senti falta de uma página que facilite a vida do seu cliente. Toparia uma breve conversa sobre como automatizar suas vendas via site?"
        }
      ]
    },
    {
      category: "WhatsApp / Frio",
      icon: Phone,
      color: "text-green-500",
      items: [
        {
          title: "Abordagem Direta (Gatilho de Prova)",
          text: "Olá [Nome], sou o [Seu Nome]. Acabei de entregar um projeto para uma clínica no mesmo segmento que a sua e tivemos um aumento de 30% nos contatos. Vi o site atual de vocês e identifiquei 3 pontos que estão fazendo vocês perderem dinheiro hoje. Podemos conversar?"
        },
        {
          title: "Sugestão de Melhoria (Vídeo/Áudio)",
          text: "Fala [Nome], tudo bom? Estava navegando pelo Google e encontrei a [Empresa]. Tentei abrir o site pelo celular e ele demorou muito para carregar, o que afasta clientes. Criei um esboço de como ele ficaria na versão 2026. Quer ver?"
        }
      ]
    },
    {
      category: "LinkedIn (B2B)",
      icon: Linkedin,
      color: "text-blue-600",
      items: [
        {
          title: "Conexão Profissional",
          text: "Prezado [Nome], é um prazer conectar. Vejo que a [Empresa] está em expansão. Trabalho auxiliando empresas a consolidarem sua autoridade digital através de plataformas de alta conversão. Gostaria de trocar uma ideia sobre seus objetivos para este semestre?"
        }
      ]
    },
    {
      category: "E-mail Marketing",
      icon: Globe,
      color: "text-primary",
      items: [
        {
          title: "Assunto: Análise do site [Empresa]",
          text: "Olá [Nome],\n\nEstive analisando a presença digital da [Empresa] e notei que vocês estão investindo em tráfego, porém o site atual não possui elementos de conversão modernos (como FAQ dinâmico e CTAs inteligentes).\n\nPreparei uma proposta de renovação que se paga em menos de 30 dias com o aumento das conversões.\n\nAguardo seu retorno."
        }
      ]
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Script copiado para a área de transferência!");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold tracking-tight">Scripts de Abordagem</h1>
        <p className="text-muted-foreground mt-2">Modelos validados para transformar leads em clientes pagantes.</p>
      </motion.div>

      <div className="grid gap-8">
        {scripts.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <section.icon className={`h-6 w-6 ${section.color}`} />
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <Card key={i} className="p-6 border-border/50 hover:border-primary/30 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="font-bold text-sm text-primary">{item.title}</p>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>
                  <Button 
                    onClick={() => copyToClipboard(item.text)}
                    variant="secondary" 
                    className="mt-6 w-full"
                  >
                    <Copy className="mr-2 h-4 w-4" /> Copiar Script
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}