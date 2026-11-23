import type { ReactNode } from "react";

export const metadata = { robots: { index: false, follow: false } };

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
