import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Lock, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/_authenticated/academy")({
  component: () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">SiteAI Academy</h1>
        <p className="text-muted-foreground text-sm mt-1">Domine a arte de vender sites profissionais com IA.</p>
      </div>

      <div className="space-y-4">
        {[
          { title: "Módulo 1: Criando sites com IA", status: "completed" },
          { title: "Módulo 2: Escolhendo nichos lucrativos", status: "unlocked" },
          { title: "Módulo 3: Como encontrar clientes", status: "locked" },
          { title: "Módulo 4: Como vender sites", status: "locked" },
          { title: "Módulo 5: Como aumentar preços", status: "locked" },
        ].map((mod, i) => (
          <div key={i} className="flex items-center justify-between p-6 rounded-2xl border border-border bg-card group hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-sm text-foreground">
                {i + 1}
              </div>
              <h3 className="font-bold text-foreground">{mod.title}</h3>
            </div>
            <div className="flex items-center gap-3">
              {mod.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
              {mod.status === 'unlocked' && <PlayCircle className="h-5 w-5 text-primary" />}
              {mod.status === 'locked' && <Lock className="h-5 w-5 text-muted-foreground" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
