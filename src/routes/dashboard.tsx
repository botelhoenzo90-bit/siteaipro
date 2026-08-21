import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard - Lovable App" },
      { name: "description", content: "Gerencie sua aplicação." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Dashboard
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Esta é a sua área de gerenciamento.
      </p>
    </div>
  );
}
