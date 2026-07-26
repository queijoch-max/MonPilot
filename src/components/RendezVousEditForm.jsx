import { useState } from "react";

// ==============================
// FORMULAIRE MODIFICATION RDV
// ==============================

function RendezVousEditForm({ rendezVous, onUpdateRendezVous }) {
  // ==============================
  // ETAT DU FORMULAIRE
  // ==============================

  const [formData, setFormData] = useState(rendezVous);

  // ==============================
  // MODIFICATION DES CHAMPS
  // ==============================

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // ==============================
  // ENREGISTREMENT MODIFICATION
  // ==============================

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateRendezVous(rendezVous.id, formData);
  }

  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <form onSubmit={handleSubmit}>
      {/* ==============================
          CLIENT
      ============================== */}

      <h2>Rendez-vous avec {formData.nomClient}</h2>

      {/* ==============================
          DATE ET HEURE
      ============================== */}

      <label>
        Date et heure :
        <input
          type="datetime-local"
          name="dateDebut"
          value={formData.dateDebut}
          onChange={handleChange}
        />
      </label>

      {/* ==============================
          OBJET
      ============================== */}

      <label>
        Objet :
        <input
          type="text"
          name="objet"
          value={formData.objet}
          onChange={handleChange}
        />
      </label>

      {/* ==============================
          NOTE
      ============================== */}

      <label>
        Note :
        <textarea
          name="note"
          value={formData.note || ""}
          onChange={handleChange}
        />
      </label>

      {/* ==============================
          ACTION
      ============================== */}

      <button type="submit">Enregistrer les modifications</button>
    </form>
  );
}

export default RendezVousEditForm;
