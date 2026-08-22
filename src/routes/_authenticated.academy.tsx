import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Lock, CheckCircle, BookOpen, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/academy")({
  component: () => (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">SiteAI Academy</h1>
        <p className="text-muted-foreground mt-2">O treinamento completo para dominar o mercado de criação de sites.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-primary/10 border-primary/20">
            <BookOpen className="h-8 w-8 text-primary mb-4" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Progresso</p>
            <p className="text-2xl font-bold mt-1">45% Completo</p>
        </Card>
        <Card className="p-6 border-border">
            <Clock className="h-8 w-8 text-muted-foreground mb-4" />
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tempo Total</p>
            <p className="text-2xl font-bold mt-1">12h 30m</p>
        </Card>
        <Card className="p-6 border-border">
            <Award className="h-8 w-8 text-yellow-500 mb-4" />
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-500">Conquistas</p>
            <p className="text-2xl font-bold mt-1">08 Selos</p>
        </Card>
      </div>

      <div className="space-y-4">
        {[
          { title: "Fundamentos: Criando sites com IA (v2.0)", status: "completed" },
          { title: "Prospecção Ativa: A ciência dos leads", status: "completed" },
          { title: "Fechamento de alto valor (High-Ticket)", status: "unlocked" },
          { title: "Otimização Avançada de Vendas", status: "locked" },
          { title: "Gestão de Clientes e Retenção", status: "locked" },
          { title: "Escalando sua agência", status: "locked" },
        ].map((mod, i) => (
          <div key={i} className="flex items-center justify-between p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center font-bold text-sm text-foreground">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{mod.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Duração média: 45 min</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {mod.status === 'completed' && <CheckCircle className="h-6 w-6 text-green-500" />}
              {mod.status === 'unlocked' && <PlayCircle className="h-6 w-6 text-primary" />}
              {mod.status === 'locked' && <Lock className="h-6 w-6 text-muted-foreground" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});