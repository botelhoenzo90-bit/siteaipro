import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Plus, 
  MessageSquare,
  Wand2,
  Library,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const kpis = [
    { label: 'Meta Mensal', value: 'R$ 12.500', target: 'R$ 20.000', progress: 62.5, icon: Target, color: 'text-blue-500' },
    { label: 'Prospecções Hoje', value: '14', trend: '+3 vs ontem', icon: Users, color: 'text-purple-500' },
    { label: 'Conversão de Leads', value: '28%', trend: '+5%', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Projetos Ativos', value: '06', icon: Zap, color: 'text-yellow-500' },
  ];

  const activities = [
    { type: 'AI', content: 'Novo prompt gerado: Clínica Odontológica Harmony', time: 'Há 15 min' },
    { type: 'PROSPECT', content: 'Lead qualificado encontrado em São Paulo', time: 'Há 1h' },
    { type: 'PRICE', content: 'Orçamento de R$ 3.500 calculado', time: 'Há 3h' },
    { type: 'NOTE', content: 'Lembrete: Retornar proposta para Dr. Marcos', time: 'Há 5h' },
  ];

  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-[0.9]">Dashboard Central</h1>
          <p className="text-muted-foreground mt-2 text-sm font-medium">Bem-vindo de volta! Aqui está o pulso do seu negócio hoje.</p>
        </div>
        <Button className="gradient-brand border-0 h-12 px-8 shadow-xl shadow-primary/20 font-black uppercase text-xs tracking-widest" asChild>
          <Link to="/ai-builder">
            <Plus className="mr-2 h-5 w-5" /> Novo Projeto IA
          </Link>
        </Button>
      </div>

      {/* KPI Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-6 border-border/50 hover:border-primary/30 transition-all group glass overflow-hidden relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{kpi.label}</span>
                <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black tracking-tighter">{kpi.value}</span>
                {kpi.progress ? (
                  <div className="mt-2 space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold text-muted-foreground">
                      <span>PROGRESSO</span>
                      <span>{kpi.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${kpi.progress}%` }}
                        className="h-full gradient-brand"
                      />
                    </div>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-green-500 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" /> {kpi.trend}
                  </span>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Chart/Evolution area */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-8 border-border/50 glass">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold">Faturamento Estimado</h3>
                <p className="text-sm text-muted-foreground">Evolução dos últimos 7 dias</p>
              </div>
              <Button variant="outline" size="sm">Ver Relatório</Button>
            </div>
            <div className="h-[300px] flex items-end justify-between gap-3">
              {[35, 65, 45, 80, 55, 90, 100].map((h, i) => (
                <div key={i} className="flex-1 space-y-3">
                  <div className="w-full bg-muted/30 rounded-t-xl relative group h-full flex flex-col justify-end overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }} 
                      animate={{ height: `${h}%` }} 
                      className="w-full gradient-brand rounded-t-xl opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                  <div className="text-[10px] text-center font-bold text-muted-foreground uppercase">Dia {i + 1}</div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 border-border/50 glass hover:border-primary/20 transition-colors cursor-pointer group">
              <Link to="/prospecting" className="block">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold">Prospecção Ativa</h4>
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">Encontre novos nichos e empresas que precisam de um site agora.</p>
                <div className="flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                  EXPLORAR OPORTUNIDADES <ArrowUpRight className="ml-1 h-3 w-3" />
                </div>
              </Link>
            </Card>
            <Card className="p-6 border-border/50 glass hover:border-primary/20 transition-colors cursor-pointer group">
              <Link to="/library" className="block">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold">Biblioteca Premium</h4>
                  <Library className="h-5 w-5 text-purple-500" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">Acesse templates e blocos de código prontos para usar.</p>
                <div className="flex items-center text-xs font-bold text-purple-500 group-hover:translate-x-1 transition-transform">
                  VER TEMPLATES <ArrowUpRight className="ml-1 h-3 w-3" />
                </div>
              </Link>
            </Card>
          </div>
        </div>

        {/* Sidebar area: Activities & Notes */}
        <div className="space-y-8">
          <Card className="p-6 border-border/50 glass">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Atividades Recentes
            </h3>
            <div className="space-y-6">
              {activities.map((act, i) => (
                <div key={i} className="flex gap-4 relative">
                  {i !== activities.length - 1 && (
                    <div className="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-border/50" />
                  )}
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{act.content}</p>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase mt-1 tracking-wider">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-8 text-xs font-bold text-muted-foreground hover:text-primary">
              VER TODA A ATIVIDADE
            </Button>
          </Card>

          <Card className="p-6 border-border/50 bg-gradient-to-br from-primary/5 to-purple-500/5 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
              <BarChart3 className="h-32 w-32" />
            </div>
            <h3 className="text-lg font-bold mb-2">Dica do Dia</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              "Aborde empresas com nota 3.5 no Google Maps. Elas sabem que precisam melhorar e estão dispostas a investir."
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary">
              <CheckCircle2 className="h-4 w-4" /> ESTRATÉGIA VALIDADA
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
