import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
});

function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md space-y-8 rounded-3xl border border-border bg-card/40 backdrop-blur-2xl p-10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 h-48 w-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="text-center relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-3xl font-black tracking-tighter">SiteAI Pro</span>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight">Bem-vindo de volta</h2>
          <p className="text-sm text-muted-foreground mt-2">Acesse sua central de inteligência para sites.</p>
        </div>

        <div className="grid gap-4 relative z-10">
          <Button 
            variant="outline" 
            className="h-12 border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-all rounded-xl"
            onClick={() => toast.info("Integração com Google em breve!")}
          >
            <img src="https://www.google.com/favicon.ico" className="mr-3 h-4 w-4" alt="Google" />
            Entrar com Google
          </Button>
        </div>

        <div className="relative z-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
            <span className="bg-card px-3 text-muted-foreground/60">Ou e-mail</span>
          </div>
        </div>

        <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">E-mail</Label>
            <Input id="email" type="email" placeholder="nome@exemplo.com" className="h-12 bg-background/50 border-border/50 rounded-xl focus:ring-primary/20" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Senha</Label>
              <button type="button" className="text-[10px] font-bold text-primary hover:underline">Esqueceu a senha?</button>
            </div>
            <Input id="password" type="password" className="h-12 bg-background/50 border-border/50 rounded-xl focus:ring-primary/20" />
          </div>
          <Button className="w-full h-14 gradient-brand border-0 text-base font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all" asChild>
             <Link to="/dashboard">Entrar no Sistema</Link>
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground relative z-10">
          Novo por aqui?{" "}
          <button className="text-primary font-bold hover:underline">Criar conta grátis</button>
        </p>
      </motion.div>
    </div>
  );
}
