import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LayoutDashboard, Wand2, Users, FileText, Library, TrendingUp } from "lucide-react";

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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo de volta, aqui está o resumo do seu SaaS.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
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
         <div className="rounded-2xl border border-border bg-card p-6">
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
               {['Meus Projetos', 'Gerador IA', 'Prospecção', 'Propostas'].map((item) => (
                 <button key={item} className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted transition-colors gap-2">
                    <span className="text-sm font-medium">{item}</span>
                 </button>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
