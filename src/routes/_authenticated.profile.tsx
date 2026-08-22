import { createFileRoute } from "@tanstack/react-router";
import { User, Shield, CreditCard, LogOut, Eraser, Copy, Settings, Bell, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const copyBadgeCode = () => {
    const code = "#lovable-badge {\n  display: none !important;\n}";
    navigator.clipboard.writeText(code);
    toast.success("Código copiado!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Meu Perfil</h1>
        <p className="text-muted-foreground mt-2">Dados profissionais, configurações e sua conta.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
            <Card className="p-6 flex flex-col items-center text-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-purple-500 mb-4" />
                <h3 className="text-lg font-bold">Bruno Pro</h3>
                <p className="text-sm text-muted-foreground">Premium User</p>
                <Button variant="outline" className="w-full mt-4">Editar Perfil</Button>
            </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card className="p-6 space-y-6">
            <h3 className="font-bold">Informações</h3>
            <div className="space-y-4">
                {[
                    { label: "Email", value: "bruno@siteaipro.com" },
                    { label: "Plano", value: "Profissional (SiteAI Pro)" },
                    { label: "Membro desde", value: "Agosto 2026" }
                ].map(info => (
                    <div key={info.label} className="flex justify-between border-b border-border/50 pb-2">
                        <span className="text-sm text-muted-foreground">{info.label}</span>
                        <span className="text-sm font-bold">{info.value}</span>
                    </div>
                ))}
            </div>
          </Card>

          <Card className="p-6 space-y-6">
            <h3 className="font-bold">Preferências</h3>
            <div className="space-y-4">
                {[
                    { icon: Shield, label: 'Segurança & Conta', desc: 'Gerenciar 2FA e dispositivos' },
                    { icon: Bell, label: 'Notificações', desc: 'Configurar e-mails e alertas' },
                    { icon: Settings, label: 'Configurações Avançadas', desc: 'Preferências da plataforma' }
                ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl border border-border bg-card flex items-center gap-4 hover:bg-muted/30 cursor-pointer">
                        <item.icon className="h-5 w-5 text-primary" />
                        <div>
                            <p className="font-bold text-sm">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </Card>

          <div 
            onClick={copyBadgeCode}
            className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-between hover:bg-primary/10 cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <Eraser className="h-5 w-5 text-primary" />
              <div>
                <p className="font-bold text-sm">Remover Marca d'água</p>
                <p className="text-xs text-muted-foreground">Clique para copiar o código CSS</p>
              </div>
            </div>
            <Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
          </div>

          <Button variant="destructive" className="w-full">
            <LogOut className="mr-2 h-4 w-4" /> Encerrar Sessão
          </Button>
        </div>
      </div>
    </div>
  );
}