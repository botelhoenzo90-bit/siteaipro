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
      const generatedPrompt = `Crie um site profissional, moderno e de alta conversão para:

Nome da empresa:
${companyName}

Segmento:
${niche}

Localização:
${city || 'Brasil'}

Objetivo principal do site:
${objective || 'Conversão'}

Público-alvo:
${targetAudience || 'Clientes em potencial'}

Diferencial principal:
${mainBenefit || 'Qualidade e Profissionalismo'}

Contexto completo da empresa:
${context}

Direção visual:

Estilo:
${style || 'Moderno'}

Tom de comunicação:
${toneVoice || 'Profissional'}

Cores:
${colors || 'A definir'}

Crie um site com aparência premium, como se tivesse sido desenvolvido por uma agência profissional especializada.

O site deve transmitir confiança, autoridade, profissionalismo e incentivar o visitante a entrar em contato.

ESTRUTURA DO SITE:

1. HERO SECTION
Criar uma primeira tela extremamente impactante.
Adicionar:
- Título principal forte e persuasivo.
- Subtítulo explicando claramente a solução.
- Botão de ação principal.
- Imagem profissional relacionada ao negócio.
- Elementos visuais modernos.
A primeira dobra deve explicar rapidamente:
Quem é a empresa.
O que ela oferece.
Por que escolher essa empresa.

2. SOBRE A EMPRESA
Criar uma apresentação estratégica.
Adicionar:
- História da empresa.
- Missão.
- Valores.
- Experiência.
- Autoridade.

3. SERVIÇOS
Criar uma seção profissional apresentando os serviços.
Usar cards modernos ou carrossel horizontal.
Cada serviço deve possuir:
- Nome.
- Descrição.
- Benefício para o cliente.
- Ícone ou imagem.

4. BENEFÍCIOS E DIFERENCIAIS
Criar uma seção mostrando:
- Principais vantagens.
- Diferenciais competitivos.
- Motivos para escolher a empresa.

5. COMO FUNCIONA
Criar uma seção em etapas:
Etapa 1: Primeiro contato.
Etapa 2: Análise da necessidade.
Etapa 3: Execução do serviço.
Etapa 4: Entrega do resultado.
Usar design visual moderno.

6. PROVA SOCIAL
Criar uma seção de depoimentos.
Adicionar: Carrossel de depoimentos deslizante.
Cada card: Foto, Nome, Avaliação, Comentário.
Criar movimento suave e elegante.

7. PORTFÓLIO / RESULTADOS
Criar uma área visual mostrando: Projetos, Trabalhos realizados, Resultados, Antes e depois quando aplicável.

8. FAQ
Criar uma seção de perguntas frequentes.
Adicionar perguntas estratégicas para eliminar dúvidas e objeções.
Criar aproximadamente 6 perguntas com respostas profissionais.

9. CTA FINAL
Criar uma chamada forte para conversão.
Adicionar: Frase persuasiva, Botão WhatsApp, Incentivo para solicitar orçamento ou agendamento.

10. FOOTER
Criar rodapé profissional com: Logo, Contatos, Redes sociais, Endereço.

REQUISITOS DE DESIGN:
O site deve ter:
- Design premium.
- Aparência exclusiva.
- Responsividade completa.
- Mobile first.
- Animações suaves.
- Tipografia moderna.
- Espaçamento profissional.
- Excelente experiência visual.

DIRETRIZ OBRIGATÓRIA DE CONVERSÃO:
- O site DEVE possuir botões de chamada para ação (CTA) em TODAS as seções sem exceção.
- Todos os botões do site devem direcionar o usuário para o WhatsApp da empresa.
- As chamadas nos botões devem ser persuasivas e variadas (ex: "Falar com Especialista", "Solicitar Orçamento", "Agendar agora").

Evitar qualquer aparência de template pronto.
O resultado deve parecer um projeto desenvolvido por uma agência profissional de criação de sites.
Priorizar: Conversão via WhatsApp, Confiança, Autoridade, Clareza da oferta, Experiência do usuário.`;

      setResult(generatedPrompt);
      setLoading(false);
      toast.success("Prompt profissional gerado!");
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Site Builder Pro</h1>
        <p className="text-muted-foreground text-sm">Gere prompts profissionais de alta conversão para criar sites incríveis com IA.</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Tipo de Negócio</Label>
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
            <Label>Nome da Empresa</Label>
            <Input placeholder="Ex: Clínica Harmony" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label>Cidade</Label>
            <Input placeholder="Ex: São Paulo" value={city} onChange={(e) => setCity(e.target.value)} className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label>Objetivo do Site</Label>
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
          className="w-full h-14 gradient-brand border-0 text-lg font-bold shadow-lg shadow-primary/20"
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