import { createFileRoute } from "@tanstack/react-router";
import { Library, Wand2, Eye, Download, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/_authenticated/library")({
  component: () => (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black tracking-tighter uppercase leading-[0.9]">Biblioteca Premium</h1>
        <p className="text-muted-foreground mt-2 text-sm font-medium">Templates, blocos de código e prompts testados para converter mais.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
            { title: 'Clínica Odontológica', tag: 'Conversão Alta', img: 'https://images.unsplash.com/photo-1629909605125-58da0500a14c?auto=format&fit=crop&q=80&w=400' },
            { title: 'Advocacia Corporativa', tag: 'Profissional', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400' },
            { title: 'Imobiliária de Luxo', tag: 'Visual', img: 'https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=400' },
            { title: 'Restaurante Gourmet', tag: 'Conversão', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400' },
            { title: 'Academia & Fit', tag: 'Energético', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400' },
            { title: 'Estética Avançada', tag: 'Visual', img: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=400' },
            { title: 'SaaS Tech', tag: 'Moderno', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400' },
            { title: 'Consultoria B2B', tag: 'Profissional', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400' },
            { title: 'Landing Page Eventos', tag: 'Urgência', img: 'https://images.unsplash.com/photo-1505373630562-402923ad9901?auto=format&fit=crop&q=80&w=400' },
            { title: 'Pet Shop Premium', tag: 'Acolhedor', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400' },
            { title: 'E-commerce Moda', tag: 'Vendas', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400' },
            { title: 'Agência de Marketing', tag: 'Moderno', img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=400' }
        ].map((item) => (
          <Card key={item.title} className="group overflow-hidden border-border hover:border-primary/50 transition-all glass shadow-lg">
            <div className="aspect-video relative overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute top-3 left-3 bg-primary/20 backdrop-blur-md text-primary px-2 py-1 rounded text-[10px] uppercase tracking-wider font-bold border border-primary/20">
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