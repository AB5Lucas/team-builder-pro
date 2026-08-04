import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/beneficios/premio-viagem")({
  head: () => ({
    meta: [
      { title: "Prêmio de Viagem | Programação Operacional" },
      { name: "description", content: "Regras por faixa de distância e cálculo automático." },
      { property: "og:title", content: "Prêmio de Viagem | Programação Operacional" },
      { property: "og:description", content: "Regras por faixa de distância e cálculo automático." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Prêmio de Viagem" description="Regras por faixa de distância e cálculo automático." />
      <ComingSoon phase="Fase 8" />
    </div>
  );
}
