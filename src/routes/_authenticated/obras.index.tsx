import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/obras")({
  head: () => ({
    meta: [
      { title: "Obras | Programação Operacional" },
      { name: "description", content: "Cadastro de obras, endereços, distâncias e responsáveis." },
      { property: "og:title", content: "Obras | Programação Operacional" },
      { property: "og:description", content: "Cadastro de obras, endereços, distâncias e responsáveis." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Obras" description="Cadastro de obras, endereços, distâncias e responsáveis." />
      <ComingSoon phase="Fase 3" />
    </div>
  );
}
