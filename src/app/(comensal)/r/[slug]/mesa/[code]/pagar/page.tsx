import { PagarMesaPage } from "../../../../../../../features/comensal/pages/PagarMesaPage";

type PageProps = {
  params: Promise<{ slug: string; code: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code } = await params;
  return <PagarMesaPage slug={slug} code={code} />;
}
