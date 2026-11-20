import { CarritoMesaPage } from "../../../../../../../features/comensal/pages/CarritoMesaPage";

type PageProps = {
  params: Promise<{ slug: string; code: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code } = await params;
  return <CarritoMesaPage slug={slug} code={code} />;
}
