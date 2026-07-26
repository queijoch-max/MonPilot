import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import styles from "./Layout.module.css";

// ==============================
// COMPOSANT : STRUCTURE GLOBALE
// ==============================

function Layout() {
  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <div className={styles.container}>
      {/* ==============================
          NAVIGATION
      ============================== */}

      <Sidebar />

      {/* ==============================
          CONTENU DES PAGES
      ============================== */}

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
