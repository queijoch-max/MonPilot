import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Sidebar.module.css";

// ==============================
// COMPOSANT : BARRE LATERALE
// ==============================

function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      label: "Tableau de bord",
      path: "/",
      icon: "📊",
    },
    {
      label: "Clients",
      path: "/clients",
      icon: "👥",
    },
    {
      label: "Devis",
      path: "/devis",
      icon: "📄",
    },
    {
      label: "Rendez-vous",
      path: "/rendez-vous",
      icon: "📅",
    },
    {
      label: "Factures",
      path: "/factures",
      icon: "💰",
    },
  ];

  return (
    <>
      {/* ==============================
          BOUTON MOBILE
      ============================== */}

      <button
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le menu"
      >
        ☰
      </button>

      {/* ==============================
          SIDEBAR
      ============================== */}

      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <div className={styles.brand}>
          <h2 className={styles.title}>MonPilot</h2>

          <p className={styles.subtitle}>
            Pour une meilleure gestion d'entreprise
          </p>
        </div>

        <nav>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  <span className={styles.icon}>{item.icon}</span>

                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
