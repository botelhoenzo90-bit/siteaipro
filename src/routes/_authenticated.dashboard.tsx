import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Activity, ArrowUpRight, BarChart3, Calculator, CheckCircle2, Clock3, Copy, DollarSign, MessageSquare, Plus, Search, Sparkles, Target, TrendingUp, Users, Wand2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/dashboard")({ component: DashboardPage });

const bars = [42, 58, 47, 71, 63, 84, 76, 92, 88, 100];
const activity = [
  ["AI Builder", "Novo prompt criado para Clínica Prime", "agora", Wand2],
  ["Prospecção", "Nova oportunidade adicionada ao radar", "há 18 min", Search],
  ["Proposta", "Orçamento premium calculado", "há 43 min", Calculator],
  ["Scripts", "Script de WhatsApp copiado", "há 1h", MessageSquare],
];

function DashboardPage() {
  const [goal, setGoal] = useState(20000);
  const [quickLead, setQuickLead] = useState("");
  const current = 12500;
  const progress = Math.min(100, (current / goal) * 100);
  const remaining = Math.max(0, goal - current);
  const avgTicket = 1850;
  const dealsNeeded = Math.ceil(remaining / avgTicket);
  const goalLabel = useMemo(() => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(goal), [goal]);

  const addLead = () => {
    if (!quickLead.trim()) return toast.error("Digite o nome da empresa.");
    toast.success(`${quickLead} adicionada ao seu radar.`);
    setQuickLead("");
  };

  return <div className="mx-auto max-w-[1500px] space-y-7 pb-20">
    <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
      <div><div className="mb-2 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.25em] text-cyan-300"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]"/> Centro de comando</div><h1 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">Bom trabalho. Vamos vender <span className="text-cyan-300">mais sites.</span></h1><p className="mt-3 max-w-2xl text-sm text-white/40">Seu painel para transformar IA, prospecção e propostas em uma operação previsível.</p></div>
      <div className="flex gap-2"><Link to="/prospecting"><Button variant="outline" className="h-11 border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.07]"><Search className="h-4 w-4"/> Prospectar</Button></Link><Link to="/ai-builder"><Button className="h-11 bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 font-black text-[#05070d] hover:opacity-90"><Plus className="h-4 w-4"/> Novo projeto</Button></Link></div>
    </motion.div>

    <Card className="relative overflow-hidden border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.025] to-violet-500/[0.08] p-6 md:p-7">
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-300/[0.08] blur-3xl"/>
      <div className="relative grid gap-7 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div><div className="mb-4 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.22em] text-white/35"><Target className="h-3.5 w-3.5 text-cyan-300"/> Meta de faturamento</div><div className="flex flex-wrap items-end gap-3"><span className="text-4xl font-black tracking-tight text-white md:text-5xl">R$ 12.500</span><span className="mb-1 rounded-full border border-emerald-300/10 bg-emerald-300/[0.06] px-2 py-1 text-[9px] font-black text-emerald-300">+18,4% este mês</span></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.06]"><motion.div initial={{width:0}} animate={{width:`${progress}%`}} transition={{duration:1}} className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500"/></div><div className="mt-2 flex justify-between text-[9px] font-bold uppercase tracking-wider text-white/30"><span>{progress.toFixed(0)}% da meta</span><span>{goalLabel}</span></div></div>
        <div className="grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4"><DollarSign className="h-4 w-4 text-cyan-300"/><p className="mt-3 text-[9px] font-black uppercase tracking-wider text-white/30">Falta</p><p className="mt-1 text-xl font-black text-white">R$ {remaining.toLocaleString("pt-BR")}</p></div><div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4"><TrendingUp className="h-4 w-4 text-violet-300"/><p className="mt-3 text-[9px] font-black uppercase tracking-wider text-white/30">Projetos</p><p className="mt-1 text-xl font-black text-white">{dealsNeeded} <span className="text-[10px] text-white/30">fechamentos</span></p></div><div className="col-span-2 flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-black/20 p-3"><span className="text-[9px] font-black uppercase tracking-widest text-white/30">Ajustar meta</span><input type="range" min="5000" max="100000" step="500" value={goal} onChange={e=>setGoal(Number(e.target.value))} className="flex-1 accent-cyan-300"/><span className="min-w-[78px] text-right text-[10px] font-black text-cyan-300">{goalLabel}</span></div></div>
      </div>
    </Card>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[["Leads no radar","47","+12 hoje",Users,"text-cyan-300"],["Conversão","28,4%","+5,2%",TrendingUp,"text-emerald-300"],["Ticket médio","R$ 1.850","+R$ 320",DollarSign,"text-violet-300"],["Projetos ativos","06","2 em entrega",Zap,"text-amber-300"]].map(([label,value,trend,Icon,color],i)=> <motion.div key={String(label)} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:i*.06}}><Card className="group relative overflow-hidden border-white/[0.07] bg-white/[0.025] p-5 transition hover:border-cyan-300/20 hover:bg-white/[0.04]"><div className="mb-5 flex items-center justify-between"><span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">{label as string}</span><div className="rounded-xl bg-white/[0.04] p-2"><Icon className={`h-4 w-4 ${color as string}`}/></div></div><p className="text-3xl font-black tracking-tight text-white">{value as string}</p><p className="mt-2 text-[9px] font-bold text-emerald-300/70">{trend as string}</p></Card></motion.div>)}</div>

    <div className="grid gap-5 xl:grid-cols-[1.45fr_.55fr]">
      <Card className="border-white/[0.07] bg-white/[0.025] p-6 md:p-7"><div className="flex items-center justify-between"><div><div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-cyan-300"/><h2 className="text-sm font-black uppercase tracking-widest text-white">Performance da operação</h2></div><p className="mt-2 text-[10px] text-white/30">Volume de atividade dos últimos 10 dias</p></div><div className="rounded-xl border border-white/[0.07] px-3 py-2 text-[9px] font-black uppercase tracking-widest text-white/40">10 dias</div></div><div className="mt-7 flex h-[250px] items-end gap-2 md:gap-3">{bars.map((height,i)=><div key={i} className="group flex h-full flex-1 flex-col justify-end gap-2"><div className="relative flex-1 rounded-t-xl bg-white/[0.025]"><motion.div initial={{height:0}} animate={{height:`${height}%`}} transition={{duration:.7,delay:i*.04}} className="absolute bottom-0 w-full rounded-t-xl bg-gradient-to-t from-violet-600/80 via-blue-500/70 to-cyan-300"/><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-cyan-300 opacity-0 transition group-hover:opacity-100">{height}</span></div><span className="text-center text-[8px] font-bold text-white/20">D{i+1}</span></div>)}</div><div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-5"><div><p className="text-[8px] uppercase tracking-widest text-white/25">Prospecções</p><p className="mt-1 text-lg font-black text-white">142</p></div><div><p className="text-[8px] uppercase tracking-widest text-white/25">Propostas</p><p className="mt-1 text-lg font-black text-white">31</p></div><div><p className="text-[8px] uppercase tracking-widest text-white/25">Fechamentos</p><p className="mt-1 text-lg font-black text-white">08</p></div></div></Card>

      <Card className="border-white/[0.07] bg-white/[0.025] p-6"><div className="mb-5 flex items-center gap-2"><Zap className="h-4 w-4 text-cyan-300"/><h2 className="text-sm font-black uppercase tracking-widest">Ação rápida</h2></div><p className="text-xs leading-relaxed text-white/35">Adicione uma empresa que você encontrou e continue a abordagem pelo Radar.</p><div className="mt-5 space-y-3"><Input value={quickLead} onChange={e=>setQuickLead(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addLead()} placeholder="Nome da empresa" className="h-11 border-white/10 bg-black/20 text-white placeholder:text-white/20"/><Button onClick={addLead} className="h-11 w-full bg-white text-[#05070d] font-black hover:bg-cyan-100"><Plus className="h-4 w-4"/> Adicionar ao radar</Button></div><div className="mt-6 space-y-2"><Link to="/ai-builder" className="flex items-center gap-3 rounded-xl border border-white/[0.06] p-3 hover:bg-white/[0.04]"><Wand2 className="h-4 w-4 text-cyan-300"/><span className="flex-1 text-[10px] font-bold text-white/60">Criar projeto com IA</span><ArrowUpRight className="h-3.5 w-3.5 text-white/20"/></Link><Link to="/pricing-calculator" className="flex items-center gap-3 rounded-xl border border-white/[0.06] p-3 hover:bg-white/[0.04]"><Calculator className="h-4 w-4 text-violet-300"/><span className="flex-1 text-[10px] font-bold text-white/60">Montar uma proposta</span><ArrowUpRight className="h-3.5 w-3.5 text-white/20"/></Link></div></Card>
    </div>

    <div className="grid gap-5 lg:grid-cols-[1fr_.8fr]">
      <Card className="border-white/[0.07] bg-white/[0.025] p-6"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-sm font-black uppercase tracking-widest">Atividade recente</h2><p className="mt-1 text-[9px] text-white/25">Tudo o que aconteceu no seu workspace</p></div><Activity className="h-4 w-4 text-cyan-300"/></div><div className="space-y-2">{activity.map(([title,text,time,Icon])=><div key={String(text)} className="flex items-center gap-3 rounded-xl border border-white/[0.05] p-3 transition hover:bg-white/[0.035]"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/[0.06] text-cyan-300"><Icon className="h-4 w-4"/></div><div className="min-w-0 flex-1"><p className="text-[10px] font-bold text-white/70">{text as string}</p><p className="mt-1 text-[8px] font-black uppercase tracking-wider text-white/25">{title as string} · {time as string}</p></div><ArrowUpRight className="h-3.5 w-3.5 text-white/15"/></div>)}</div></Card>
      <Card className="border-emerald-300/10 bg-emerald-300/[0.025] p-6"><div className="flex items-center gap-2 text-emerald-300"><CheckCircle2 className="h-4 w-4"/><span className="text-[9px] font-black uppercase tracking-[0.2em]">Playbook de hoje</span></div><h3 className="mt-4 text-xl font-black tracking-tight text-white">Seu próximo dinheiro está na prospecção.</h3><p className="mt-2 text-xs leading-relaxed text-white/35">Encontre 10 empresas com presença digital fraca, personalize a abordagem e envie uma demonstração visual. Consistência vence volume aleatório.</p><Link to="/prospecting"><Button className="mt-6 h-11 w-full bg-emerald-300 font-black text-[#04110b] hover:bg-emerald-200"><Target className="h-4 w-4"/> Abrir Radar agora</Button></Link><div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4 text-[8px] font-black uppercase tracking-widest text-white/20"><span>Meta sugerida</span><span>10 oportunidades</span></div></Card>
    </div>

    <div className="grid gap-4 md:grid-cols-4">{[["AI Builder","Crie o site","/ai-builder",Wand2],["Radar","Ache clientes","/prospecting",Search],["Scripts","Venda melhor","/scripts",MessageSquare],["Calculadora","Precifique","/pricing-calculator",Calculator]].map(([title,desc,to,Icon])=><Link key={String(to)} to={String(to)}><Card className="group flex items-center gap-3 border-white/[0.06] bg-white/[0.02] p-4 hover:border-cyan-300/20 hover:bg-white/[0.04]"><div className="rounded-xl bg-white/[0.04] p-2.5 text-cyan-300"><Icon className="h-4 w-4"/></div><div className="min-w-0 flex-1"><p className="text-[10px] font-black text-white">{title as string}</p><p className="mt-0.5 text-[8px] text-white/25">{desc as string}</p></div><ArrowUpRight className="h-3.5 w-3.5 text-white/15 transition group-hover:text-cyan-300"/></Card></Link>)}</div>
  </div>;
}
