import { EstadoPedidoMesaPage } from "../../../../../../../features/comensal/pages/EstadoPedidoMesaPage";

type PageProps = {
  params: Promise<{ slug: string; code: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code } = await params;
  return <EstadoPedidoMesaPage slug={slug} code={code} />;
}
