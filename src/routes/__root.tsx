import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";
import primeCss from "../prime-overrides.css?url";
import primeSystemCss from "../prime-system.css?url";
import landingPatchCss from "../landing-patch.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { supabase } from "@/integrations/supabase/client";

function NotFoundComponent() {
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold text-foreground">404</h1><h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2><p className="mt-2 text-sm text-muted-foreground">A página que você está procurando não existe ou foi movida.</p><div className="mt-6"><Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Voltar para o Início</Link></div></div></div>;
}
function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const normalizedError=error instanceof Error?error:new Error(String(error));console.error(normalizedError); const router = useRouter();
  useEffect(()=>{reportLovableError(normalizedError,{boundary:"tanstack_root_error_component"})},[normalizedError]);
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold tracking-tight text-foreground">Algo deu errado</h1><p className="mt-2 text-sm text-muted-foreground">Ocorreu um erro inesperado. Você pode tentar novamente ou voltar para o início.</p><div className="mt-6 flex flex-wrap justify-center gap-2"><button onClick={()=>{router.invalidate();reset()}} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Tentar novamente</button><Link to="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">Voltar para o Início</Link></div></div></div>;
}
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Prime Sites — Venda sites e transforme sua operação em uma máquina de vendas"},{name:"description",content:"Prime Sites: prospecção, criação de sites, precificação, scripts e gestão em uma única plataforma."},{property:"og:title",content:"Prime Sites — Sua operação de sites em um só lugar"},{property:"og:description",content:"Encontre clientes, crie sites, apresente, precifique e acompanhe sua operação."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"},{rel:"stylesheet",href:appCss},{rel:"stylesheet",href:primeCss},{rel:"stylesheet",href:primeSystemCss},{rel:"stylesheet",href:landingPatchCss},{rel:"icon",href:"/favicon.png",type:"image/png"}]}),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Toaster position="top-right" richColors/><Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();const router=useRouter();useEffect(()=>{const {data}=supabase.auth.onAuthStateChange((event,session)=>{if(event!=="SIGNED_IN"&&event!=="SIGNED_OUT"&&event!=="USER_UPDATED")return;void router.invalidate();if(session&&event!=="SIGNED_OUT")void queryClient.invalidateQueries()});return()=>data.subscription.unsubscribe()},[queryClient,router]);return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>}
