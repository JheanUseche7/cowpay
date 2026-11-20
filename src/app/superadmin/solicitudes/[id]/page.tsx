import { SolicitudDetallePage } from "../../../../features/superadmin/pages/SolicitudDetallePage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <SolicitudDetallePage id={id} />;
}
