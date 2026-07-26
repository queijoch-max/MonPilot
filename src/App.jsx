import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// ==============================
// IMPORTS PAGES
// ==============================

import Layout from "./layouts/Layout";

import Dashboard from "./pages/Dashboard";

import Clients from "./pages/Clients";
import ClientForm from "./pages/ClientForm";
import ClientDetails from "./pages/ClientDetails";

import Devis from "./pages/Devis";
import DevisDetails from "./pages/DevisDetails";

import RendezVous from "./pages/RendezVous";
import RendezVousDetails from "./pages/RendezVousDetails";
import Factures from "./pages/Factures";

// ==============================
// IMPORTS DATA
// ==============================

import clientsData from "./data/clients";
import devisData from "./data/devis";
import rendezVousData from "./data/rendezvous";
import facturesData from "./data/factures";

// ==============================
// APPLICATION
// ==============================

function App() {
  // ==============================
  // STATES
  // ==============================

  // -------- CLIENTS --------

  const [clients, setClients] = useState(() => {
    const clientsSauvegardes = localStorage.getItem("clients");

    return clientsSauvegardes ? JSON.parse(clientsSauvegardes) : clientsData;
  });

  // -------- DEVIS --------

  const [devis, setDevis] = useState(() => {
    const devisSauvegardes = localStorage.getItem("devis");

    return devisSauvegardes ? JSON.parse(devisSauvegardes) : devisData;
  });

  // -------- RENDEZ-VOUS --------

  const [rendezVous, setRendezVous] = useState(() => {
    const rendezVousSauvegardes = localStorage.getItem("rendezVous");

    return rendezVousSauvegardes
      ? JSON.parse(rendezVousSauvegardes)
      : rendezVousData;
  });
  // -------- FACTURES --------

  const [factures, setFactures] = useState(() => {
    const facturesSauvegardes = localStorage.getItem("factures");

    return facturesSauvegardes ? JSON.parse(facturesSauvegardes) : facturesData;
  });
  // ==============================
  // FONCTIONS CLIENTS
  // ==============================

  function handleAddClient(newClient) {
    const clientAvecId = {
      ...newClient,
      id: Date.now(),
    };

    setClients([...clients, clientAvecId]);
  }

  function handleUpdateClient(id, clientModifie) {
    const clientsModifies = clients.map((client) => {
      if (client.id === id) {
        return clientModifie;
      }

      return client;
    });

    setClients(clientsModifies);
  }

  function handleDeleteClient(id) {
    const clientsFiltres = clients.filter((client) => client.id !== id);

    setClients(clientsFiltres);
  }

  // ==============================
  // FONCTIONS DEVIS
  // ==============================

  function handleAddDevis(nouveauDevis) {
    setDevis([...devis, nouveauDevis]);
  }

  function handleUpdateDevis(id, modifications) {
    const devisModifies = devis.map((devis) => {
      if (devis.id === id) {
        return {
          ...devis,
          ...modifications,
        };
      }

      return devis;
    });

    setDevis(devisModifies);
  }

  function handleDeleteDevis(id) {
    const devisFiltres = devis.filter((devis) => devis.id !== id);

    setDevis(devisFiltres);
  }

  // ==============================
  // FONCTIONS RENDEZ-VOUS
  // ==============================

  function handleAddRendezVous(nouveauRendezVous) {
    setRendezVous([...rendezVous, nouveauRendezVous]);
  }

  function handleUpdateRendezVous(id, modifications) {
    const rendezVousModifies = rendezVous.map((rdv) => {
      if (rdv.id === id) {
        return {
          ...rdv,
          ...modifications,
        };
      }

      return rdv;
    });

    setRendezVous(rendezVousModifies);
  }

  function handleDeleteRendezVous(id) {
    const rendezVousFiltres = rendezVous.filter((rdv) => rdv.id !== id);

    setRendezVous(rendezVousFiltres);
  }

  // ==============================
  // FONCTIONS FACTURES
  // ==============================

  function handleDeleteFacture(id) {
    const facturesFiltrees = factures.filter((facture) => facture.id !== id);

    setFactures(facturesFiltrees);
  }

  function handleUpdateFacture(id, modifications) {
    const facturesModifiees = factures.map((facture) => {
      if (facture.id === id) {
        return {
          ...facture,
          ...modifications,
        };
      }

      return facture;
    });

    setFactures(facturesModifiees);
  }

  function handleCreateFactureDepuisDevis(devis) {
    const nouvelleFacture = {
      id: Date.now(),

      clientId: devis.clientId,

      devisId: devis.id,

      nomClient: devis.nomClient,

      objet: devis.objet,

      montant: devis.montant,

      dateDevis: devis.dateCreation,

      dateCreation: new Date().toISOString().split("T")[0],

      statut: "Envoyée",
    };

    setFactures([...factures, nouvelleFacture]);
  }

  // ==============================
  // SAUVEGARDE LOCALSTORAGE
  // ==============================

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem("devis", JSON.stringify(devis));
  }, [devis]);

  useEffect(() => {
    localStorage.setItem("rendezVous", JSON.stringify(rendezVous));
  }, [rendezVous]);

  useEffect(() => {
    localStorage.setItem("factures", JSON.stringify(factures));
  }, [factures]);
  // ==============================
  // ROUTES
  // ==============================

  return (
    <BrowserRouter>
      <Routes>
        {/* ==============================
          LAYOUT PRINCIPAL
      ============================== */}

        <Route path="/" element={<Layout />}>
          {/* ==============================
            DASHBOARD
        ============================== */}

          <Route
            index
            element={
              <Dashboard
                clients={clients}
                devis={devis}
                factures={factures}
                rendezVous={rendezVous}
              />
            }
          />

          {/* ==============================
            CLIENTS
        ============================== */}

          <Route
            path="clients"
            element={
              <Clients
                clients={clients}
                onAddClient={handleAddClient}
                onDeleteClient={handleDeleteClient}
              />
            }
          />

          <Route path="clients/nouveau" element={<ClientForm />} />

          <Route
            path="clients/:id"
            element={
              <ClientDetails
                clients={clients}
                devis={devis}
                factures={factures}
                rendezVous={rendezVous}
                onDeleteClient={handleDeleteClient}
                onUpdateClient={handleUpdateClient}
              />
            }
          />

          {/* ==============================
            DEVIS
        ============================== */}

          <Route
            path="devis"
            element={
              <Devis
                devis={devis}
                clients={clients}
                onAddDevis={handleAddDevis}
                onUpdateDevis={handleUpdateDevis}
                onDeleteDevis={handleDeleteDevis}
                handleCreateFactureDepuisDevis={handleCreateFactureDepuisDevis}
              />
            }
          />

          {/* ==============================
            FACTURES
        ============================== */}

          <Route
            path="factures"
            element={
              <Factures
                factures={factures}
                clients={clients}
                devis={devis}
                onUpdateFacture={handleUpdateFacture}
                onDeleteFacture={handleDeleteFacture}
              />
            }
          />

          {/* ==============================
            RENDEZ-VOUS
        ============================== */}

          <Route
            path="rendez-vous"
            element={
              <RendezVous
                rendezVous={rendezVous}
                clients={clients}
                onAddClient={handleAddClient}
                onAddRendezVous={handleAddRendezVous}
                onUpdateRendezVous={handleUpdateRendezVous}
                onDeleteRendezVous={handleDeleteRendezVous}
              />
            }
          />
        </Route>

        {/* ==============================
          DETAIL DEVIS
      ============================== */}

        <Route
          path="devis/:id"
          element={
            <DevisDetails devis={devis} onUpdateDevis={handleUpdateDevis} />
          }
        />

        {/* ==============================
          DETAIL RENDEZ-VOUS
      ============================== */}

        <Route
          path="rendez-vous/:id"
          element={
            <RendezVousDetails
              rendezVous={rendezVous}
              onUpdateRendezVous={handleUpdateRendezVous}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
