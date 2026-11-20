import { DividirCuentaMesaPage } from "../../../../../../../features/comensal/pages/DividirCuentaMesaPage";

type PageProps = {
  params: Promise<{ slug: string; code: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code } = await params;
  return <DividirCuentaMesaPage slug={slug} code={code} />;
}
