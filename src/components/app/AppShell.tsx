import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  BarChart3,
  Bell,
  BookOpen,
  Calculator,
  Command,
  LayoutDashboard,
  Library,
  Menu,
  MessageSquare,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Target,
  Users,
  Wand2,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "AI Builder", to: "/ai-builder", icon: Wand2, badge: "AI" },
  { label: "Prospecção", to: "/prospecting", icon: Search },
  { label: "Scripts de Venda", to: "/scripts", icon: MessageSquare },
  { label: "Precificação", to: "/pricing-calculator", icon: Calculator },
  { label: "Academy", to: "/academy", icon: BookOpen },
  { label: "Biblioteca", to: "/library", icon: Library },
];

const quickActions = [
  { title: "Criar site com IA", description: "Gerar um novo projeto", to: "/ai-builder", icon: Wand2 },
  { title: "Encontrar clientes", description: "Abrir Radar de prospecção", to: "/prospecting", icon: Target },
  { title: "Calcular proposta", description: "Precificar projeto", to: "/pricing-calculator", icon: Calculator },
  { title: "Copiar um script", description: "Abrir biblioteca de vendas", to: "/scripts", icon: MessageSquare },
];

function Brand() {
  return (
    <Link to="/dashboard" className="flex items-center gap-3 group">
      <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-600 p-[1px] shadow-[0_0_30px_rgba(59,130,246,.35)]">
        <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#070a12]">
          <Zap className="h-5 w-5 text-cyan-300" />
        </div>
      </div>
      <div>
        <div className="text-[15px] font-black tracking-[-0.04em] text-white">SITEAI <span className="text-cyan-300">PRO</span></div>
        <div className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/35">Revenue OS</div>
      </div>
    </Link>
  );
}

function Sidebar({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-[#070a12]/95 text-white">
      <div className="flex h-[76px] items-center border-b border-white/[0.07] px-5">
        <Brand />
      </div>

      <div className="px-4 pt-5">
        <Link to="/ai-builder" onClick={onNavigate}>
          <Button className="h-11 w-full justify-start rounded-xl bg-white text-[#070a12] font-black hover:bg-cyan-100 shadow-[0_8px_30px_rgba(34,211,238,.14)]">
            <Plus className="h-4 w-4" /> Novo projeto
          </Button>
        </Link>
      </div>

      <nav className="flex-1 space-y-7 overflow-y-auto px-3 py-6">
        <div>
          <p className="px-3 pb-2 text-[9px] font-black uppercase tracking-[0.25em] text-white/30">Operação</p>
          <div className="space-y-1">
            {navigation.slice(0, 5).map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.to} to={item.to} onClick={onNavigate}
                  activeProps={{ className: "!bg-gradient-to-r !from-cyan-400/15 !to-violet-500/10 !text-white !border-cyan-300/20 shadow-[inset_3px_0_0_#67e8f9]" }}
                  className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-[11px] font-bold text-white/50 transition-all hover:bg-white/[0.05] hover:text-white"
                >
                  <Icon className="h-[17px] w-[17px] transition-transform group-hover:scale-110" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && <span className="rounded-md bg-cyan-300/10 px-1.5 py-0.5 text-[8px] font-black text-cyan-300">{item.badge}</span>}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <p className="px-3 pb-2 text-[9px] font-black uppercase tracking-[0.25em] text-white/30">Conhecimento</p>
          <div className="space-y-1">
            {navigation.slice(5).map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.to} to={item.to} onClick={onNavigate}
                  activeProps={{ className: "!bg-white/[0.06] !text-white !border-white/10" }}
                  className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-[11px] font-bold text-white/50 transition-all hover:bg-white/[0.05] hover:text-white"
                >
                  <Icon className="h-[17px] w-[17px]" /> {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="border-t border-white/[0.07] p-4">
        <div className="mb-3 rounded-xl border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.07] to-violet-500/[0.06] p-3">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-300"><Activity className="h-3.5 w-3.5" /> Sistema online</div>
          <p className="mt-1 text-[9px] leading-relaxed text-white/35">Todos os módulos operacionais disponíveis.</p>
        </div>
        <Link to="/profile" onClick={onNavigate} className="flex items-center gap-3 rounded-xl p-2 hover:bg-white/[0.05]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 text-xs font-black text-[#070a12]">EP</div>
          <div className="min-w-0 flex-1"><p className="truncate text-[11px] font-bold text-white">Meu workspace</p><p className="text-[9px] text-white/35">Plano Pro</p></div>
          <Settings2 className="h-4 w-4 text-white/30" />
        </Link>
      </div>
    </div>
  );
}

export function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setCommandOpen(false);
        setNotificationsOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filteredActions = quickActions.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="app-shell min-h-screen bg-[#05070d] text-white">
      <div className="app-grid pointer-events-none fixed inset-0 opacity-40" />
      <div className="pointer-events-none fixed left-[18%] top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.05] blur-[120px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/[0.05] blur-[130px]" />

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[248px] border-r border-white/[0.07] md:block">
        <Sidebar />
      </aside>

      <div className="relative min-h-screen md:pl-[248px]">
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-white/[0.07] bg-[#05070d]/80 px-4 backdrop-blur-2xl md:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white/70 hover:bg-white/10 hover:text-white"><Menu /></Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[270px] border-white/10 bg-[#070a12] p-0 text-white"><Sidebar mobile onNavigate={() => setMobileOpen(false)} /></SheetContent>
            </Sheet>
            <button onClick={() => setCommandOpen(true)} className="hidden h-10 w-[280px] items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 text-left text-[11px] text-white/35 transition hover:border-cyan-300/20 hover:text-white/60 sm:flex">
              <Search className="h-4 w-4" /> <span className="flex-1">O que você quer fazer?</span><kbd className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-1 text-[9px]">⌘K</kbd>
            </button>
            <div className="flex items-center gap-2 sm:hidden"><Sparkles className="h-4 w-4 text-cyan-300" /><span className="text-xs font-black">SITEAI PRO</span></div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-300/10 bg-emerald-300/[0.04] px-3 py-1.5 lg:flex"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" /><span className="text-[9px] font-black uppercase tracking-widest text-emerald-300/80">IA operacional</span></div>
            <button onClick={() => setNotificationsOpen((v) => !v)} className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-white/50 transition hover:border-white/15 hover:text-white"><Bell className="h-4 w-4" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" /></button>
            <Link to="/profile" className="hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] p-1.5 pr-3 sm:flex"><div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-violet-500 text-[9px] font-black text-[#05070d]">EP</div><span className="text-[10px] font-bold text-white/60">Workspace</span></Link>
          </div>

          <AnimatePresence>
            {notificationsOpen && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute right-4 top-[66px] w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1a]/95 p-4 shadow-2xl backdrop-blur-2xl">
                <div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-black">Central de alertas</p><p className="text-[9px] text-white/35">Atualizações do workspace</p></div><button onClick={() => setNotificationsOpen(false)}><X className="h-4 w-4 text-white/35" /></button></div>
                {["Seu sistema está pronto para novos projetos.","O Radar pode ser usado para encontrar novas oportunidades.","Você tem scripts prontos para abordagem."].map((text, i) => <div key={i} className="mb-2 flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"><div className="mt-1 h-2 w-2 rounded-full bg-cyan-300" /><p className="text-[10px] leading-relaxed text-white/55">{text}</p></div>)}
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="relative p-4 md:p-8 lg:p-10"><Outlet /></main>
      </div>

      <AnimatePresence>
        {commandOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm" onMouseDown={() => setCommandOpen(false)}>
            <motion.div initial={{ opacity: 0, y: -15, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -15 }} className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1a] shadow-[0_30px_100px_rgba(0,0,0,.6)]" onMouseDown={(e) => e.stopPropagation()}>
              <div className="flex items-center border-b border-white/[0.07] px-4"><Command className="mr-3 h-4 w-4 text-cyan-300" /><Input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar uma ação..." className="h-14 border-0 bg-transparent text-white shadow-none focus-visible:ring-0" /><button onClick={() => setCommandOpen(false)}><X className="h-4 w-4 text-white/30" /></button></div>
              <div className="p-2"><p className="px-3 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/25">Ações rápidas</p>{filteredActions.map((item) => { const Icon = item.icon; return <Link key={item.to} to={item.to} onClick={() => { setCommandOpen(false); setQuery(""); }} className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/[0.05]"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/10 bg-cyan-300/[0.06] text-cyan-300"><Icon className="h-4 w-4" /></div><div className="flex-1"><p className="text-xs font-bold text-white">{item.title}</p><p className="mt-0.5 text-[9px] text-white/35">{item.description}</p></div><span className="text-white/20">↵</span></Link>; })}</div>
              <div className="border-t border-white/[0.07] px-4 py-3 text-[9px] text-white/25">Use <b className="text-white/50">Ctrl K</b> a qualquer momento para abrir este painel.</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
