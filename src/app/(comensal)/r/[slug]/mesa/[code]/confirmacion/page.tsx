import { ConfirmacionPagoMesaPage } from "../../../../../../../features/comensal/pages/ConfirmacionPagoMesaPage";

type PageProps = {
  params: Promise<{ slug: string; code: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code } = await params;
  return <ConfirmacionPagoMesaPage slug={slug} code={code} />;
}
