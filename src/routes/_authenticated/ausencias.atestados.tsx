import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/ausencias/atestados")({
  head: () => ({
    meta: [
      { title: "Atestados | Programação Operacional" },
      { name: "description", content: "Atestados médicos que bloqueiam a programação." },
      { property: "og:title", content: "Atestados | Programação Operacional" },
      { property: "og:description", content: "Atestados médicos que bloqueiam a programação." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Atestados" description="Atestados médicos que bloqueiam a programação." />
      <ComingSoon phase="Fase 4" />
    </div>
  );
}
