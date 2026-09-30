import "../landing.css";
import "../prime-landing-v3.css";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronDown, Moon, Sun, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    title: "Prime — Venda sites para o comércio da sua cidade",
    meta: [{ name: "description", content: "Crie e venda sites profissionais com a Prime e transforme uma habilidade digital em uma nova fonte de renda." }],
  }),
});

const pains = [
  ["CLT sem saída", "Você trabalha mais, mas o salário continua preso ao mesmo teto."],
  ["Renda extra travada", "Quer ganhar mais, mas não sabe o que vender nem por onde começar."],
  ["Medo de começar", "Programação, design e ferramentas parecem complicados demais."],
  ["Tempo desperdiçado", "Você poderia estar vendendo, mas passa horas fazendo tarefas técnicas."],
];
const solutions = [
  ["Encontre quem precisa", "Encontre negócios locais com oportunidade e tenha uma lista pronta para prospectar."],
  ["Crie sem programar", "Monte sites profissionais rapidamente, com estrutura pronta e edição visual."],
  ["Venda com processo", "Use precificação, scripts e organização para transformar abordagem em proposta."],
];
const faqItems = [
  ["Preciso saber programar?", "Não. A Prime foi pensada para permitir que você crie e edite sites sem escrever código."],
  ["Posso vender os sites para qualquer nicho?", "Sim. Você pode trabalhar com diferentes negócios locais e adaptar o conteúdo e a identidade de cada projeto."],
  ["Quanto posso cobrar?", "O valor depende do nicho, região, escopo e posicionamento. A Prime ajuda você a estruturar sua precificação para apresentar uma proposta com mais segurança."],
  ["O acesso é mensal?", "Nesta oferta, o acesso é vitalício ao sistema incluído no plano, conforme as condições apresentadas no momento da compra."],
];

function PrimeLogo(){return <Link to="/" className="p-logo">PRIME</Link>}

function LandingPage(){
  const [dark,setDark]=useState(false);
  const [openFaq,setOpenFaq]=useState<number|null>(null);
  useEffect(()=>{document.documentElement.classList.toggle("valy-dark",dark);return()=>document.documentElement.classList.remove("valy-dark")},[dark]);
  return <div className="prime-v3" id="inicio">
    <header className="p-header"><div className="p-wrap p-nav"><PrimeLogo/><nav className="p-nav-links"><a href="#solucao">SOLUÇÃO</a><a href="#oferta">OFERTA</a><a href="#faq">FAQ</a></nav><div style={{display:"flex",gap:10,alignItems:"center"}}><button className="dark-toggle" onClick={()=>setDark(v=>!v)} aria-label="Alternar tema">{dark?<Sun size={17}/>:<Moon size={17}/>}</button><a className="p-btn" href="#oferta">COMEÇAR AGORA</a></div></div></header>
    <main>
      <section className="p-hero"><div className="p-wrap"><span className="p-kicker">MELHOR SISTEMA PARA CRIAÇÃO DE SITES</span><h1>Venda sites para o comércio<br/><em>da sua cidade</em></h1><p className="p-lead">Transforme a criação de sites em uma forma simples de começar a empreender, gerar renda extra ou construir uma nova profissão — mesmo sem saber programar.</p><div className="p-actions"><a className="p-btn" href="#oferta">Quero começar a vender <ArrowRight size={17}/></a></div><p className="p-mini">Criação de sites · Prospecção · Precificação · Scripts · CRM</p></div></section>
      <div className="p-strip"><div className="p-strip-track">{["RENDA EXTRA","EMPREENDER","SITES PROFISSIONAIS","SEM PROGRAMAR","NICHOS LOCAIS","PRECIFICAÇÃO","SCRIPTS DE VENDAS","PROCESSO REPETÍVEL","RENDA EXTRA","EMPREENDER","SITES PROFISSIONAIS","SEM PROGRAMAR"].map((x,i)=><span key={i}>{x}<b>✦</b></span>)}</div></div>

      <section className="p-section alt"><div className="p-wrap"><div className="p-eyebrow">A DOR DE QUEM QUER MUDAR</div><h2>Você quer ganhar mais.<br/><em>Mas o que está te prendendo?</em></h2><p className="p-intro">Existem pessoas que querem uma renda extra, outras querem sair do CLT e outras simplesmente querem começar algo próprio. O problema é não ter uma oferta simples para colocar em prática.</p><div className="pain-grid">{pains.map(([t,d],i)=><article className="pain-card" key={t}><span className="pain-icon">0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div><div className="bridge"><strong>Você não precisa começar com uma empresa enorme.</strong><p>Precisa de uma habilidade vendável, uma ferramenta que acelere a entrega e um processo para encontrar quem compra.</p><a className="p-btn" href="#solucao">Quero ver a solução <ArrowRight size={17}/></a></div></div></section>

      <section className="p-section" id="solucao"><div className="p-wrap"><div className="p-eyebrow">A SOLUÇÃO</div><h2>Uma habilidade simples de vender.<br/><em>Um processo para repetir.</em></h2><p className="p-intro">A Prime reúne as partes que normalmente ficam espalhadas em várias ferramentas para você sair da ideia e chegar ao cliente com muito menos atrito.</p><div className="solution-grid">{solutions.map(([t,d],i)=><article className="solution-card" key={t}><span className="solution-num">0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div><div style={{marginTop:42}}><a className="p-btn" href="#antes-depois">Ver o que muda na prática <ArrowRight size={17}/></a></div></div></section>

      <section className="p-section alt" id="antes-depois"><div className="p-wrap"><div className="p-eyebrow">ANTES × DEPOIS</div><h2>O que muda quando você<br/><em>tem a Prime na mão</em></h2><p className="p-intro">Não é sobre trabalhar mais. É sobre reduzir o trabalho que não gera venda e ter um caminho mais claro para encontrar, apresentar e entregar.</p><div className="compare"><article className="compare-card before"><div className="compare-label">ANTES DE ACESSAR</div><h3>Você improvisa tudo</h3><ul><li>Procura clientes manualmente</li><li>Não sabe exatamente quanto cobrar</li><li>Cria cada site do zero</li><li>Perde tempo em tarefas técnicas</li><li>Aborda sem roteiro e sem processo</li></ul></article><article className="compare-card after"><div className="compare-label">DEPOIS DE ACESSAR</div><h3>Você trabalha com processo</h3><ul><li>Encontra oportunidades por região</li><li>Estrutura uma proposta com mais segurança</li><li>Parte de uma base pronta para criar</li><li>Edita e entrega com mais velocidade</li><li>Organiza abordagem e fechamento</li></ul></article></div></div></section>

      <section className="p-section"><div className="p-wrap"><div className="p-eyebrow">O RESULTADO É UM PROCESSO</div><h2>Menos complicação.<br/><em>Mais tempo para vender.</em></h2><p className="p-intro">A Prime foi pensada para transformar a criação de sites em uma operação mais previsível: prospectar, criar, apresentar, fechar e entregar.</p><div className="solution-grid">{[["Prospecção","Tenha uma estrutura para encontrar negócios que podem precisar de um site."],["Criação","Comece com uma base profissional e personalize para cada cliente."],["Venda","Tenha apoio para precificar e conduzir a conversa até a proposta."],["Escala","Quando o processo funciona, você pode repetir em diferentes nichos e regiões."]].map(([t,d],i)=><article className="solution-card" key={t}><span className="solution-num"><Zap size={20}/></span><h3>{t}</h3><p>{d}</p></article>)}</div><div style={{marginTop:42}}><a className="p-btn" href="#oferta">Quero essa estrutura <ArrowRight size={17}/></a></div></div></section>

      <section className="p-section offer" id="oferta"><div className="p-wrap"><div className="p-eyebrow" style={{color:"#ffd400"}}>OFERTA ÚNICA</div><h2>Um plano.<br/><em>Sem complicar.</em></h2><p className="p-intro">Tenha a estrutura completa da Prime em um único acesso, sem ficar escolhendo entre várias versões.</p><article className="offer-card"><span className="offer-tag">PRIME VITALÍCIO</span><h3>Prime — Acesso Completo</h3><div className="price">R$ 297<small>,00</small></div><p className="offer-sub">Pagamento único · acesso vitalício</p><ul className="offer-list"><li>Criação de sites profissionais</li><li>Ferramentas para prospecção</li><li>Precificação para seus projetos</li><li>Scripts e estrutura de abordagem</li><li>CRM para organizar oportunidades</li><li>Recursos para acelerar sua entrega</li></ul><a className="p-btn" href="#garantia">Quero meu acesso vitalício <ArrowRight size={17}/></a></article></div></section>

      <section className="guarantee" id="garantia"><div className="p-wrap guarantee-box"><div className="guarantee-icon">7</div><div className="p-eyebrow">GARANTIA DE 7 DIAS</div><h2>Entre, explore e veja se a Prime faz sentido para você.</h2><p>Você terá 7 dias para conhecer a plataforma e avaliar os recursos. Se decidir que não é para você, poderá solicitar o cancelamento dentro das condições da garantia apresentada na compra.</p><a className="p-btn" href="#faq">Quero conhecer a Prime <ArrowRight size={17}/></a></div></section>

      <section className="p-section faq" id="faq"><div className="p-wrap"><div className="p-eyebrow">DÚVIDAS</div><h2>Antes de começar,<br/><em>talvez você queira saber.</em></h2><div className="faq-list">{faqItems.map(([q,a],i)=><div className="faq-item" key={q}><button className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={19} style={{transform:openFaq===i?"rotate(180deg)":"none",transition:".25s"}}/></button>{openFaq===i&&<div className="faq-a">{a}</div>}</div>)}</div></div></section>

      <section className="final"><div className="p-wrap final-box"><div className="p-eyebrow">SEU PRÓXIMO PASSO</div><h2>Você pode continuar procurando uma ideia.<br/><em>Ou começar com uma que já pode ser vendida.</em></h2><p className="p-intro">Crie sites. Encontre negócios. Apresente sua solução. Construa sua própria operação.</p><a className="p-btn" href="#oferta">Começar com a Prime por R$ 297 <ArrowRight size={17}/></a></div></section>
    </main>
    <footer className="footer"><div className="p-wrap footer-inner"><PrimeLogo/><span>Prime · Criação e venda de sites</span><a href="#inicio" style={{color:"inherit",textDecoration:"none"}}>Voltar ao topo ↑</a></div></footer>
  </div>
}
