import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/programacao/hoje")({
  head: () => ({
    meta: [
      { title: "Programação de Hoje | Programação Operacional" },
      { name: "description", content: "Programação real do dia corrente, com confirmações e obras." },
      { property: "og:title", content: "Programação de Hoje | Programação Operacional" },
      { property: "og:description", content: "Programação real do dia corrente, com confirmações e obras." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Programação de Hoje" description="Programação real do dia corrente, com confirmações e obras." />
      <ComingSoon phase="Fase 5" />
    </div>
  );
}
