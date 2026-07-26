import { Link } from "react-router-dom";
import RendezVousForm from "../components/RendezVousForm";

// ==============================
// PAGE : GESTION DES RENDEZ-VOUS
// ==============================

function RendezVous({
  rendezVous,
  clients,
  onAddClient,
  onAddRendezVous,
  onDeleteRendezVous,
}) {
  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <div>
      {/* ==============================
          TITRE PAGE
      ============================== */}

      <h1>Rendez-vous</h1>

      {/* ==============================
          CREATION RENDEZ-VOUS
      ============================== */}

      <RendezVousForm
        clients={clients}
        onAddClient={onAddClient}
        onAddRendezVous={onAddRendezVous}
      />

      {/* ==============================
          LISTE RENDEZ-VOUS
      ============================== */}

      <h2>Rendez-vous prévus</h2>

      {rendezVous.length === 0 ? (
        <p>Aucun rendez-vous prévu</p>
      ) : (
        <ul>
          {rendezVous.map((rdv) => (
            <li key={rdv.id}>
              {/* CLIENT */}
              <strong>{rdv.nomClient}</strong>
              <br />
              {/* DATE */}
              Date : {new Date(rdv.dateDebut).toLocaleString("fr-FR")}
              <br />
              {/* OBJET */}
              Objet : {rdv.objet}
              <br />
              {/* NOTE */}
              Note : {rdv.note || "Aucune note"}
              <br />
              <br />
              {/* ACTIONS */}
              <Link to={`/rendez-vous/${rdv.id}`}>Modifier</Link>{" "}
              <button onClick={() => onDeleteRendezVous(rdv.id)}>
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RendezVous;
