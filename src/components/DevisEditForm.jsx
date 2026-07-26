import { useState } from "react";

// ==============================
// COMPOSANT : MODIFICATION DEVIS
// ==============================

function DevisEditForm({ devis, onUpdateDevis }) {
  // ==============================
  // STATE DU FORMULAIRE
  // ==============================

  const [formData, setFormData] = useState(devis);

  // ==============================
  // GESTION DES CHAMPS
  // ==============================

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,

      [name]: value,
    }));
  }

  // ==============================
  // ENVOI DU FORMULAIRE
  // ==============================

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateDevis(devis.id, formData);
  }

  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modifier le devis</h2>

      {/* INFORMATIONS DU DEVIS */}

      <label>
        Objet :
        <input
          name="objet"
          type="text"
          value={formData.objet || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        Montant :
        <input
          name="montant"
          type="number"
          value={formData.montant || ""}
          onChange={handleChange}
        />
      </label>

      {/* SUIVI DU DEVIS */}

      <label>
        Statut :
        <select
          name="statut"
          value={formData.statut || ""}
          onChange={handleChange}
        >
          <option value="En attente">En attente</option>

          <option value="Accepté">Accepté</option>

          <option value="Refusé">Refusé</option>
        </select>
      </label>

      <label>
        Date création :
        <input
          name="dateCreation"
          type="date"
          value={formData.dateCreation || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        Date relance :
        <input
          name="dateRelance"
          type="date"
          value={formData.dateRelance || ""}
          onChange={handleChange}
        />
      </label>

      {/* ACTION */}

      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default DevisEditForm;
