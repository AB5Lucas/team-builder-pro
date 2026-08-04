import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/ausencias/folgas")({
  head: () => ({
    meta: [
      { title: "Folgas | Programação Operacional" },
      { name: "description", content: "Folgas registradas por colaborador." },
      { property: "og:title", content: "Folgas | Programação Operacional" },
      { property: "og:description", content: "Folgas registradas por colaborador." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Folgas" description="Folgas registradas por colaborador." />
      <ComingSoon phase="Fase 4" />
    </div>
  );
}
