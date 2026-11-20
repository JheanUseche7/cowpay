import type { ReactNode } from "react";
import { CocinaHeader } from "../../features/cocina/components/CocinaHeader";

export const metadata = { robots: { index: false, follow: false } };

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <CocinaHeader />
      {children}
    </div>
  );
}
