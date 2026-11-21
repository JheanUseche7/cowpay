import { ReactNode } from "react";

type MeseroLayoutProps = {
  children: ReactNode;
};

export default function MeseroLayout({ children }: MeseroLayoutProps) {
  return <div>{children}</div>;
}
