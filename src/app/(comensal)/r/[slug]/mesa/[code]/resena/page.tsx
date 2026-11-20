import { ResenaMesaPage } from "../../../../../../../features/comensal/pages/ResenaMesaPage";

type PageProps = {
  params: Promise<{ slug: string; code: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code } = await params;
  return <ResenaMesaPage slug={slug} code={code} />;
}
