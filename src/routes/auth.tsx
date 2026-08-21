import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: () => <div className="flex min-h-screen items-center justify-center">Login / Cadastro</div>,
});
