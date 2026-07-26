import { useState } from "react";

// ==============================
// DONNEES INITIALES CLIENT
// ==============================

const initialClient = {
  entreprise: "",

  contact: "",

  email: "",

  telephone: "",

  adresse: "",

  ville: "",
};

// ==============================
// COMPOSANT : CREATION CLIENT
// ==============================

function ClientForm({ onAddClient }) {
  // ==============================
  // STATE FORMULAIRE
  // ==============================

  const [client, setClient] = useState(initialClient);

  // ==============================
  // GESTION DES CHAMPS
  // ==============================

  function handleChange(event) {
    const { name, value } = event.target;

    setClient((previousClient) => ({
      ...previousClient,

      [name]: value,
    }));
  }

  // ==============================
  // ENVOI FORMULAIRE
  // ==============================

  function handleSubmit(event) {
    event.preventDefault();

    onAddClient(client);

    setClient(initialClient);
  }

  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <div>
      <h2>Ajouter un client</h2>

      <form onSubmit={handleSubmit}>
        {/* INFORMATIONS ENTREPRISE */}

        <label>
          Entreprise
          <input
            name="entreprise"
            type="text"
            value={client.entreprise}
            onChange={handleChange}
          />
        </label>

        {/* INFORMATIONS CONTACT */}

        <label>
          Contact
          <input
            name="contact"
            type="text"
            value={client.contact}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={client.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Téléphone
          <input
            name="telephone"
            type="tel"
            value={client.telephone}
            onChange={handleChange}
          />
        </label>

        {/* ADRESSE */}

        <label>
          Adresse
          <input
            name="adresse"
            type="text"
            value={client.adresse}
            onChange={handleChange}
          />
        </label>

        <label>
          Ville
          <input
            name="ville"
            type="text"
            value={client.ville}
            onChange={handleChange}
          />
        </label>

        {/* ACTION */}

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default ClientForm;
