import type { ReactNode } from "react";
import { MeseroHeader } from "./../features/mesero/components/MeseroHeader"
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <MeseroHeader />
    <html lang="es">
      <body>{children}</body>
    </html>
    </>
  );
}
