import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/ausencias/ferias")({
  head: () => ({
    meta: [
      { title: "Férias | Programação Operacional" },
      { name: "description", content: "Períodos de férias que bloqueiam a programação." },
      { property: "og:title", content: "Férias | Programação Operacional" },
      { property: "og:description", content: "Períodos de férias que bloqueiam a programação." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Férias" description="Períodos de férias que bloqueiam a programação." />
      <ComingSoon phase="Fase 4" />
    </div>
  );
}
