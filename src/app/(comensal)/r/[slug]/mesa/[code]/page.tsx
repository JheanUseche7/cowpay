import { EntradaMesaPage } from "../../../../../../features/comensal/pages/EntradaMesaPage";

type PageProps = {
  params: Promise<{ slug: string; code: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code } = await params;
  return <EntradaMesaPage slug={slug} code={code} />;
}
