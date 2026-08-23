import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Wand2, Copy, Save, Edit, Download, Info, Lightbulb } from "lucide-react";
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
    if (!context || !niche || !companyName) {
      toast.error("Por favor, preencha o nome da empresa, o nicho e a explicação do negócio.");
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      const generatedPrompt = `Crie o MELHOR SITE POSSÍVEL para a empresa abaixo, interpretando todas as informações fornecidas e transformando-as em um projeto único, profissional e altamente personalizado.

INFORMAÇÕES:
Empresa: ${companyName}
Nicho: ${niche}
Cidade: ${city || 'Brasil'}
Objetivo: ${objective || 'Conversão'}
Público-alvo: ${targetAudience || 'Clientes em potencial'}
Diferencial: ${mainBenefit || 'Qualidade e Profissionalismo'}
Contexto: ${context}
Estilo visual: ${style || 'Moderno'}
Tom de voz: ${toneVoice || 'Profissional'}
Cores desejadas: ${colors || 'A definir'}

IMPORTANTE:
Não apenas preencha um template. Analise e CRUZE todas essas informações antes de definir o site.

O nicho escolhido, o público, o objetivo, o contexto, o diferencial, o estilo e as cores devem determinar a aparência, estrutura, imagens, copy, componentes e experiência do site.

Crie um projeto que pareça ter sido desenvolvido exclusivamente para essa empresa por uma agência digital premium.

DESIGN:
O site deve ser extremamente bonito, moderno, sofisticado, elegante e visualmente impressionante.

Crie uma direção de arte própria para o nicho escolhido. Escolha cuidadosamente:
- tipografia
- hierarquia visual
- espaçamento
- composição
- proporções
- formas
- ícones
- bordas
- sombras
- contrastes
- elementos decorativos
- animações

As CORES INFORMADAS devem ser utilizadas como base da identidade visual, criando uma paleta profissional e harmoniosa. Não espalhe as cores aleatoriamente.

O estilo visual informado deve ser respeitado em todo o projeto.

IMAGENS:
Utilize imagens grandes, bonitas, profissionais e diretamente relacionadas ao nicho. Não faça um site somente com textos e cards.

As imagens devem aparecer principalmente no Hero e nas seções onde ajudam a apresentar serviços, produtos, ambiente, profissionais, projetos ou resultados.

Escolha imagens que combinem com o público e com o posicionamento da empresa. Nunca utilize imagens aleatórias apenas para preencher espaço.

ESTRUTURA:
Não use sempre a mesma estrutura.

Escolha as melhores seções para aquele negócio, podendo utilizar:
Hero, Sobre, Benefícios, Serviços, Produtos, Como Funciona, Diferenciais, Portfólio, Galeria, Resultados, Depoimentos, FAQ, Contato e CTA final.

A estrutura deve contar uma história e conduzir o visitante de:
ATENÇÃO → INTERESSE → CONFIANÇA → DESEJO → AÇÃO.

SERVIÇOS:
Apresente os serviços de maneira visual e sofisticada. Use cards, imagens, carrosséis, sliders, tabs ou outros componentes quando fizer sentido. Evite uma página cheia de cards iguais.

HERO:
Crie uma primeira dobra excepcional, com headline específica, subheadline, CTA forte e imagem/composição visual relacionada ao negócio. O visitante deve entender imediatamente o que a empresa faz e por que deveria continuar navegando.

COPY:
Crie textos específicos utilizando o contexto fornecido. O conteúdo deve combinar com o tom de voz e público. Não use frases genéricas e não invente informações.

CONVERSÃO:
O site deve ser bonito E estratégico. Destaque benefícios, diferenciais, confiança e CTAs de acordo com o objetivo informado.

DIRETRIZ OBRIGATÓRIA DE CONVERSÃO:
- O site DEVE possuir botões de chamada para ação (CTA) em TODAS as seções sem exceção.
- Todos os botões do site devem direcionar o usuário para o WhatsApp da empresa.

FAQ:
Quando fizer sentido, criar 5–8 perguntas relevantes ao negócio em um accordion elegante.

DEPOIMENTOS:
Quando existirem informações reais, apresentar em um carrossel moderno e elegante. Nunca inventar clientes ou avaliações.

UX E RESPONSIVIDADE:
Criar experiência excelente em desktop e mobile. Navegação intuitiva, botões claros, carrosséis funcionais, espaçamento adequado e nenhum elemento quebrado ou cortado.

ANIMAÇÕES:
Adicionar microinterações, hover effects, transições e animações suaves ao scroll quando agregarem qualidade. Nada exagerado.

REGRA FINAL:
Não entregue um site apenas funcional.

Entregue uma experiência digital IMPECÁVEL, bonita, sofisticada, moderna, personalizada e memorável.

Se o resultado parecer um template genérico, REFAÇA a direção visual.

O objetivo é que o cliente veja o site e pense:
"Isso parece ter sido feito especificamente para a minha empresa."

PRIORIDADE:
PERSONALIZAÇÃO + DIREÇÃO DE ARTE + IMAGENS + DESIGN + UX + CONVERSÃO.`;

      setResult(generatedPrompt);
      setLoading(false);
      toast.success("Prompt profissional gerado!");
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div>
        <h1 className="text-4xl font-black tracking-tighter uppercase leading-[0.9]">AI Site Builder Pro</h1>
        <p className="text-muted-foreground mt-2 text-sm font-medium">Gere prompts profissionais de alta conversão para criar sites incríveis com IA.</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Tipo de Negócio</Label>
            <Select onValueChange={setNiche}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Selecione o nicho" />
              </SelectTrigger>
              <SelectContent>
                {niches.map(n => (
                  <SelectItem key={n} value={n}>{n}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Nome da Empresa</Label>
            <Input placeholder="Ex: Clínica Harmony" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Cidade</Label>
            <Input placeholder="Ex: São Paulo" value={city} onChange={(e) => setCity(e.target.value)} className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Objetivo do Site</Label>
            <Select onValueChange={setObjective}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Selecione o objetivo" />
              </SelectTrigger>
              <SelectContent>
                {objectives.map(o => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Público-Alvo</Label>
            <Input placeholder="Ex: Mulheres de 25-45 anos interessadas em estética" value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label>Diferencial Principal</Label>
            <Input placeholder="Ex: Atendimento humanizado e tecnologia exclusiva" value={mainBenefit} onChange={(e) => setMainBenefit(e.target.value)} className="bg-background/50" />
          </div>
        </div>

        {/* Highlighted Business Context Field */}
        <div className="space-y-4 p-6 rounded-2xl border-2 border-primary/20 bg-primary/5 shadow-sm">
          <div className="flex items-center gap-2">
            <Label className="text-lg font-bold">Explique seu Negócio (Contexto para a IA)</Label>
            <div className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Essencial</div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <Textarea 
                placeholder="Dica: O que sua empresa faz? Quais serviços oferece? Quem são seus clientes? Qual problema resolve? Quais são seus diferenciais? Qual sensação o site deve transmitir?" 
                className="min-h-[200px] bg-background text-base"
                value={context}
                onChange={(e) => setContext(e.target.value)}
              />
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary" />
                  Essa é a parte mais importante do processo.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Quanto mais detalhes você fornecer sobre seu negócio, seus serviços, clientes, diferenciais e objetivos, mais profissional e personalizado será o prompt gerado. 
                  <strong> Não escreva apenas o segmento.</strong> Explique como sua empresa funciona, quais problemas resolve, quais serviços oferece, quem são seus clientes, seus diferenciais e qual imagem deseja transmitir.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                <p className="text-xs font-bold text-red-500 uppercase flex items-center gap-1">
                  <Edit className="h-3 w-3" /> Exemplo Ruim
                </p>
                <p className="text-xs italic text-muted-foreground">"Tenho uma clínica odontológica."</p>
              </div>
              
              <div className="p-4 rounded-xl bg-background border border-primary/30 space-y-2">
                <p className="text-xs font-bold text-green-500 uppercase flex items-center gap-1">
                  <Lightbulb className="h-3 w-3" /> Exemplo Ideal
                </p>
                <p className="text-xs italic text-muted-foreground leading-relaxed">
                  "Somos uma clínica odontológica especializada em implantes e estética dental. Atendemos pacientes que buscam recuperar o sorriso com segurança e acompanhamento personalizado. Nosso diferencial é o atendimento humanizado, tecnologia moderna e profissionais especializados. Queremos transmitir confiança, qualidade e gerar novos agendamentos pelo WhatsApp."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>Estilo Visual</Label>
            <Select onValueChange={setStyle}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Selecione o estilo" />
              </SelectTrigger>
              <SelectContent>
                {styles.map(s => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Tom de Voz</Label>
            <Select onValueChange={setToneVoice}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Selecione o tom" />
              </SelectTrigger>
              <SelectContent>
                {tones.map(t => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Cores Desejadas</Label>
            <Input placeholder="Ex: Dourado e Branco" value={colors} onChange={(e) => setColors(e.target.value)} className="bg-background/50" />
          </div>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={loading}
          className="w-full h-16 gradient-brand border-0 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20"
        >
          {loading ? "Processando Inteligência..." : <>Gerar Prompt Profissional <Wand2 className="ml-2 h-5 w-5" /></>}
        </Button>
      </div>

      {result && (
        <div className="rounded-2xl border-2 border-primary border-dashed bg-primary/5 p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <h3 className="text-xl font-bold">PROMPT GERADO:</h3>
            </div>
            <Button 
              onClick={() => { navigator.clipboard.writeText(result); toast.success("Prompt copiado!"); }}
              className="gradient-brand border-0"
            >
              <Copy className="mr-2 h-4 w-4" /> Copiar Prompt Profissional
            </Button>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border font-mono text-sm whitespace-pre-wrap leading-relaxed max-h-[500px] overflow-y-auto">
            {result}
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Copie o prompt acima e utilize na sua ferramenta de IA favorita (Bolt.new, Lovable, v0, Cursor, etc).
          </p>
        </div>
      )}
    </div>
  );
}