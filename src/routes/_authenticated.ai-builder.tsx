import { createFileRoute } from "@tanstack/react-router";
2: import { useState } from "react";
3: import { Wand2, Copy, Save, Edit, Download, Info, Lightbulb } from "lucide-react";
4: import { Button } from "@/components/ui/button";
5: import { Input } from "@/components/ui/input";
6: import { Label } from "@/components/ui/label";
7: import { Textarea } from "@/components/ui/textarea";
8: import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
9: import { toast } from "sonner";
10: 
11: export const Route = createFileRoute("/_authenticated/ai-builder")({
12:   component: AIBuilderPage,
13: });
14: 
15: function AIBuilderPage() {
16:   const [loading, setLoading] = useState(false);
17:   const [result, setResult] = useState<string | null>(null);
18: 
19:   const [context, setContext] = useState("");
20:   const [niche, setNiche] = useState("");
21:   const [companyName, setCompanyName] = useState("");
22:   const [city, setCity] = useState("");
23:   const [objective, setObjective] = useState("");
24:   const [style, setStyle] = useState("");
25:   const [colors, setColors] = useState("");
26:   const [targetAudience, setTargetAudience] = useState("");
27:   const [mainBenefit, setMainBenefit] = useState("");
28:   const [toneVoice, setToneVoice] = useState("");
29: 
30:   const niches = [
31:     'Clínica Médica', 'Restaurante', 'Advogado', 'Academia', 'Imobiliária', 
32:     'Estética', 'Pet Shop', 'E-commerce', 'Consultoria', 'Arquitetura', 
33:     'Educação', 'Eventos', 'Software/SaaS', 'Finanças', 'Construção'
34:   ];
35: 
36:   const objectives = [
37:     'Gerar Clientes', 'Agendamento Direto', 'Venda de Produto', 'Capturar Leads (Newsletter)', 
38:     'Autoridade de Marca', 'Portfólio', 'Educação do Público', 'Suporte ao Cliente'
39:   ];
40: 
41:   const styles = [
42:     'Luxuoso/Premium', 'Minimalista', 'Moderno/Tech', 'Corporativo/Sério', 
43:     'Vibrante/Criativo', 'Rústico/Acolhedor', 'Futurista', 'Clean/Médico'
44:   ];
45: 
46:   const tones = [
47:     'Profissional', 'Amigável', 'Autoritário', 'Inspirador', 'Descontraído', 'Persuasivo'
48:   ];
49: 
50:   const handleGenerate = () => {
51:     if (!context || !niche || !companyName) {
52:       toast.error("Por favor, preencha o nome da empresa, o nicho e a explicação do negócio.");
53:       return;
54:     }
55: 
56:     setLoading(true);
57:     
58:     setTimeout(() => {
59:       const generatedPrompt = `Crie um site profissional, moderno e de alta conversão para:
60: 
61: Nome da empresa:
62: ${companyName}
63: 
64: Segmento:
65: ${niche}
66: 
67: Localização:
68: ${city || 'Brasil'}
69: 
70: Objetivo principal do site:
71: ${objective || 'Conversão'}
72: 
73: Público-alvo:
74: ${targetAudience || 'Clientes em potencial'}
75: 
76: Diferencial principal:
77: ${mainBenefit || 'Qualidade e Profissionalismo'}
78: 
79: Contexto completo da empresa:
80: ${context}
81: 
82: Direção visual:
83: 
84: Estilo:
85: ${style || 'Moderno'}
86: 
87: Tom de comunicação:
88: ${toneVoice || 'Profissional'}
89: 
90: Cores:
91: ${colors || 'A definir'}
92: 
93: Crie um site com aparência premium, como se tivesse sido desenvolvido por uma agência profissional especializada.
94: 
95: O site deve transmitir confiança, autoridade, profissionalismo e incentivar o visitante a entrar em contato.
96: 
97: ESTRUTURA DO SITE:
98: 
99: 1. HERO SECTION
100: Criar uma primeira tela extremamente impactante.
101: Adicionar:
102: - Título principal forte e persuasivo.
103: - Subtítulo explicando claramente a solução.
104: - Botão de ação principal.
105: - Imagem profissional relacionada ao negócio.
106: - Elementos visuais modernos.
107: A primeira dobra deve explicar rapidamente:
108: Quem é a empresa.
109: O que ela oferece.
110: Por que escolher essa empresa.
111: 
112: 2. SOBRE A EMPRESA
113: Criar uma apresentação estratégica.
114: Adicionar:
115: - História da empresa.
116: - Missão.
117: - Valores.
118: - Experiência.
119: - Autoridade.
120: 
121: 3. SERVIÇOS
122: Criar uma seção profissional apresentando os serviços.
123: Usar cards modernos ou carrossel horizontal.
124: Cada serviço deve possuir:
125: - Nome.
126: - Descrição.
127: - Benefício para o cliente.
128: - Ícone ou imagem.
129: 
130: 4. BENEFÍCIOS E DIFERENCIAIS
131: Criar uma seção mostrando:
132: - Principais vantagens.
133: - Diferenciais competitivos.
134: - Motivos para escolher a empresa.
135: 
136: 5. COMO FUNCIONA
137: Criar uma seção em etapas:
138: Etapa 1: Primeiro contato.
139: Etapa 2: Análise da necessidade.
140: Etapa 3: Execução do serviço.
141: Etapa 4: Entrega do resultado.
142: Usar design visual moderno.
143: 
144: 6. PROVA SOCIAL
145: Criar uma seção de depoimentos.
146: Adicionar: Carrossel de depoimentos deslizante.
147: Cada card: Foto, Nome, Avaliação, Comentário.
148: Criar movimento suave e elegante.
149: 
150: 7. PORTFÓLIO / RESULTADOS
151: Criar uma área visual mostrando: Projetos, Trabalhos realizados, Resultados, Antes e depois quando aplicável.
152: 
153: 8. FAQ
154: Criar uma seção de perguntas frequentes.
155: Adicionar perguntas estratégicas para eliminar dúvidas e objeções.
156: Criar aproximadamente 6 perguntas com respostas profissionais.
157: 
158: 9. CTA FINAL
159: Criar uma chamada forte para conversão.
160: Adicionar: Frase persuasiva, Botão WhatsApp, Incentivo para solicitar orçamento ou agendamento.
161: 
162: 10. FOOTER
163: Criar rodapé profissional com: Logo, Contatos, Redes sociais, Endereço.
164: 
165: REQUISITOS DE DESIGN:
166: O site deve ter:
167: - Design premium.
168: - Aparência exclusiva.
169: - Responsividade completa.
170: - Mobile first.
171: - Animações suaves.
172: - Tipografia moderna.
173: - Espaçamento profissional.
174: - Excelente experiência visual.
175: 
176: Evitar qualquer aparência de template pronto.
177: O resultado deve parecer um projeto desenvolvido por uma agência profissional de criação de sites.
178: Priorizar: Conversão, Confiança, Autoridade, Clareza da oferta, Experiência do usuário.`;
180:       setResult(generatedPrompt);
181:       setLoading(false);
182:       toast.success("Prompt profissional gerado!");
183:     }, 1500);
184:   };
185: 
186:   return (
187:     <div className="max-w-4xl mx-auto space-y-8 pb-20">
188:       <div>
189:         <h1 className="text-3xl font-bold tracking-tight">AI Site Builder Pro</h1>
190:         <p className="text-muted-foreground text-sm">Gere prompts profissionais de alta conversão para criar sites incríveis com IA.</p>
191:       </div>
192: 
193:       <div className="rounded-2xl border border-border bg-card p-8 space-y-8">
194:         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
195:           <div className="space-y-2">
196:             <Label>Tipo de Negócio</Label>
197:             <Select onValueChange={setNiche}>
198:               <SelectTrigger className="bg-background/50">
199:                 <SelectValue placeholder="Selecione o nicho" />
200:               </SelectTrigger>
201:               <SelectContent>
202:                 {niches.map(n => (
203:                   <SelectItem key={n} value={n}>{n}</SelectItem>
204:                 ))}
205:               </SelectContent>
206:             </Select>
207:           </div>
208:           <div className="space-y-2">
209:             <Label>Nome da Empresa</Label>
210:             <Input placeholder="Ex: Clínica Harmony" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="bg-background/50" />
211:           </div>
212:           <div className="space-y-2">
213:             <Label>Cidade</Label>
214:             <Input placeholder="Ex: São Paulo" value={city} onChange={(e) => setCity(e.target.value)} className="bg-background/50" />
215:           </div>
216:           <div className="space-y-2">
217:             <Label>Objetivo do Site</Label>
218:             <Select onValueChange={setObjective}>
219:               <SelectTrigger className="bg-background/50">
220:                 <SelectValue placeholder="Selecione o objetivo" />
221:               </SelectTrigger>
222:               <SelectContent>
223:                 {objectives.map(o => (
224:                   <SelectItem key={o} value={o}>{o}</SelectItem>
225:                 ))}
226:               </SelectContent>
227:             </Select>
228:           </div>
229:         </div>
230: 
231:         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
232:           <div className="space-y-2">
233:             <Label>Público-Alvo</Label>
234:             <Input placeholder="Ex: Mulheres de 25-45 anos interessadas em estética" value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} className="bg-background/50" />
235:           </div>
236:           <div className="space-y-2">
237:             <Label>Diferencial Principal</Label>
238:             <Input placeholder="Ex: Atendimento humanizado e tecnologia exclusiva" value={mainBenefit} onChange={(e) => setMainBenefit(e.target.value)} className="bg-background/50" />
239:           </div>
240:         </div>
241: 
242:         {/* Highlighted Business Context Field */}
243:         <div className="space-y-4 p-6 rounded-2xl border-2 border-primary/20 bg-primary/5 shadow-sm">
244:           <div className="flex items-center gap-2">
245:             <Label className="text-lg font-bold">Explique seu Negócio (Contexto para a IA)</Label>
246:             <div className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Essencial</div>
247:           </div>
248:           
249:           <div className="grid md:grid-cols-3 gap-6">
250:             <div className="md:col-span-2 space-y-4">
251:               <Textarea 
252:                 placeholder="Dica: O que sua empresa faz? Quais serviços oferece? Quem são seus clientes? Qual problema resolve? Quais são seus diferenciais? Qual sensação o site deve transmitir?" 
253:                 className="min-h-[200px] bg-background text-base"
254:                 value={context}
255:                 onChange={(e) => setContext(e.target.value)}
256:               />
257:               <div className="space-y-2">
258:                 <p className="text-sm font-medium text-foreground flex items-center gap-2">
259:                   <Info className="h-4 w-4 text-primary" />
260:                   Essa é a parte mais importante do processo.
261:                 </p>
262:                 <p className="text-xs text-muted-foreground leading-relaxed">
263:                   Quanto mais detalhes você fornecer sobre seu negócio, seus serviços, clientes, diferenciais e objetivos, mais profissional e personalizado será o prompt gerado. 
264:                   <strong> Não escreva apenas o segmento.</strong> Explique como sua empresa funciona, quais problemas resolve, quais serviços oferece, quem são seus clientes, seus diferenciais e qual imagem deseja transmitir.
265:                 </p>
266:               </div>
267:             </div>
268:             
269:             <div className="space-y-4">
270:               <div className="p-4 rounded-xl bg-background border border-border space-y-2">
271:                 <p className="text-xs font-bold text-red-500 uppercase flex items-center gap-1">
272:                   <Edit className="h-3 w-3" /> Exemplo Ruim
273:                 </p>
274:                 <p className="text-xs italic text-muted-foreground">"Tenho uma clínica odontológica."</p>
275:               </div>
276:               
277:               <div className="p-4 rounded-xl bg-background border border-primary/30 space-y-2">
278:                 <p className="text-xs font-bold text-green-500 uppercase flex items-center gap-1">
279:                   <Lightbulb className="h-3 w-3" /> Exemplo Ideal
280:                 </p>
281:                 <p className="text-xs italic text-muted-foreground leading-relaxed">
282:                   "Somos uma clínica odontológica especializada em implantes e estética dental. Atendemos pacientes que buscam recuperar o sorriso com segurança e acompanhamento personalizado. Nosso diferencial é o atendimento humanizado, tecnologia moderna e profissionais especializados. Queremos transmitir confiança, qualidade e gerar novos agendamentos pelo WhatsApp."
283:                 </p>
284:               </div>
285:             </div>
286:           </div>
287:         </div>
288: 
289:         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
290:           <div className="space-y-2">
291:             <Label>Estilo Visual</Label>
292:             <Select onValueChange={setStyle}>
293:               <SelectTrigger className="bg-background/50">
294:                 <SelectValue placeholder="Selecione o estilo" />
295:               </SelectTrigger>
296:               <SelectContent>
297:                 {styles.map(s => (
298:                   <SelectItem key={s} value={s}>{s}</SelectItem>
299:                 ))}
300:               </SelectContent>
301:             </Select>
302:           </div>
303:           <div className="space-y-2">
304:             <Label>Tom de Voz</Label>
305:             <Select onValueChange={setToneVoice}>
306:               <SelectTrigger className="bg-background/50">
307:                 <SelectValue placeholder="Selecione o tom" />
308:               </SelectTrigger>
309:               <SelectContent>
310:                 {tones.map(t => (
311:                   <SelectItem key={t} value={t}>{t}</SelectItem>
312:                 ))}
313:               </SelectContent>
314:             </Select>
315:           </div>
316:           <div className="space-y-2">
317:             <Label>Cores Desejadas</Label>
318:             <Input placeholder="Ex: Dourado e Branco" value={colors} onChange={(e) => setColors(e.target.value)} className="bg-background/50" />
319:           </div>
320:         </div>
321: 
322:         <Button 
323:           onClick={handleGenerate} 
324:           disabled={loading}
325:           className="w-full h-14 gradient-brand border-0 text-lg font-bold shadow-lg shadow-primary/20"
326:         >
327:           {loading ? "Processando Inteligência..." : <>Gerar Prompt Profissional <Wand2 className="ml-2 h-5 w-5" /></>}
328:         </Button>
329:       </div>
330: 
331:       {result && (
332:         <div className="rounded-2xl border-2 border-primary border-dashed bg-primary/5 p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
333:           <div className="flex items-center justify-between">
334:             <div className="flex items-center gap-2">
335:               <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
336:               <h3 className="text-xl font-bold">PROMPT GERADO:</h3>
337:             </div>
338:             <Button 
339:               onClick={() => { navigator.clipboard.writeText(result); toast.success("Prompt copiado!"); }}
340:               className="gradient-brand border-0"
341:             >
342:               <Copy className="mr-2 h-4 w-4" /> Copiar Prompt Profissional
343:             </Button>
344:           </div>
345:           <div className="p-6 rounded-xl bg-background border border-border font-mono text-sm whitespace-pre-wrap leading-relaxed max-h-[500px] overflow-y-auto">
346:             {result}
347:           </div>
348:           <p className="text-center text-xs text-muted-foreground">
349:             Copie o prompt acima e utilize na sua ferramenta de IA favorita (Bolt.new, Lovable, v0, Cursor, etc).
350:           </p>
351:         </div>
352:       )}
353:     </div>
354:   );
355: }