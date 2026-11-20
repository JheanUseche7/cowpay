import type { ReactNode } from "react";
import { SuperadminHeader } from "../../features/superadmin/components/SuperadminHeader";

export const metadata = { robots: { index: false, follow: false } };

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SuperadminHeader />
      {children}
    </div>
  );
}
