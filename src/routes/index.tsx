import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Início - Lovable App" },
      { name: "description", content: "Envie um prompt e comece a criar." },
      { property: "og:title", content: "Início - Lovable App" },
      { property: "og:description", content: "Envie um prompt e comece a criar." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        envie um prompt leia
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Comece a construir sua aplicação agora mesmo.
      </p>
    </div>
  );
}
