import { useParams } from "react-router-dom";

import ClientEditForm from "../components/ClientEditForm";

// ==============================
// FORMAT DATE
// ==============================

function formatDate(date) {
  return new Date(date).toLocaleDateString("fr-FR");
}

// ==============================
// COMPOSANT : FICHE CLIENT
// ==============================

function ClientDetails({
  clients,
  devis,
  factures,
  rendezVous,
  onDeleteClient,
  onUpdateClient,
}) {
  // ==============================
  // RECUPERATION CLIENT
  // ==============================

  const { id } = useParams();

  const clientTrouve = clients.find((client) => client.id === Number(id));

  const devisClient = devis.filter((devis) => devis.clientId === Number(id));

  const facturesClient = factures.filter(
    (facture) => facture.clientId === Number(id),
  );

  const rendezVousClient = rendezVous.filter(
    (rdv) => rdv.clientId === Number(id),
  );
  // ==============================
  // CLIENT INTROUVABLE
  // ==============================

  if (!clientTrouve) {
    return <p>Client introuvable</p>;
  }

  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <div>
      {/* ==============================
          INFORMATIONS CLIENT
      ============================== */}
      <h1>Fiche client</h1>
      <h2>{clientTrouve.entreprise}</h2>
      <p>Contact : {clientTrouve.contact}</p>
      <p>Ville : {clientTrouve.ville}</p>
      {/* ==============================
          DEVIS ASSOCIES
      ============================== */}
      <h3>Devis du client</h3>
      {devisClient.length === 0 ? (
        <p>Aucun devis pour ce client</p>
      ) : (
        <ul>
          {devisClient.map((devis) => (
            <li key={devis.id}>
              <strong>{devis.objet}</strong>
              {" - "}
              {devis.montant} €
              <br />
              Statut : {devis.statut}
              {devis.dateRelance && (
                <>
                  <br />
                  Relance prévue le : {formatDate(devis.dateRelance)}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      <h2>Factures</h2>
      {facturesClient.length === 0 ? (
        <p>Aucune facture pour ce client.</p>
      ) : (
        facturesClient.map((facture) => (
          <div key={facture.id}>
            <p>{facture.objet}</p>
            <p>{facture.montant} €</p>
            <p>Statut : {facture.statut}</p>
          </div>
        ))
      )}
      {/* ==============================
          RENDEZ-VOUS ASSOCIES
      ============================== */}
      <h3>Rendez-vous du client</h3>
      {rendezVousClient.length === 0 ? (
        <p>Aucun rendez-vous prévu pour ce client</p>
      ) : (
        <ul>
          {rendezVousClient.map((rdv) => (
            <li key={rdv.id}>
              <strong>{rdv.objet}</strong>
              <br />
              Date : {new Date(rdv.dateDebut).toLocaleString("fr-FR")}
              {rdv.note && (
                <>
                  <br />
                  Note : {rdv.note}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      /* ============================== MODIFICATION CLIENT
      ============================== */
      <ClientEditForm client={clientTrouve} onUpdateClient={onUpdateClient} />
      {/* ==============================
          SUPPRESSION CLIENT
      ============================== */}
      <button onClick={() => onDeleteClient(clientTrouve.id)}>
        Supprimer le client
      </button>
    </div>
  );
}

export default ClientDetails;
