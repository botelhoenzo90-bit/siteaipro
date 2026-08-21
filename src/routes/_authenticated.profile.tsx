import { createFileRoute } from "@tanstack/react-router";
import { User, Shield, CreditCard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/profile")({
  component: () => (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Perfil</h1>
        <p className="text-muted-foreground text-sm mt-1">Gerencie suas informações e assinatura.</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-6">
          <div className="h-20 w-20 rounded-full gradient-brand shadow-lg" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">Usuário Pro</h3>
            <p className="text-sm text-muted-foreground">premium@siteaipro.com</p>
          </div>
          <Button variant="outline" size="sm">Editar</Button>
        </div>

        <div className="grid gap-4">
          {[
             { icon: Shield, label: 'Segurança', desc: 'Alterar senha e 2FA' },
             { icon: CreditCard, label: 'Assinatura', desc: 'Plano Premium Ativo' },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-xl border border-border bg-card flex items-center gap-4 hover:bg-muted/30 cursor-pointer">
              <item.icon className="h-5 w-5 text-primary" />
              <div>
                <p className="font-bold text-sm text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
          <Button variant="destructive" className="mt-4 w-full">
            <LogOut className="mr-2 h-4 w-4" /> Sair da Conta
          </Button>
        </div>
      </div>
    </div>
  ),
});
