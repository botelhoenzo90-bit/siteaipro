import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowLeft, Eye, EyeOff, LoaderCircle, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Login — Prime" },
      { name: "description", content: "Acesse ou crie sua conta Prime com e-mail e senha." },
      { property: "og:title", content: "Login — Prime" },
      { property: "og:description", content: "Acesse sua central Prime." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

type AuthMode = "login" | "signup" | "forgot";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const switchMode = (next: AuthMode) => {
    setMode(next);
    setPassword("");
    setConfirmPassword("");
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) { toast.error("Informe seu e-mail."); return; }
    if (mode !== "forgot" && password.length < 6) { toast.error("A senha precisa ter pelo menos 6 caracteres."); return; }
    if (mode === "signup" && password !== confirmPassword) { toast.error("As senhas não coincidem."); return; }
    setLoading(true);
    try {
      if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail, { redirectTo: `${window.location.origin}/reset-password` });
        if (error) throw error;
        toast.success("Enviamos o link de recuperação. Verifique seu e-mail.");
        switchMode("login");
        return;
      }
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({ email: cleanEmail, password, options: { emailRedirectTo: window.location.origin } });
        if (error) throw error;
        if (!data.session) {
          toast.success("Conta criada. Confirme seu e-mail para entrar.");
          switchMode("login");
          return;
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
        if (error) throw error;
      }
      toast.success("Acesso liberado.");
      await navigate({ to: "/dashboard", replace: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Não foi possível concluir o acesso.";
      toast.error(message.includes("Invalid login") ? "E-mail ou senha incorretos." : message);
    } finally {
      setLoading(false);
    }
  };

  const title = mode === "login" ? "Bem-vindo de volta" : mode === "signup" ? "Crie seu acesso" : "Recupere sua senha";
  const description = mode === "login" ? "Entre para continuar sua operação." : mode === "signup" ? "Comece com e-mail e senha." : "Você receberá um link seguro por e-mail.";

  return (
    <div className="auth-prime min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[1.08fr_.92fr]">
      <section className="relative hidden overflow-hidden bg-foreground p-12 text-background lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,214,0,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,214,0,.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        <Link to="/" className="relative text-2xl font-black tracking-[0]">PRIME</Link>
        <div className="relative max-w-xl"><span className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-2 text-[10px] font-black uppercase tracking-[.2em] text-primary"><ShieldCheck className="h-4 w-4"/> Acesso seguro</span><h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-[0]">Sua operação de sites começa aqui.</h1><p className="mt-5 max-w-lg text-base leading-7 text-background/60">Crie projetos, encontre clientes, conduza abordagens e precifique com clareza em um único sistema.</p></div>
        <p className="relative text-xs text-background/35">PRIME · Criação, prospecção e vendas</p>
      </section>
      <main className="relative flex min-h-screen items-center justify-center p-5 sm:p-10">
        <Link to="/" className="absolute left-5 top-5 inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground sm:left-10 sm:top-8"><ArrowLeft className="h-4 w-4"/> Voltar</Link>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 lg:hidden"><span className="text-2xl font-black">PRIME</span></div>
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground"><LockKeyhole className="h-5 w-5"/></div>
          <h2 className="text-3xl font-black tracking-[0]">{title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <form className="mt-8 space-y-5" onSubmit={submit}>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <div className="relative"><Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/><Input id="email" type="email" autoComplete="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="voce@exemplo.com" className="h-12 pl-10" /></div>
          </div>
          {mode !== "forgot" && <div className="space-y-2"><div className="flex items-center justify-between"><Label htmlFor="password">Senha</Label>{mode === "login" && <button type="button" onClick={()=>switchMode("forgot")} className="text-xs font-bold hover:underline">Esqueceu a senha?</button>}</div><div className="relative"><Input id="password" type={showPassword?"text":"password"} autoComplete={mode === "login" ? "current-password" : "new-password"} value={password} onChange={(event)=>setPassword(event.target.value)} className="h-12 pr-10"/><Button type="button" variant="ghost" size="icon" onClick={()=>setShowPassword(value=>!value)} className="absolute right-1 top-1 h-10 w-10" aria-label={showPassword?"Ocultar senha":"Mostrar senha"}>{showPassword?<EyeOff className="h-4 w-4"/>:<Eye className="h-4 w-4"/>}</Button></div></div>}
          {mode === "signup" && <div className="space-y-2"><Label htmlFor="confirm-password">Confirmar senha</Label><Input id="confirm-password" type="password" autoComplete="new-password" value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)} className="h-12"/></div>}
          <Button disabled={loading} className="h-12 w-full font-black">
             {loading && <LoaderCircle className="h-4 w-4 animate-spin"/>}{mode === "login" ? "Entrar" : mode === "signup" ? "Criar conta" : "Enviar link de recuperação"}
          </Button>
        </form>
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">{mode === "login" ? <>Novo por aqui? <button onClick={()=>switchMode("signup")} className="font-bold text-foreground hover:underline">Criar conta</button></> : <>Já possui acesso? <button onClick={()=>switchMode("login")} className="font-bold text-foreground hover:underline">Fazer login</button></>}</div>
      </motion.div>
      </main>
    </div>
  );
}
