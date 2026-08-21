import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Zap, LayoutDashboard, Wand2, Users, FileText, GraduationCap, Library, User } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
    { label: 'AI Builder', icon: Wand2, to: '/ai-builder' },
    { label: 'CRM', icon: Users, to: '/crm' },
    { label: 'Propostas', icon: FileText, to: '/proposals' },
    { label: 'Academy', icon: GraduationCap, to: '/academy' },
    { label: 'Biblioteca', icon: Library, to: '/library' },
    { label: 'Perfil', icon: User, to: '/profile' },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card/50 backdrop-blur-xl hidden md:block">
        <div className="flex h-16 items-center border-b border-border px-6 gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">SiteAI Pro</span>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-primary/10 text-primary border-primary/20" }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-muted"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1 md:ml-64">
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8">
          <div className="md:hidden flex items-center gap-2">
             <Zap className="h-5 w-5 text-primary" />
             <span className="font-bold">SiteAI Pro</span>
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full gradient-brand" />
          </div>
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
