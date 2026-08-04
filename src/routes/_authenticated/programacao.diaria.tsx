import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/programacao/diaria")({
  head: () => ({
    meta: [
      { title: "Programação Diária | Programação Operacional" },
      { name: "description", content: "Monte a programação de qualquer data com drag and drop e validações." },
      { property: "og:title", content: "Programação Diária | Programação Operacional" },
      { property: "og:description", content: "Monte a programação de qualquer data com drag and drop e validações." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Programação Diária" description="Monte a programação de qualquer data com drag and drop e validações." />
      <ComingSoon phase="Fase 5" />
    </div>
  );
}
