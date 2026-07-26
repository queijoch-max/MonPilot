import { useState } from "react";

// ==============================
// DATE DU JOUR PAR DEFAUT
// ==============================

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

// ==============================
// COMPOSANT : CREATION DEVIS
// ==============================

function DevisForm({ clients, onAddDevis }) {
  // ==============================
  // STATE FORMULAIRE
  // ==============================

  const [devis, setDevis] = useState({
    clientId: "",

    nomClient: "",

    nouveauClientNom: "",

    objet: "",

    montant: "",

    statut: "En attente",

    dateCreation: getTodayDate(),

    dateRelance: "",
  });

  // ==============================
  // GESTION DES CHAMPS
  // ==============================

  function handleChange(event) {
    const { name, value } = event.target;

    setDevis((previousData) => ({
      ...previousData,

      [name]: value,
    }));
  }

  // ==============================
  // SELECTION CLIENT EXISTANT
  // ==============================

  function handleClientChange(event) {
    const clientId = event.target.value;

    const clientSelectionne = clients.find(
      (client) => client.id === Number(clientId),
    );

    setDevis((previousData) => ({
      ...previousData,

      clientId,

      nomClient: clientSelectionne ? clientSelectionne.entreprise : "",

      nouveauClientNom: "",
    }));
  }

  // ==============================
  // ENVOI FORMULAIRE
  // ==============================

  function handleSubmit(event) {
    event.preventDefault();

    const nouveauDevis = {
      ...devis,

      id: Date.now(),

      clientId: devis.clientId ? Number(devis.clientId) : null,
    };

    onAddDevis(nouveauDevis);

    // RESET

    setDevis({
      clientId: "",

      nomClient: "",

      nouveauClientNom: "",

      objet: "",

      montant: "",

      statut: "En attente",

      dateCreation: getTodayDate(),

      dateRelance: "",
    });
  }

  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nouveau devis</h2>

      {/* CLIENT */}

      <label>
        Client existant :
        <select
          name="clientId"
          value={devis.clientId}
          onChange={handleClientChange}
        >
          <option value="">Aucun client</option>

          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.entreprise}
            </option>
          ))}
        </select>
      </label>

      <label>
        Nouveau client :
        <input
          name="nouveauClientNom"
          type="text"
          value={devis.nouveauClientNom}
          disabled={devis.clientId !== ""}
          onChange={(e) =>
            setDevis((previousData) => ({
              ...previousData,

              nouveauClientNom: e.target.value,

              nomClient: e.target.value,

              clientId: "",
            }))
          }
        />
      </label>

      {/* INFORMATIONS DEVIS */}

      <label>
        Objet :
        <input
          name="objet"
          type="text"
          value={devis.objet}
          onChange={handleChange}
        />
      </label>

      <label>
        Montant :
        <input
          name="montant"
          type="number"
          value={devis.montant}
          onChange={handleChange}
        />
      </label>

      <label>
        Date de création :
        <input
          name="dateCreation"
          type="date"
          value={devis.dateCreation}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Créer le devis</button>
    </form>
  );
}

export default DevisForm;
