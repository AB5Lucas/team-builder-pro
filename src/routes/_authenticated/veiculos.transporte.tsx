import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/veiculos/transporte")({
  head: () => ({
    meta: [
      { title: "Transporte | Programação Operacional" },
      { name: "description", content: "Veículo, motorista, passageiros e horários por obra." },
      { property: "og:title", content: "Transporte | Programação Operacional" },
      { property: "og:description", content: "Veículo, motorista, passageiros e horários por obra." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Transporte" description="Veículo, motorista, passageiros e horários por obra." />
      <ComingSoon phase="Fase 7" />
    </div>
  );
}
