import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LayoutDashboard, Wand2, Users, FileText, Library, TrendingUp, Rocket, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const stats = [
    { label: 'Projetos Criados', value: '12', icon: Library },
    { label: 'Prompts Gerados', value: '156', icon: Wand2 },
    { label: 'Clientes Encontrados', value: '48', icon: Users },
    { label: 'Propostas Criadas', value: '24', icon: FileText },
  ];

  const notes = [
    { label: 'Follow-up com cliente de estética', date: 'Hoje, 14:00' },
    { label: 'Finalizar proposta advocacia', date: 'Amanhã' },
    { label: 'Reunião de briefing - Clínica Harmony', date: '24 Ago' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo de volta, aqui está o resumo do seu SaaS.</p>
        </div>
      </div>

      {/* Quick Notes / Summary */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-border bg-card p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold">Resumo & Notas Rápidas</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {notes.map((note, i) => (
            <div key={i} className="flex flex-col gap-1 p-3 rounded-xl bg-muted/30 border border-border/50">
              <span className="text-sm font-medium">{note.label}</span>
              <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{note.date}</span>
            </div>
          ))}
          <Button variant="outline" className="h-full border-dashed border-2 hover:border-primary/50 hover:bg-primary/5 flex flex-col gap-1 py-4">
             <Plus className="h-4 w-4" />
             <span className="text-xs">Nova Anotação</span>
          </Button>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className="text-xs font-medium text-green-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> +12%
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
         <div className="rounded-2xl border border-border bg-card p-6 glass">
            <h3 className="text-lg font-bold mb-4">Evolução do Usuário</h3>
            <div className="h-[200px] flex items-end justify-between gap-2">
               {[40, 60, 45, 90, 65, 80, 95].map((h, i) => (
                 <div key={i} className="w-full bg-primary/20 rounded-t-lg relative group">
                    <motion.div 
                       initial={{ height: 0 }} 
                       animate={{ height: `${h}%` }} 
                       className="w-full gradient-brand rounded-t-lg" 
                    />
                 </div>
               ))}
            </div>
         </div>
         <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold mb-4">Acesso Rápido</h3>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Meus Projetos', to: '/library' },
                 { label: 'Gerador IA', to: '/ai-builder' },
                 { label: 'Prospecção', to: '/crm' },
                 { label: 'Calculadora', to: '/pricing-calculator' }
               ].map((item) => (
                 <Button key={item.label} variant="outline" className="h-24 flex flex-col gap-2 rounded-xl border-border bg-muted/30 hover:bg-muted" asChild>
                    <Link to={item.to as any}>
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                 </Button>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
