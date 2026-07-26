import { Link } from "react-router-dom";
import styles from "./ClientTable.module.css";

// ==============================
// COMPOSANT : TABLEAU CLIENTS
// ==============================

function ClientTable({ clients, onDeleteClient }) {
  return (
    <table className={styles.table}>
      {/* ==============================
          EN-TETE DU TABLEAU
      ============================== */}

      <thead>
        <tr>
          <th>Entreprise</th>

          <th>Contact</th>

          <th>Ville</th>

          <th>Actions</th>
        </tr>
      </thead>

      {/* ==============================
          LISTE DES CLIENTS
      ============================== */}

      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            {/* NOM CLIQUABLE POUR VOIR LA FICHE */}

            <td>
              <Link to={`/clients/${client.id}`}>{client.entreprise}</Link>
            </td>

            <td>{client.contact}</td>

            <td>{client.ville}</td>

            {/* ACTIONS */}

            <td>
              <Link to={`/clients/${client.id}`} className={styles.editButton}>
                Modifier
              </Link>

              <button
                onClick={() => onDeleteClient(client.id)}
                className={styles.deleteButton}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ClientTable;
