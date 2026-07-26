import ClientForm from "./ClientForm";

import ClientTable from "../components/ClientTable";

import styles from "./Clients.module.css";

// ==============================
// PAGE : GESTION DES CLIENTS
// ==============================

function Clients({ clients, onAddClient, onDeleteClient }) {
  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <div className={styles.container}>
      {/* ==============================
          TITRE PAGE
      ============================== */}

      <h1>Clients</h1>

      {/* ==============================
          STATISTIQUES
      ============================== */}

      <p>Nombre de clients : {clients.length}</p>

      {/* ==============================
          CREATION CLIENT
      ============================== */}

      <ClientForm onAddClient={onAddClient} />

      {/* ==============================
          LISTE CLIENTS
      ============================== */}

      <ClientTable clients={clients} onDeleteClient={onDeleteClient} />
    </div>
  );
}

export default Clients;
