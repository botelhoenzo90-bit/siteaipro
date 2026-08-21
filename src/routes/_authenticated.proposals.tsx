import { createFileRoute } from "@tanstack/react-router";
import { FileText, Send, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/proposals")({
  component: () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Propostas Comerciais</h1>
          <p className="text-muted-foreground text-sm mt-1">Gere documentos profissionais e feche mais negócios.</p>
        </div>
        <Button className="gradient-brand border-0">
          <Plus className="mr-2 h-4 w-4" /> Nova Proposta
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Proposta #{i}</h3>
                <p className="text-xs text-muted-foreground">Cliente Exemplo {i}</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Valor:</span>
                <span className="font-medium text-foreground">R$ 2.500,00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status:</span>
                <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-bold uppercase">Pendente</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">
                <Download className="mr-2 h-3 w-3" /> PDF
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <Send className="mr-2 h-3 w-3" /> Enviar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
