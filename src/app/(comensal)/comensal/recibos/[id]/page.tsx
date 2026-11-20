import { ReciboDetallePage } from "../../../../../features/comensal/pages/ReciboDetallePage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ReciboDetallePage id={id} />;
}
