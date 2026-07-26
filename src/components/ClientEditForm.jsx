import { useState } from "react";

// ==============================
// COMPOSANT : MODIFICATION CLIENT
// ==============================

function ClientEditForm({ client, onUpdateClient }) {
  // ==============================
  // STATE DU FORMULAIRE
  // ==============================

  const [formData, setFormData] = useState(client);

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

    onUpdateClient(client.id, formData);
  }

  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modifier le client</h2>

      {/* INFORMATIONS ENTREPRISE */}

      <label>
        Entreprise :
        <input
          name="entreprise"
          type="text"
          value={formData.entreprise || ""}
          onChange={handleChange}
        />
      </label>

      {/* INFORMATIONS CONTACT */}

      <label>
        Contact :
        <input
          name="contact"
          type="text"
          value={formData.contact || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        Email :
        <input
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        Téléphone :
        <input
          name="telephone"
          type="tel"
          value={formData.telephone || ""}
          onChange={handleChange}
        />
      </label>

      {/* ADRESSE */}

      <label>
        Adresse :
        <input
          name="adresse"
          type="text"
          value={formData.adresse || ""}
          onChange={handleChange}
        />
      </label>

      <label>
        Ville :
        <input
          name="ville"
          type="text"
          value={formData.ville || ""}
          onChange={handleChange}
        />
      </label>

      {/* ACTION */}

      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default ClientEditForm;
