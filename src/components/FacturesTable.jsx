import { Link } from "react-router-dom";
import styles from "./FactureTable.module.css";
// ==============================
// COMPOSANT : TABLEAU DES FACTURES
// ==============================

function FacturesTable({ factures, onUpdateFacture, onDeleteFacture }) {
  // ==============================
  // MODIFICATION STATUT
  // ==============================

  function handleStatutChange(id, statut) {
    onUpdateFacture(id, {
      statut,
    });
  }

  // ==============================
  // MODIFICATION DATE RELANCE
  // ==============================

  function handleDateRelanceChange(id, dateRelance) {
    onUpdateFacture(id, {
      dateRelance,
    });
  }

  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <table>
      {/* ==============================
          EN-TETE
      ============================== */}

      <thead>
        <tr>
          <th>Client</th>
          <th>Montant</th>
          <th>Devis</th>
          <th>Statut</th>
          <th>Date création</th>
          <th>Date relance</th>
          <th>Action</th>
        </tr>
      </thead>

      {/* ==============================
          LISTE DES FACTURES
      ============================== */}

      <tbody>
        {factures.map((facture) => (
          <tr key={facture.id}>
            {/* CLIENT */}

            <td>{facture.nomClient}</td>

            {/* MONTANT */}

            <td>{facture.montant} €</td>

            {/* LIEN DEVIs */}

            <td>
              <Link to={`/devis/${facture.devisId}`}>Voir le devis</Link>
            </td>

            {/* STATUT */}

            <td>
              <select
                value={facture.statut}
                className={`${styles.status} ${
                  facture.statut === "Payée"
                    ? styles.paid
                    : facture.statut === "En attente de paiement"
                      ? styles.pending
                      : styles.late
                }`}
                onChange={(e) => handleStatutChange(facture.id, e.target.value)}
              >
                <option value="En attente de paiement">
                  En attente de paiement
                </option>

                <option value="Payée">Payée</option>

                <option value="En retard de paiement">
                  En retard de paiement
                </option>
              </select>
            </td>

            {/* DATE CREATION */}

            <td>{facture.dateCreation}</td>

            {/* DATE RELANCE */}

            <td>
              <input
                type="date"
                className="input"
                value={facture.dateRelance || ""}
                onChange={(e) =>
                  handleDateRelanceChange(facture.id, e.target.value)
                }
              />
            </td>

            {/* ACTION */}

            <td>
              <button onClick={() => onDeleteFacture(facture.id)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FacturesTable;
