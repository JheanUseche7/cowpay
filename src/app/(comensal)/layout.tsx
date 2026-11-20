import type { ReactNode } from "react";
import { ComensalHeader } from "../../features/comensal/components/ComensalHeader";

export const metadata = { robots: { index: false, follow: false } };

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <ComensalHeader />
      {children}
    </div>
  );
}
