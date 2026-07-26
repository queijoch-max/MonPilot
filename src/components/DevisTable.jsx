import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ==============================
// COMPOSANT : TABLEAU DES DEVIS
// ==============================

function DevisTable({
  devis,
  onUpdateDevis,
  onDeleteDevis,
  handleCreateFactureDepuisDevis,
}) {
  const navigate = useNavigate();
  // ==============================
  // STOCKAGE DES ACTIONS SELECTIONNEES
  // ==============================

  const [actionsSelectionnees, setActionsSelectionnees] = useState({});

  // ==============================
  // MODIFICATION ACTION
  // ==============================

  function handleActionChange(id, action) {
    setActionsSelectionnees({
      ...actionsSelectionnees,
      [id]: action,
    });
  }

  // ==============================
  // VALIDATION ACTION
  // ==============================

  function handleActionValidation(devis) {
    const actionChoisie = actionsSelectionnees[devis.id];

    if (actionChoisie === "Modifier") {
      navigate(`/devis/${devis.id}`);
    }

    if (actionChoisie === "Supprimer") {
      onDeleteDevis(devis.id);
    }

    if (actionChoisie === "Facture") {
      handleCreateFactureDepuisDevis(devis);
    }
  }

  // ==============================
  // MODIFICATION STATUT
  // ==============================

  function handleStatutChange(id, statut) {
    onUpdateDevis(id, {
      statut,
    });
  }

  // ==============================
  // MODIFICATION DATE RELANCE
  // ==============================

  function handleDateRelanceChange(id, dateRelance) {
    onUpdateDevis(id, {
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

          <th>Objet</th>

          <th>Montant</th>

          <th>Statut</th>

          <th>Date création</th>

          <th>Date relance</th>

          <th>Actions</th>
        </tr>
      </thead>

      {/* ==============================
          LISTE DES DEVIS
      ============================== */}

      <tbody>
        {devis.map((devis) => (
          <tr key={devis.id}>
            <td>{devis.nomClient}</td>

            <td>{devis.objet}</td>

            <td>{devis.montant} €</td>

            {/* STATUT */}

            <td>
              <select
                value={devis.statut}
                onChange={(e) => handleStatutChange(devis.id, e.target.value)}
              >
                <option value="En attente">En attente</option>

                <option value="Accepté">Accepté</option>

                <option value="Refusé">Refusé</option>
              </select>
            </td>

            <td>{devis.dateCreation}</td>

            {/* RELANCE */}

            <td>
              <input
                type="date"
                value={devis.dateRelance || ""}
                onChange={(e) =>
                  handleDateRelanceChange(devis.id, e.target.value)
                }
              />
            </td>

            {/* ACTIONS */}

            <td>
              <select
                value={actionsSelectionnees[devis.id] || ""}
                onChange={(e) => handleActionChange(devis.id, e.target.value)}
              >
                <option value="">Choisir une action</option>

                <option value="Modifier">Modifier</option>

                <option value="Supprimer">Supprimer</option>

                <option value="Facture">Créer une facture</option>
              </select>

              <button onClick={() => handleActionValidation(devis)}>
                Valider
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DevisTable;
