import { CuentaMesaPage } from "../../../../../../../features/comensal/pages/CuentaMesaPage";

type PageProps = {
  params: Promise<{ slug: string; code: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug, code } = await params;
  return <CuentaMesaPage slug={slug} code={code} />;
}
