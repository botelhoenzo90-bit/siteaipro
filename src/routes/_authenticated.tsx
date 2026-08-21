import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context }) => {
    // Simulando verificação de autenticação por enquanto
    // futuramente usaremos supabase auth
  },
  component: () => (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar Simulado */}
      <aside className="w-64 border-r border-border bg-card/50 hidden md:block">
        <div className="p-6">
          <h2 className="text-xl font-bold">SiteAI Pro</h2>
        </div>
        <nav className="mt-4 px-4 space-y-2">
          {['Dashboard', 'AI Builder', 'CRM', 'Academy'].map((item) => (
            <div key={item} className="px-4 py-2 rounded-lg hover:bg-muted cursor-pointer text-sm font-medium">
              {item}
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  ),
});
