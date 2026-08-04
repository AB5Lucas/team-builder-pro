import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/veiculos/motoristas")({
  head: () => ({
    meta: [
      { title: "Motoristas | Programação Operacional" },
      { name: "description", content: "Colaboradores habilitados, categoria e validade da CNH." },
      { property: "og:title", content: "Motoristas | Programação Operacional" },
      { property: "og:description", content: "Colaboradores habilitados, categoria e validade da CNH." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Motoristas" description="Colaboradores habilitados, categoria e validade da CNH." />
      <ComingSoon phase="Fase 7" />
    </div>
  );
}
