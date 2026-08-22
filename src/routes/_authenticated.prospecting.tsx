import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, MapPin, Instagram, Globe, Info, Target, MessageSquare, Lightbulb, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const strategyCards = [
    {
      title: "Google Maps (Local)",
      icon: MapPin,
      desc: "A melhor fonte para negócios locais sem site ou com sites antigos.",
      tips: ["Busque por: 'Restaurantes', 'Clínicas', 'Advogados'", "Olhe a 2ª ou 3ª página de resultados", "Verifique se o site é responsivo"]
    },
    {
      title: "Instagram (Visual)",
      icon: Instagram,
      desc: "Ideal para nichos de estética, gastronomia e moda.",
      tips: ["Busque por hashtags locais (#dentistasp)", "Analise a bio e o link da bio", "Dê um 'curtir' em posts recentes antes de chamar"]
    },
    {
      title: "LinkedIn (B2B)",
      icon: Target,
      desc: "Foco em empresas de tecnologia, consultoria e serviços corporativos.",
      tips: ["Filtre por decisores (CEO, Marketing, Fundador)", "Use o Sales Navigator se possível", "Personalize a conexão com um elogio"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Prospecção Ativa</h1>
          <p className="text-muted-foreground mt-1">Encontre seus próximos clientes usando ferramentas inteligentes.</p>
        </div>
        <div className="flex gap-2">
           <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mt-2.5" />
           <span className="text-sm font-medium text-green-500">Radar de Oportunidades Ativo</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Search Panel */}
        <Card className="lg:col-span-2 p-8 glass border-primary/20 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" /> 
              Busca Rápida de Leads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Nicho / Categoria</label>
                <Input 
                  placeholder="Ex: Clínica Odontológica" 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Cidade / Região</label>
                <Input 
                  placeholder="Ex: São Paulo, SP" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-background/50"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <Button onClick={handleMapsSearch} className="h-12 gradient-brand border-0">
                <MapPin className="mr-2 h-4 w-4" /> Pesquisar no Google Maps
              </Button>
              <Button onClick={handleInstagramSearch} variant="outline" className="h-12 border-primary/30 hover:bg-primary/5">
                <Instagram className="mr-2 h-4 w-4" /> Explorar no Instagram
              </Button>
            </div>
          </div>

          <div className="pt-6 border-t border-border/50">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Atalhos Estratégicos</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" size="sm" className="bg-muted/30" onClick={() => window.open('https://www.linkedin.com', '_blank')}>
                <Target className="mr-2 h-3.5 w-3.5" /> LinkedIn Jobs
              </Button>
              <Button variant="secondary" size="sm" className="bg-muted/30" onClick={() => window.open('https://app.apollo.io', '_blank')}>
                <Globe className="mr-2 h-3.5 w-3.5" /> Apollo.io
              </Button>
              <Button variant="secondary" size="sm" className="bg-muted/30" onClick={() => window.open('https://registro.br/2/whois', '_blank')}>
                <Info className="mr-2 h-3.5 w-3.5" /> Whois (Verificar Domínio)
              </Button>
            </div>
          </div>
        </Card>

        {/* Stats/Status */}
        <div className="space-y-6">
          <Card className="p-6 bg-primary/5 border-primary/20">
             <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Dica de Ouro</h4>
                  <p className="text-xs text-muted-foreground">Oportunidade detectada</p>
                </div>
             </div>
             <p className="text-sm text-foreground/80 leading-relaxed italic">
               "Empresas que aparecem no Maps mas não têm ícone de 'Site' são suas maiores oportunidades. O site delas pode não estar indexado ou simplesmente não existir."
             </p>
          </Card>
          
          <Card className="p-6 border-border bg-card">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" /> Script de Abordagem
            </h4>
            <div className="text-xs space-y-3 text-muted-foreground">
              <p>"Olá [Nome], notei que sua empresa [Nome da Empresa] é destaque em [Cidade], mas o site atual não está convertendo visitantes em clientes no celular."</p>
              <p>"Sou especialista em sites de alta conversão para [Nicho] e criei uma demonstração de como seu novo site poderia ser..."</p>
              <Button variant="link" size="sm" className="p-0 h-auto text-primary">Copiar script completo</Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Onde Prospectar Hoje?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategyCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full p-6 border-border/50 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-muted/50 flex items-center justify-center mb-4">
                  <card.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                <ul className="space-y-2">
                  {card.tips.map((tip, i) => (
                    <li key={i} className="text-xs flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
