import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Zap, LayoutDashboard, Wand2, Users, FileText, GraduationCap, Library, User, TrendingUp, Search, MessageSquare, Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const [open, setOpen] = useState(false);
  
  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
    { label: 'AI Builder', icon: Wand2, to: '/ai-builder' },
    { label: 'Prospecção', icon: Search, to: '/prospecting' },
    { label: 'Scripts', icon: MessageSquare, to: '/scripts' },
    { label: 'Calculadora', icon: TrendingUp, to: '/pricing-calculator' },
    { label: 'Academy', icon: GraduationCap, to: '/academy' },
    { label: 'Biblioteca', icon: Library, to: '/library' },
    { label: 'Perfil', icon: User, to: '/profile' },
  ];

  const SidebarContent = ({ isMobile = false }) => (
    <div className="flex flex-col h-full bg-card/40 backdrop-blur-2xl">
      <div className="flex h-16 items-center border-b border-border px-6 gap-2">
        <Zap className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold">SiteAI Pro</span>
      </div>
      <nav className="p-4 space-y-2 overflow-y-auto flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setOpen(false)}
            activeProps={{ className: "bg-primary/10 text-primary border-primary/20" }}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-muted"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card/40 backdrop-blur-2xl hidden md:block">
        <SidebarContent />
      </aside>

      <div className="flex-1 md:ml-64">
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64 border-none">
                <SidebarContent isMobile />
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-bold">SiteAI Pro</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full gradient-brand" />
          </div>
        </header>
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
