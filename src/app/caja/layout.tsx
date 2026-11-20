import type { ReactNode } from "react";
import { CajaHeader } from "../../features/caja/components/CajaHeader";

export const metadata = { robots: { index: false, follow: false } };

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <CajaHeader />
      {children}
    </div>
  );
}
