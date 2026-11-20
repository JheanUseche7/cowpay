import { MenuMesaPage } from "../../../../../../../features/comensal/pages/MenuMesaPage";

type PageProps = {
  params: Promise<{ slug: string; code: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code } = await params;
  return <MenuMesaPage slug={slug} code={code} />;
}
