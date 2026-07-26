import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

// ==============================
// COMPOSANT : BARRE LATERALE
// ==============================

function Sidebar() {
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
    <aside className={styles.sidebar}>
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
                className={({ isActive }) =>
                  isActive ? styles.active : styles.link
                }
              >
                <span className={styles.icon}>{item.icon}</span>

                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
