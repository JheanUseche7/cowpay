import { PlatoDetallePage } from "../../../../../../../../features/comensal/pages/PlatoDetallePage";

type PageProps = {
  params: Promise<{ slug: string; code: string; id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code, id } = await params;
  return <PlatoDetallePage slug={slug} code={code} id={id} />;
}
