import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, MoreVertical, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/_authenticated/crm")({
  component: CRMPage,
});

function CRMPage() {
  const columns = [
    { id: 'new', title: 'Novo Contato', leads: [{ id: 1, company: 'Academia Fit', niche: 'Academia' }] },
    { id: 'sent', title: 'Mensagem Enviada', leads: [{ id: 2, company: 'Dr. João Silva', niche: 'Dentista' }] },
    { id: 'responded', title: 'Respondeu', leads: [] },
    { id: 'meeting', title: 'Reunião Marcada', leads: [{ id: 3, company: 'Imobiliária XP', niche: 'Imóveis' }] },
    { id: 'closed', title: 'Fechado', leads: [] },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Conquiste Clientes</h1>
          <p className="text-muted-foreground">Gerencie seus leads e aumente suas conversões.</p>
        </div>
        <Button className="gradient-brand border-0">
          <Plus className="mr-2 h-4 w-4" /> Novo Lead
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Buscar empresas..." />
        </div>
        <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filtros</Button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6">
        {columns.map(col => (
          <div key={col.id} className="min-w-[300px] flex-1">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">{col.title} ({col.leads.length})</h3>
              <MoreVertical className="h-4 w-4 text-muted-foreground cursor-pointer" />
            </div>
            <div className="space-y-4 min-h-[500px] rounded-2xl bg-muted/20 p-4 border border-border/50">
              {col.leads.map(lead => (
                <div key={lead.id} className="p-4 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors cursor-pointer group">
                  <h4 className="font-bold">{lead.company}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{lead.niche}</p>
                  <div className="mt-4 flex gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">IG</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
