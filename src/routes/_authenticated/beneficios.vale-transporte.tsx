import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/beneficios/vale-transporte")({
  head: () => ({
    meta: [
      { title: "Vale-Transporte | Programação Operacional" },
      { name: "description", content: "Regras configuráveis de vale-transporte e cálculo." },
      { property: "og:title", content: "Vale-Transporte | Programação Operacional" },
      { property: "og:description", content: "Regras configuráveis de vale-transporte e cálculo." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Vale-Transporte" description="Regras configuráveis de vale-transporte e cálculo." />
      <ComingSoon phase="Fase 8" />
    </div>
  );
}
