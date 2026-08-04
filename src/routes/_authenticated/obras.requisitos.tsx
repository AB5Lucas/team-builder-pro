import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/obras/requisitos")({
  head: () => ({
    meta: [
      { title: "Requisitos das Obras | Programação Operacional" },
      { name: "description", content: "Treinamentos, certificações e CNH exigidos por obra." },
      { property: "og:title", content: "Requisitos das Obras | Programação Operacional" },
      { property: "og:description", content: "Treinamentos, certificações e CNH exigidos por obra." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Requisitos das Obras" description="Treinamentos, certificações e CNH exigidos por obra." />
      <ComingSoon phase="Fase 3" />
    </div>
  );
}
