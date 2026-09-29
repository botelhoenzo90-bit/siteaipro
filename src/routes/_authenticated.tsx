import { createFileRoute } from "@tanstack/react-router";
import { PrimeAppShell } from "@/components/app/PrimeAppShell";

export const Route = createFileRoute("/_authenticated")({
  component: PrimeAppShell,
});
