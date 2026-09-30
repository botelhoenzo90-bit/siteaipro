import "../landing.css";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  ChevronDown,
  CircleDollarSign,
  Compass,
  MessageCircle,
  Palette,
  Quote,
  Search,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    title: "Prime — Venda sites para o comércio da sua cidade",
    meta: [
      { name: "description", content: "Encontre empresas sem site, crie páginas profissionais e transforme oportunidades locais em vendas." },
      { property: "og:title", content: "Prime — Venda sites para o comércio da sua cidade" },
      { property: "og:description", content: "Da prospecção à entrega: uma operação completa para vender sites." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const painPoints = [
  ["Você perde horas", "Montar cada site do zero consome o tempo que deveria ser usado para vender."],
  ["Você cobra pouco", "Sem um processo profissional, o cliente compara seu trabalho apenas pelo preço."],
  ["Faltam clientes", "Você não sabe quais empresas abordar nem como iniciar uma conversa que gere interesse."],
  ["Falta previsibilidade", "Cada novo projeto parece um recomeço e fica difícil transformar freelas em negócio."],
];

const solutions: Array<[string, string, LucideIcon]> = [
  ["Encontre clientes", "Localize empresas da sua região que ainda não têm site e organize sua prospecção.", Search],
  ["Crie em minutos", "Transforme as informações do negócio em um site profissional pronto para apresentar.", Sparkles],
  ["Venda com clareza", "Use scripts, argumentos e uma apresentação que mostra valor antes de falar em preço.", Target],
  ["Precifique e escale", "Calcule o valor ideal, proteja sua margem e repita o processo para vender mais.", Calculator],
];

const journey = [
  ["01", "Entre no sistema", "Acesse sua central e prepare sua operação."],
  ["02", "Defina o nicho", "Escolha um mercado com demanda na sua cidade."],
  ["03", "Encontre o cliente", "Localize negócios que ainda não possuem site."],
  ["04", "Faça a abordagem", "Use um roteiro direto para abrir a conversa."],
  ["05", "Crie o site", "Gere uma apresentação profissional em minutos."],
  ["06", "Precifique", "Chegue a um valor seguro para você e seu cliente."],
  ["07", "Venda", "Apresente o projeto com confiança e feche o acordo."],
  ["08", "Escale", "Repita o processo e construa uma operação previsível."],
];

const testimonials = [
  ["Lucas M.", "Consegui organizar minha oferta e apresentar meus primeiros sites com muito mais confiança."],
  ["Mariana S.", "A prospecção me mostrou onde estavam os clientes. Parei de esperar indicação para vender."],
  ["Rafael P.", "Hoje tenho um processo para criar, precificar e entregar em vez de fazer tudo no improviso."],
  ["Camila R.", "Eu não sabia programar. Agora consigo mostrar uma solução pronta e conduzir a conversa comercial."],
];

const faqs = [
  ["Preciso saber programar ou ter experiência com design?", "Não. A Prime guia a criação e deixa os ajustes visuais acessíveis, sem você escrever código."],
  ["O resultado tem qualidade profissional?", "Sim. Os projetos seguem estruturas criadas para apresentar empresas com clareza, boa leitura e adaptação ao celular."],
  ["Quanto consigo cobrar por projeto?", "O preço depende do escopo, nicho e região. A calculadora ajuda a formar um valor coerente sem trabalhar no prejuízo."],
  ["Como encontro clientes sem uma carteira de contatos?", "A área de prospecção ajuda a buscar negócios da sua região e organizar uma abordagem personalizada."],
  ["Quanto tempo leva para criar um site?", "Depois de reunir as informações do negócio, você consegue gerar uma primeira versão em poucos minutos."],
  ["Posso editar o site depois de gerar?", "Sim. Você pode ajustar textos, cores, imagens e seções antes de apresentar o projeto."],
  ["A Prime vende o site por mim?", "Não. A Prime entrega estrutura, ferramentas e direção; a abordagem e o fechamento continuam sendo seus."],
  ["Funciona para qualquer tipo de empresa?", "Funciona melhor para negócios locais e prestadores de serviço que precisam apresentar serviços e receber contatos."],
  ["Posso usar em qualquer cidade?", "Sim. Você pode prospectar e criar projetos para empresas de qualquer região do Brasil."],
  ["Tenho garantia?", "Sim. Você conta com 7 dias de garantia para conhecer a plataforma com tranquilidade."],
];

function Logo() {
  return <Link to="/" className="valy-logo" aria-label="Prime"><span className="logo-mark"><i /></span><strong>PRIME</strong></Link>;
}

function LandingPage() {
  const [faq, setFaq] = useState<number | null>(null);
  const loopJourney = [...journey, ...journey];
  const loopTestimonials = [...testimonials, ...testimonials];

  return <div className="valy-page" id="inicio">
    <div className="valy-grid-bg" />
    <header className="valy-header">
      <div className="valy-container valy-nav">
        <Logo />
        <nav><a href="#como-funciona">COMO FUNCIONA</a><a href="#planos">PLANOS</a><a href="#faq">FAQ</a></nav>
        <div className="nav-actions"><Link className="login-link" to="/auth">ENTRAR</Link><a className="green-btn small" href="#planos">VER PLANOS</a></div>
      </div>
    </header>

    <main>
      <section className="hero valy-container">
        <div className="hero-badge">PRIME · PLATAFORMA PARA QUEM VENDE SITES</div>
        <h1>Venda sites para o comércio<br /><em>da sua cidade</em></h1>
        <p className="hero-copy">Encontre empresas sem site, crie uma apresentação profissional em minutos e tenha um processo claro para transformar oportunidades locais em vendas.</p>
        <div className="hero-actions"><a className="green-btn hero-btn" href="#planos">Quero começar a vender <ArrowRight /></a></div>
        <div className="hero-benefits"><span>Estrutura pronta para começar</span><span>7 dias de garantia</span><span>Sem saber programar</span><span>Criação em minutos</span></div>
      </section>

      <div className="industry-strip"><div className="marquee">{["Barbearia", "Pizzaria", "Clínica", "Academia", "Advocacia", "Estética", "Restaurante", "Imobiliária", "Barbearia", "Pizzaria", "Clínica", "Academia", "Advocacia", "Estética", "Restaurante", "Imobiliária"].map((item, index) => <span key={`${item}-${index}`}>{item} <b>✦</b></span>)}</div></div>

      <section className="section light" id="dor">
        <div className="valy-container">
          <div className="eyebrow">O PROBLEMA</div>
          <h2>O que impede você de<br /><em>transformar sites em renda</em></h2>
          <p className="section-intro">Não é falta de capacidade. É falta de um processo que conecte oportunidade, criação e venda.</p>
          <div className="pain-cards">{painPoints.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="section solution-section" id="ferramentas">
        <div className="valy-container">
          <div className="eyebrow">A SOLUÇÃO</div>
          <h2>Quatro ferramentas para<br /><em>tirar sua operação do papel</em></h2>
          <p className="section-intro">Tudo o que você precisa para sair da ideia e chegar a uma oferta pronta para vender.</p>
          <div className="solution-grid">{solutions.map(([title, description, SolutionIcon]) => <article key={title}><div className="solution-icon"><SolutionIcon /></div><h3>{title}</h3><p>{description}</p></article>)}</div>
          <a className="green-btn section-cta" href="#planos">Quero construir minha operação <ArrowRight /></a>
        </div>
      </section>

      <section className="section demo" id="como-funciona">
        <div className="valy-container">
          <div className="eyebrow">VEJA NA PRÁTICA</div>
          <h2>Como funciona a <em>Prime</em></h2>
          <p className="section-intro">Veja o caminho completo: encontrar uma empresa, criar o projeto, ajustar a oferta e apresentar ao cliente.</p>
          <div className="video-placeholder"><div className="play">▶</div><span>DEMONSTRAÇÃO DA PLATAFORMA</span></div>
          <a className="green-btn section-cta" href="#planos">Começar agora <ArrowRight /></a>
        </div>
      </section>

      <section className="section journey-section" id="etapas">
        <div className="valy-container"><div className="eyebrow">DO PRIMEIRO ACESSO À ESCALA</div><h2>Um processo simples para<br /><em>vender de forma repetível</em></h2><p className="section-intro">Cada etapa leva naturalmente à próxima, sem você precisar improvisar.</p></div>
        <div className="carousel-window"><div className="journey-track">{loopJourney.map(([number, title, description], index) => <article key={`${title}-${index}`}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div>
      </section>

      <section className="section transformation-section">
        <div className="valy-container">
          <div className="eyebrow">ANTES E DEPOIS</div>
          <h2>O que muda quando você<br /><em>começa a empreender de verdade</em></h2>
          <p className="section-intro">Você deixa de vender tarefas soltas e passa a construir uma operação com direção.</p>
          <div className="transformation-grid">
            <article className="before-card"><span>ANTES DA PRIME</span><h3>Você tenta fazer tudo no improviso</h3><ul><li>Espera uma indicação aparecer</li><li>Demora para montar cada projeto</li><li>Fica inseguro na hora de cobrar</li><li>Não sabe qual é o próximo passo</li></ul></article>
            <article className="after-card"><span>DEPOIS DA PRIME</span><h3>Você trabalha como uma operação</h3><ul><li>Procura oportunidades todos os dias</li><li>Apresenta uma solução com rapidez</li><li>Precifica para proteger sua margem</li><li>Cria um caminho para crescer e buscar metas maiores</li></ul></article>
          </div>
        </div>
      </section>

      <section className="section light offer-section" id="planos">
        <div className="valy-container">
          <div className="eyebrow">OFERTA ESPECIAL</div><h2>Comece com a estrutura<br /><em>completa da Prime</em></h2><p className="section-intro">Um único acesso para prospectar, criar, precificar e vender seus projetos.</p>
          <article className="offer-card"><div className="offer-tag">ACESSO VITALÍCIO</div><h3>Prime Completa</h3><p className="offer-price"><small>R$</small> 297<span>,00</span></p><p className="offer-note">Pagamento único, sem mensalidade</p><ul><li>Sites ilimitados para criar e editar</li><li>Prospecção para qualquer cidade do Brasil</li><li>Calculadora de precificação profissional</li><li>Scripts de abordagem para diferentes canais</li><li>Biblioteca e materiais para acelerar sua operação</li></ul><Link className="green-btn hero-btn" to="/auth">Quero acesso vitalício <ArrowRight /></Link></article>
        </div>
      </section>

      <section className="guarantee-section">
        <div className="valy-container guarantee-inner"><div className="guarantee-seal">7</div><div><div className="eyebrow">GARANTIA INCONDICIONAL</div><h2>Conheça a Prime por 7 dias sem risco</h2><p>Entre, explore as ferramentas e veja se a plataforma faz sentido para o seu momento. Se não fizer, você pode solicitar o reembolso dentro do prazo.</p></div></div>
      </section>

      <section className="section testimonials-section">
        <div className="valy-container"><div className="eyebrow">AVALIAÇÕES</div><h2>Quem começou já enxerga<br /><em>um caminho mais claro</em></h2><p className="section-intro">Relatos de quem trocou a improvisação por um processo.</p></div>
        <div className="carousel-window"><div className="testimonial-track">{loopTestimonials.map(([name, text], index) => <article key={`${name}-${index}`}><Quote /><div className="stars" aria-label="5 estrelas">{[0,1,2,3,4].map(star => <Star key={star} />)}</div><p>“{text}”</p><strong>{name}</strong><span>Cliente Prime</span></article>)}</div></div>
      </section>

      <section className="section faq-section" id="faq"><div className="valy-container narrow"><div className="eyebrow">PERGUNTAS FREQUENTES</div><h2>Tudo o que você precisa<br /><em>saber antes de começar</em></h2><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${faq === index ? "open" : ""}`} key={question}><Button variant="ghost" className="faq-trigger" onClick={() => setFaq(faq === index ? null : index)}><span>{question}</span><ChevronDown /></Button>{faq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="final-cta" id="final"><div className="valy-container"><div className="eyebrow">COMECE PELO PRIMEIRO</div><h2>Sua próxima oportunidade<br /><em>pode estar na sua cidade</em></h2><p>Abra a Prime, escolha um nicho e transforme uma empresa sem site no começo da sua nova operação.</p><div className="final-actions"><Link className="final-button" to="/auth">Quero começar agora <ArrowRight /></Link></div><div className="final-benefits"><span><Compass /> Processo guiado</span><span><Palette /> Sites profissionais</span><span><CircleDollarSign /> Precificação clara</span><span><TrendingUp /> Estrutura para escalar</span></div></div></section>
    </main>

    <footer className="valy-footer"><div className="valy-container footer-grid"><div><Logo /><p>Sites prontos. Clientes encontrados. Venda local.</p></div><div><b>PLATAFORMA</b><a href="#ferramentas">Ferramentas</a><a href="#planos">Plano</a><a href="#faq">FAQ</a></div><div><b>JORNADA</b><a href="#como-funciona">Como funciona</a><a href="#etapas">Etapas</a><a href="#final">Começar</a></div><div><b>ACESSO</b><Link to="/auth">Entrar</Link><a href="#planos">Ver oferta</a><a href="#faq">Tirar dúvidas</a></div></div><div className="footer-bottom valy-container"><span>© 2026 Prime. Todos os direitos reservados.</span><span>Feito para quem quer vender sites.</span></div></footer>
  </div>;
}