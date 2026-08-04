import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/colaboradores")({
  head: () => ({
    meta: [
      { title: "Colaboradores | Programação Operacional" },
      { name: "description", content: "Cadastro de colaboradores, cargos, setores e departamentos." },
      { property: "og:title", content: "Colaboradores | Programação Operacional" },
      { property: "og:description", content: "Cadastro de colaboradores, cargos, setores e departamentos." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Colaboradores" description="Cadastro de colaboradores, cargos, setores e departamentos." />
      <ComingSoon phase="Fase 2" />
    </div>
  );
}
