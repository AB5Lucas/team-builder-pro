import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/programacao/semanal")({
  head: () => ({
    meta: [
      { title: "Overview Semanal | Programação Operacional" },
      { name: "description", content: "Resumo de segunda a domingo com programados, confirmados e ausências." },
      { property: "og:title", content: "Overview Semanal | Programação Operacional" },
      { property: "og:description", content: "Resumo de segunda a domingo com programados, confirmados e ausências." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Overview Semanal" description="Resumo de segunda a domingo com programados, confirmados e ausências." />
      <ComingSoon phase="Fase 6" />
    </div>
  );
}
