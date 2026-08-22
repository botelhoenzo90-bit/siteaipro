import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Wand2, Copy, Save, Edit, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/ai-builder")({
  component: AIBuilderPage,
});

function AIBuilderPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const [context, setContext] = useState("");
  const [niche, setNiche] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [objective, setObjective] = useState("");
  const [style, setStyle] = useState("");
  const [colors, setColors] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [mainBenefit, setMainBenefit] = useState("");
  const [toneVoice, setToneVoice] = useState("");

  const niches = [
    'Clínica Médica', 'Restaurante', 'Advogado', 'Academia', 'Imobiliária', 
    'Estética', 'Pet Shop', 'E-commerce', 'Consultoria', 'Arquitetura', 
    'Educação', 'Eventos', 'Software/SaaS', 'Finanças', 'Construção'
  ];

  const objectives = [
    'Gerar Clientes', 'Agendamento Direto', 'Venda de Produto', 'Capturar Leads (Newsletter)', 
    'Autoridade de Marca', 'Portfólio', 'Educação do Público', 'Suporte ao Cliente'
  ];

  const styles = [
    'Luxuoso/Premium', 'Minimalista', 'Moderno/Tech', 'Corporativo/Sério', 
    'Vibrante/Criativo', 'Rústico/Acolhedor', 'Futurista', 'Clean/Médico'
  ];

  const tones = [
    'Profissional', 'Amigável', 'Autoritário', 'Inspirador', 'Descontraído', 'Persuasivo'
  ];

  const handleGenerate = () => {
    if (!context || !niche) {
      toast.error("Por favor, preencha pelo menos o nicho e a explicação do negócio.");
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      const generatedPrompt = `PROMPT ULTRA DETALHADO (MODO EXPERT) - SITEAI PRO v3.0
==========================================================
ESTRATÉGIA PARA: ${companyName || 'Empresa Local'} (${niche}) em ${city || 'Localização Não Definida'}
OBJETIVO: ${objective || 'Conversão Máxima'}
ESTILO VISUAL: ${style || 'Moderno'} | CORES: ${colors || 'Brand Colors'}
PÚBLICO-ALVO: ${targetAudience || 'Geral'}
TOM DE VOZ: ${toneVoice || 'Profissional'}

CONTEXTO DO NEGÓCIO (INPUT DO USUÁRIO):
"${context}"

DIFERENCIAL PRINCIPAL:
"${mainBenefit}"

DIRETRIZES DE DESIGN E CÓPIA:
1. HEADER: Focar no diferencial competitivo mencionado: ${mainBenefit}.
2. HERO SECTION: Headline ultra-específica para ${niche}, focada em ${targetAudience} usando tom ${toneVoice}.
3. SEÇÃO DE VALOR: Transformar o contexto fornecido em 5 pilares de benefícios tangíveis.
4. PROVA SOCIAL: Posicionamento estratégico baseado na autoridade local de ${city}.
5. CTA: Chamada para ação focada em ${objective} com gatilhos mentais de escassez.
6. ESTRUTURA TÉCNICA: Seções de FAQ, Depoimentos, Galeria de Projetos e Rodapé completo.

TÉCNICO: Layout responsivo, animações Framer Motion, Clean UI, tipografia premium.`;

      setResult(generatedPrompt);
      setLoading(false);
      toast.success("Prompt estratégico gerado com sucesso!");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Site Builder Pro</h1>
        <p className="text-muted-foreground">Crie prompts ultra-detalhados com tópicos avançados de conversão.</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Tipo de Negócio</Label>
            <Select onValueChange={setNiche}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o nicho" />
              </SelectTrigger>
              <SelectContent>
                {niches.map(n => (
                  <SelectItem key={n} value={n.toLowerCase()}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Nome da Empresa</Label>
            <Input placeholder="Ex: Clínica Harmony" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Cidade</Label>
            <Input placeholder="Ex: São Paulo" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Objetivo do Site</Label>
            <Select onValueChange={setObjective}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o objetivo" />
              </SelectTrigger>
              <SelectContent>
                {objectives.map(o => (
                  <SelectItem key={o} value={o.toLowerCase()}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Público-Alvo</Label>
            <Input placeholder="Ex: Mulheres de 25-45 anos interessadas em estética" value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Diferencial Principal</Label>
            <Input placeholder="Ex: Atendimento humanizado e tecnologia exclusiva" value={mainBenefit} onChange={(e) => setMainBenefit(e.target.value)} />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Explique seu Negócio (Contexto para a IA)</Label>
          <Textarea 
            placeholder="Descreva seu negócio, diferenciais e o que torna sua oferta única..." 
            className="min-h-[120px]"
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>Estilo Visual</Label>
            <Select onValueChange={setStyle}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o estilo" />
              </SelectTrigger>
              <SelectContent>
                {styles.map(s => (
                  <SelectItem key={s} value={s.toLowerCase()}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Tom de Voz</Label>
            <Select onValueChange={setToneVoice}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tom" />
              </SelectTrigger>
              <SelectContent>
                {tones.map(t => (
                  <SelectItem key={t} value={t.toLowerCase()}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Cores Desejadas</Label>
            <Input placeholder="Ex: Dourado e Branco" value={colors} onChange={(e) => setColors(e.target.value)} />
          </div>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          className="w-full h-12 gradient-brand border-0"
        >
          {loading ? "Gerando Prompt Estratégico..." : <>Gerar Prompt Ultra-Detalhado <Wand2 className="ml-2 h-5 w-5" /></>}
        </Button>
      </div>

      {result && (
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Resultado do Prompt Premium</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" onClick={() => { navigator.clipboard.writeText(result); toast.info("Prompt copiado!"); }}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline"><Save className="h-4 w-4" /></Button>
              <Button size="icon" variant="outline"><Edit className="h-4 w-4" /></Button>
              <Button size="icon" variant="outline"><Download className="h-4 w-4" /></Button>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-background border border-border font-mono text-sm whitespace-pre-wrap">
            {result}
          </div>
        </div>
      )}
    </div>
  );
}