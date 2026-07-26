import StatCard from "../components/StatCard";
import styles from "./Dashboard.module.css";
import Planning from "../components/Planning";

// ==============================
// PAGE : TABLEAU DE BORD
// ==============================

function Dashboard({ clients, devis, factures, rendezVous }) {
  // ==============================
  // CALCUL CHIFFRE D'AFFAIRES
  // ==============================

  const chiffreAffaires = factures.reduce(
    (total, facture) =>
      facture.statut === "Payée" ? total + Number(facture.montant) : total,
    0,
  );

  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <div className={styles.container}>
      {/* ==============================
          HEADER
      ============================== */}

      <div className={styles.header}>
        <h1>Tableau de bord</h1>

        <p>
          Suivez votre activité, vos clients, vos devis, vos factures et vos
          rendez-vous.
        </p>
      </div>

      {/* ==============================
          CARTES STATISTIQUES
      ============================== */}

      <div className={styles.grid}>
        <StatCard title="Clients" value={clients.length} type="info" />

        <StatCard title="Devis" value={devis.length} type="sales" />

        <StatCard
          title="Rendez-vous"
          value={rendezVous.length}
          type="calendar"
        />

        <StatCard title="Factures" value={factures.length} type="warning" />

        <StatCard
          title="Chiffre d'affaires"
          value={`${chiffreAffaires} €`}
          type="success"
        />
      </div>

      {/* ==============================
          PLANNING
      ============================== */}

      <Planning />
    </div>
  );
}

export default Dashboard;
