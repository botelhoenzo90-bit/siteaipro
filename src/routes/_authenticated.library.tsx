import { createFileRoute } from "@tanstack/react-router";
import { Library, Wand2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/library")({
  component: () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Biblioteca Premium</h1>
        <p className="text-muted-foreground text-sm mt-1">Templates prontos e testados para seus clientes.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {['Clínica Médica', 'Advocacia', 'Imobiliária', 'Restaurante', 'Academia', 'Estética'].map((name) => (
          <div key={name} className="rounded-2xl border border-border bg-card overflow-hidden group">
            <div className="aspect-video bg-muted/50 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest font-bold">
              Preview Image
            </div>
            <div className="p-6">
              <h3 className="font-bold text-foreground text-lg">{name}</h3>
              <p className="text-xs text-muted-foreground mt-1 mb-6">Template otimizado para conversão e alta performance.</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="mr-2 h-3 w-3" /> Ver
                </Button>
                <Button size="sm" className="flex-1 gradient-brand border-0">
                  <Wand2 className="mr-2 h-3 w-3" /> Usar Prompt
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
