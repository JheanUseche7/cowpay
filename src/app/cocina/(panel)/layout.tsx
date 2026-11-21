import type { ReactNode } from "react";
import { CocinaHeader } from "../../../features/cocina/components/CocinaHeader";
import styles from "../../../features/cocina/styles/CocinaPanel.module.css";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.panel}>
      <CocinaHeader />
      {children}
    </div>
  );
}