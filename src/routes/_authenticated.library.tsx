import { createFileRoute } from "@tanstack/react-router";
import { Library, Wand2, Eye, Download, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/library")({
  component: () => (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Biblioteca Premium</h1>
        <p className="text-muted-foreground mt-2">Templates, blocos de código e prompts testados para converter mais.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
            { title: 'Clínica Odontológica', tag: 'Conversão Alta' },
            { title: 'Advocacia Corporativa', tag: 'Profissional' },
            { title: 'Imobiliária de Luxo', tag: 'Visual' },
            { title: 'Restaurante Gourmet', tag: 'Conversão' },
            { title: 'Academia & Fit', tag: 'Energético' },
            { title: 'Estética Avançada', tag: 'Visual' },
            { title: 'SaaS Tech', tag: 'Moderno' },
            { title: 'Consultoria B2B', tag: 'Profissional' },
            { title: 'Landing Page Eventos', tag: 'Urgência' }
        ].map((item) => (
          <Card key={item.title} className="group overflow-hidden border-border hover:border-primary/50 transition-all">
            <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
              <Zap className="h-10 w-10 text-muted-foreground" />
              <div className="absolute top-3 left-3 bg-white/10 backdrop-blur text-white px-2 py-1 rounded text-[10px] uppercase tracking-wider font-bold">
                {item.tag}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-6">Estrutura validada com mais de 500+ testes de conversão.</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="mr-2 h-4 w-4" /> Preview
                </Button>
                <Button size="sm" className="flex-1 gradient-brand border-0">
                  <Wand2 className="mr-2 h-4 w-4" /> Usar Prompt
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  ),
});