import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-border bg-card p-8 shadow-2xl">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight">SiteAI Pro</span>
          </Link>
          <h2 className="text-2xl font-bold">Bem-vindo de volta</h2>
          <p className="text-sm text-muted-foreground mt-2">Escolha seu método preferido para entrar.</p>
        </div>

        <div className="grid gap-4">
          <Button variant="outline" className="h-12 border-border hover:bg-muted">
            <img src="https://www.google.com/favicon.ico" className="mr-2 h-4 w-4" alt="Google" />
            Entrar com Google
          </Button>
          <Button variant="outline" className="h-12 border-border hover:bg-muted">
            <Github className="mr-2 h-5 w-5" />
            Entrar com GitHub
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Ou continue com e-mail</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="nome@exemplo.com" className="h-11 bg-muted/30 border-border" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" className="h-11 bg-muted/30 border-border" />
          </div>
          <Button className="w-full h-12 gradient-brand border-0" asChild>
             <Link to="/dashboard">Entrar</Link>
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Não tem uma conta?{" "}
          <button className="text-primary font-medium hover:underline">Criar conta grátis</button>
        </p>
      </div>
    </div>
  );
}
