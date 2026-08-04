import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/treinamentos")({
  head: () => ({
    meta: [
      { title: "Treinamentos | Programação Operacional" },
      { name: "description", content: "Treinamentos, validade e situação por colaborador." },
      { property: "og:title", content: "Treinamentos | Programação Operacional" },
      { property: "og:description", content: "Treinamentos, validade e situação por colaborador." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Treinamentos" description="Treinamentos, validade e situação por colaborador." />
      <ComingSoon phase="Fase 4" />
    </div>
  );
}
