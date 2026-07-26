import { useParams } from "react-router-dom";

import DevisEditForm from "../components/DevisEditForm";

// ==============================
// PAGE : DETAIL DEVIS
// ==============================

function DevisDetails({ devis, onUpdateDevis }) {
  // ==============================
  // RECUPERATION DEVIS
  // ==============================

  const { id } = useParams();

  const devisSelectionne = devis.find(
    (devisItem) => devisItem.id === Number(id),
  );

  // ==============================
  // DEVIS INTROUVABLE
  // ==============================

  if (!devisSelectionne) {
    return <p>Devis introuvable</p>;
  }

  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <div>
      {/* ==============================
          INFORMATIONS DEVIS
      ============================== */}

      <h1>Modifier le devis</h1>

      <h2>{devisSelectionne.nomClient}</h2>

      <p>Objet : {devisSelectionne.objet}</p>

      <p>Montant : {devisSelectionne.montant} €</p>

      <p>Statut : {devisSelectionne.statut}</p>

      {/* ==============================
          FORMULAIRE MODIFICATION
      ============================== */}

      <DevisEditForm devis={devisSelectionne} onUpdateDevis={onUpdateDevis} />
    </div>
  );
}

export default DevisDetails;
