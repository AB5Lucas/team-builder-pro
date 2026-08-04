import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, ComingSoon } from "@/components/page-header";

export const Route = createFileRoute("/_authenticated/admin/usuarios")({
  head: () => ({
    meta: [
      { title: "Usuários | Programação Operacional" },
      { name: "description", content: "Usuários do sistema e seus perfis de acesso." },
      { property: "og:title", content: "Usuários | Programação Operacional" },
      { property: "og:description", content: "Usuários do sistema e seus perfis de acesso." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="space-y-2">
      <PageHeader title="Usuários" description="Usuários do sistema e seus perfis de acesso." />
      <ComingSoon phase="Fase 1" />
    </div>
  );
}
