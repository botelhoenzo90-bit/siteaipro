import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [{ title: "Nova senha — Prime" }, { name: "description", content: "Defina uma nova senha para sua conta Prime." }, { property: "og:title", content: "Nova senha — Prime" }, { property: "og:description", content: "Recupere o acesso à sua conta Prime." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const recovery = new URLSearchParams(window.location.hash.slice(1)).get("type") === "recovery";
    supabase.auth.getSession().then(({ data }) => setReady(recovery || Boolean(data.session)));
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.length < 6) { toast.error("Use pelo menos 6 caracteres."); return; }
    if (password !== confirmPassword) { toast.error("As senhas não coincidem."); return; }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Senha atualizada com sucesso.");
    await navigate({ to: "/dashboard", replace: true });
  };

  return <main className="flex min-h-screen items-center justify-center bg-background p-5"><div className="w-full max-w-md border bg-card p-7 shadow-xl sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">{ready?<LockKeyhole className="h-5 w-5"/>:<LoaderCircle className="h-5 w-5 animate-spin"/>}</div><h1 className="mt-6 text-3xl font-black">Crie uma nova senha</h1><p className="mt-2 text-sm text-muted-foreground">Use uma senha segura com pelo menos 6 caracteres.</p>{ready?<form onSubmit={submit} className="mt-7 space-y-5"><div className="space-y-2"><Label htmlFor="new-password">Nova senha</Label><Input id="new-password" type="password" value={password} onChange={event=>setPassword(event.target.value)} autoComplete="new-password" className="h-12"/></div><div className="space-y-2"><Label htmlFor="confirm-new-password">Confirmar nova senha</Label><Input id="confirm-new-password" type="password" value={confirmPassword} onChange={event=>setConfirmPassword(event.target.value)} autoComplete="new-password" className="h-12"/></div><Button disabled={loading} className="h-12 w-full font-black">{loading?<LoaderCircle className="h-4 w-4 animate-spin"/>:<CheckCircle2 className="h-4 w-4"/>} Salvar nova senha</Button></form>:<p className="mt-7 border border-destructive/30 bg-destructive/5 p-4 text-sm">Abra esta página pelo link enviado ao seu e-mail. <Link to="/auth" className="font-bold underline">Voltar ao login</Link></p>}</div></main>;
}