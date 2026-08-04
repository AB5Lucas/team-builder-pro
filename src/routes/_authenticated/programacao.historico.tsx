import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/programacao/historico")({
  head: () => ({
    meta: [
      { title: "Histórico de Programação | Programação Operacional" },
      { name: "description", content: "Consulta das programações finalizadas sem alterar o histórico." },
      { property: "og:title", content: "Histórico de Programação | Programação Operacional" },
      { property: "og:description", content: "Consulta das programações finalizadas sem alterar o histórico." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Histórico de Programação" description="Consulta das programações finalizadas sem alterar o histórico." />
      <ComingSoon phase="Fase 9" />
    </div>
  );
}
