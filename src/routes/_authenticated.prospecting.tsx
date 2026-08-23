import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, MapPin, Globe, Info, Target, MessageSquare, Lightbulb, Zap, TrendingUp, BarChart3, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const Route = createFileRoute("/_authenticated/prospecting")({
  component: ProspectingPage,
});

function ProspectingPage() {
  const [niche, setNiche] = useState("");
  const [city, setCity] = useState("");

  const handleMapsSearch = () => {
    if (!niche || !city) return;
    const query = encodeURIComponent(`${niche} em ${city}`);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  const handleInstagramSearch = () => {
    if (!niche) return;
    const query = encodeURIComponent(niche.replace(/\s+/g, ''));
    window.open(`https://www.instagram.com/explore/tags/${query}`, '_blank');
  };

  const niches = ["Odontologia", "Advocacia", "Arquitetura", "Restaurantes", "Clínicas de Estética", "Consultoria", "Imobiliárias", "Lojas de Roupa", "Academias", "Oficinas", "Pet Shops", "Hotéis", "Fotografia", "Engenharia", "Contabilidade", "Marketing Digital", "E-commerce", "Educação"];

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-[0.9]">Prospecção Ativa</h1>
          <p className="text-muted-foreground mt-2 text-sm font-medium">Encontre e aborde clientes de alto valor com nossas ferramentas de prospecção.</p>
        </div>
      </motion.div>

      {/* Main Search Panel */}
      <Card className="p-8 glass border-primary/20 space-y-6">
        <h3 className="text-xl font-black flex items-center gap-2 uppercase tracking-tighter">
          <Search className="h-6 w-6 text-primary" /> 
          Gerador de Oportunidades
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Selecione o Nicho ou Digite</label>
            <Input 
              placeholder="Ex: Clínica Odontológica" 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="h-12 bg-background/50"
              list="niches-list"
            />
            <datalist id="niches-list">
                {niches.map(n => <option key={n} value={n} />)}
            </datalist>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Cidade / Região</label>
            <Input 
              placeholder="Ex: São Paulo, SP" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-12 bg-background/50"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button onClick={handleMapsSearch} className="h-16 gradient-brand border-0 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20">
            <MapPin className="mr-2 h-6 w-6" /> Pesquisar no Google Maps
          </Button>
          <Button onClick={handleInstagramSearch} variant="outline" className="h-16 border-border/60 hover:bg-primary/5 text-lg font-black uppercase tracking-widest">
            <Globe className="mr-2 h-6 w-6" /> Explorar no Instagram
          </Button>
        </div>
      </Card>

      {/* Dicas de Prospecção */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-8 border-border bg-card">
           <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
             <Lightbulb className="h-5 w-5 text-yellow-500" />
             Dicas Profissionais de Prospecção
           </h4>
           <div className="space-y-4 text-sm text-muted-foreground">
             <p>• <strong>Filtre por avaliações:</strong> Leads com avaliações entre 3.0 e 4.0 costumam investir para melhorar a imagem online.</p>
             <p>• <strong>Site antigo/lento:</strong> Se o site não abre no celular, é o seu argumento nº 1 de venda.</p>
             <p>• <strong>Instagram parado:</strong> Se não postam há semanas, o negócio está estagnado e precisa de renovação visual.</p>
             <p>• <strong>Horário de postagem:</strong> Aborde leads logo pela manhã (09h-10h), quando estão planejando o dia.</p>
             <p>• <strong>Google My Business:</strong> Se não possuem, a empresa é praticamente invisível localmente.</p>
           </div>
        </Card>

        <Card className="p-8 border-border bg-card">
           <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
             <Target className="h-5 w-5 text-primary" />
             Estratégias Avançadas (Ideas VIP)
           </h4>
           <div className="space-y-4">
               {[
                   "LinkedIn: Filtre por 'Decisor' em empresas de 11-50 funcionários.",
                   "E-mail Frio: Use o script de análise gratuita para quebrar o gelo.",
                   "Facebook Ads Library: Veja se o cliente já investe em tráfego.",
                   "Google My Business: Aborde quem não tem fotos atualizadas.",
                   "Portais de Notícias Locais: Veja quem está expandindo o negócio."
               ].map((item, i) => (
                   <div key={i} className="flex gap-3 text-sm p-3 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                       <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                       {item}
                   </div>
               ))}
           </div>
        </Card>
      </div>

      {/* Script Section */}
      <Card className="p-8 border-primary/20 bg-primary/5">
        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Sessão de Scripts de Abordagem
        </h4>
        <div className="text-sm space-y-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <p className="font-bold mb-2">Abordagem para Google Maps:</p>
                <p className="text-muted-foreground italic">"Olá [Nome], vi sua empresa em destaque no Maps, mas notei que o site de vocês não está otimizado para celulares. Sou especialista em sites rápidos que aumentam as vendas locais. Posso te enviar uma breve análise?"</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                <p className="font-bold mb-2">Abordagem para Instagram:</p>
                <p className="text-muted-foreground italic">"Oi [Nome], acompanho o trabalho da [Empresa] e vejo um potencial enorme para atrair mais clientes com um site que conecte seus posts diretamente ao WhatsApp. Topa ver um modelo de site focado no seu nicho?"</p>
            </div>
        </div>
      </Card>
    </div>
  );
}