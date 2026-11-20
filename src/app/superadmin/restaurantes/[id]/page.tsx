import { RestauranteDetallePage } from "../../../../features/superadmin/pages/RestauranteDetallePage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <RestauranteDetallePage id={id} />;
}
