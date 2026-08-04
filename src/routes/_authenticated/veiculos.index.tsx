import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/veiculos")({
  head: () => ({
    meta: [
      { title: "Frota | Programação Operacional" },
      { name: "description", content: "Cadastro e situação dos veículos." },
      { property: "og:title", content: "Frota | Programação Operacional" },
      { property: "og:description", content: "Cadastro e situação dos veículos." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Frota" description="Cadastro e situação dos veículos." />
      <ComingSoon phase="Fase 7" />
    </div>
  );
}
