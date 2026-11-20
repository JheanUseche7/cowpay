import Image from "next/image";
import { ReactNode } from "react";
import { MeseroHeader } from "../../features/mesero/components/MeseroHeader";

type MeseroLayoutProps = {
  children: ReactNode;
};

export default function MeseroLayout({ children }: MeseroLayoutProps) {
  return (
    <div>
      <MeseroHeader />
      {children}
    </div>
  );
}
