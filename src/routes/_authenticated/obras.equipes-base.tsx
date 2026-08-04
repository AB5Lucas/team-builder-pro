import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/obras/equipes-base")({
  head: () => ({
    meta: [
      { title: "Equipes Base | Programação Operacional" },
      { name: "description", content: "Equipe padrão de cada obra, independente da programação diária." },
      { property: "og:title", content: "Equipes Base | Programação Operacional" },
      { property: "og:description", content: "Equipe padrão de cada obra, independente da programação diária." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Equipes Base" description="Equipe padrão de cada obra, independente da programação diária." />
      <ComingSoon phase="Fase 3" />
    </div>
  );
}
