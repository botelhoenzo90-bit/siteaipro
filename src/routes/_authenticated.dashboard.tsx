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

  const checklistItems = [
    { label: 'Conectar domínio customizado', completed: false },
    { label: 'Configurar gateway de pagamento', completed: false },
    { label: 'Personalizar branding do painel', completed: true },
    { label: 'Importar primeiros leads', completed: true },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo de volta, aqui está o resumo do seu SaaS.</p>
        </div>
        <Button className="gradient-brand border-0">
          <Rocket className="mr-2 h-4 w-4" /> Publicar App
        </Button>
      </div>

      {/* Launch Checklist */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-primary/20 bg-primary/5 p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Rocket className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold">Checklist de Lançamento</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {checklistItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border">
              {item.completed ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 text-yellow-500 shrink-0" />
              )}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
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
