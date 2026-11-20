import { RestaurantePage } from "../../../../features/publico/pages/RestaurantePage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <RestaurantePage slug={slug} />;
}
