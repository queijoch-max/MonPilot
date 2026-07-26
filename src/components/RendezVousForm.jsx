import { useState } from "react";

import styles from "./RendezVousForm.module.css";

// ==============================
// DATE PAR DEFAUT
// ==============================

function getTodayDateTime() {
  const maintenant = new Date();

  const annee = maintenant.getFullYear();
  const mois = String(maintenant.getMonth() + 1).padStart(2, "0");
  const jour = String(maintenant.getDate()).padStart(2, "0");

  const heure = String(maintenant.getHours()).padStart(2, "0");
  const minutes = String(maintenant.getMinutes()).padStart(2, "0");

  return `${annee}-${mois}-${jour}T${heure}:${minutes}`;
}

// ==============================
// FORMULAIRE RENDEZ-VOUS
// ==============================

function RendezVousForm({ clients, onAddClient, onAddRendezVous }) {
  // ==============================
  // TYPE DE CONTACT
  // ==============================

  const [nouveauClient, setNouveauClient] = useState(false);

  // ==============================
  // DONNEES RENDEZ-VOUS
  // ==============================

  const [rendezVous, setRendezVous] = useState({
    clientId: "",
    nomClient: "",
    dateDebut: getTodayDateTime(),
    objet: "",
    note: "",
  });

  // ==============================
  // DONNEES NOUVEAU CLIENT
  // ==============================

  const [clientForm, setClientForm] = useState({
    entreprise: "",
    contact: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
  });

  // ==============================
  // CHOIX CLIENT EXISTANT
  // ==============================

  function handleClientChange(event) {
    const clientId = event.target.value;

    const clientChoisi = clients.find(
      (client) => client.id === Number(clientId),
    );

    setRendezVous({
      ...rendezVous,

      clientId,

      nomClient: clientChoisi ? clientChoisi.entreprise : "",
    });
  }

  // ==============================
  // FORMULAIRE NOUVEAU CLIENT
  // ==============================

  function handleClientFormChange(event) {
    const { name, value } = event.target;

    setClientForm({
      ...clientForm,

      [name]: value,
    });
  }

  // ==============================
  // CHANGEMENT INFORMATIONS RDV
  // ==============================

  function handleRendezVousChange(event) {
    const { name, value } = event.target;

    setRendezVous({
      ...rendezVous,

      [name]: value,
    });
  }

  // ==============================
  // CREATION
  // ==============================

  function handleSubmit(event) {
    event.preventDefault();

    let clientId = rendezVous.clientId;
    let nomClient = rendezVous.nomClient;

    // ------------------------------
    // CREATION NOUVEAU CLIENT
    // ------------------------------

    if (nouveauClient) {
      const nouveauClientCree = {
        ...clientForm,

        id: Date.now(),
      };

      onAddClient(nouveauClientCree);

      clientId = nouveauClientCree.id;

      nomClient = nouveauClientCree.entreprise;
    }

    // ------------------------------
    // CREATION RENDEZ-VOUS
    // ------------------------------

    const nouveauRendezVous = {
      ...rendezVous,

      id: Date.now(),

      clientId: clientId ? Number(clientId) : null,

      nomClient,
    };

    onAddRendezVous(nouveauRendezVous);

    // ------------------------------
    // RESET
    // ------------------------------

    setRendezVous({
      clientId: "",
      nomClient: "",
      dateDebut: getTodayDateTime(),
      objet: "",
      note: "",
    });

    setClientForm({
      entreprise: "",
      contact: "",
      email: "",
      telephone: "",
      adresse: "",
      ville: "",
    });

    setNouveauClient(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nouveau rendez-vous</h2>

      {/* ==============================
          CHOIX CONTACT
      ============================== */}

      <div className={styles.radioGroup}>
        <label className={styles.radioOption}>
          <input
            type="radio"
            name="clientType"
            checked={!nouveauClient}
            onChange={() => setNouveauClient(false)}
          />
          Client existant
        </label>

        <label className={styles.radioOption}>
          <input
            type="radio"
            name="clientType"
            checked={nouveauClient}
            onChange={() => setNouveauClient(true)}
          />
          Nouveau client
        </label>
      </div>
      {/* ==============================
          CLIENT EXISTANT
      ============================== */}

      {!nouveauClient ? (
        <label>
          Client :
          <select value={rendezVous.clientId} onChange={handleClientChange}>
            <option value="">Aucun client</option>

            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.entreprise}
              </option>
            ))}
          </select>
        </label>
      ) : (
        /* ==============================
           NOUVEAU CLIENT
        ============================== */

        <div>
          <h3>Créer un client</h3>

          {Object.keys(clientForm).map((champ) => (
            <input
              key={champ}
              name={champ}
              placeholder={champ}
              value={clientForm[champ]}
              onChange={handleClientFormChange}
            />
          ))}
        </div>
      )}

      {/* ==============================
          INFORMATIONS RENDEZ-VOUS
      ============================== */}

      <label>
        Date et heure :
        <input
          type="datetime-local"
          name="dateDebut"
          value={rendezVous.dateDebut}
          onChange={handleRendezVousChange}
        />
      </label>

      <label>
        Objet :
        <input
          type="text"
          name="objet"
          value={rendezVous.objet}
          onChange={handleRendezVousChange}
        />
      </label>

      <label>
        Note :
        <textarea
          name="note"
          value={rendezVous.note}
          onChange={handleRendezVousChange}
        />
      </label>

      <button type="submit">Créer le rendez-vous</button>
    </form>
  );
}

export default RendezVousForm;
