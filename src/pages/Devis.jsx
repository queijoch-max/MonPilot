import DevisForm from "../components/DevisForm";
import DevisTable from "../components/DevisTable";

// ==============================
// PAGE : GESTION DES DEVIS
// ==============================

function Devis({
  devis,
  clients,
  onAddDevis,
  onUpdateDevis,
  onDeleteDevis,
  handleCreateFactureDepuisDevis,
}) {
  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <div>
      {/* ==============================
          TITRE PAGE
      ============================== */}

      <h1>Devis</h1>

      {/* ==============================
          STATISTIQUES
      ============================== */}

      <p>Nombre de devis : {devis.length}</p>

      {/* ==============================
          CREATION DEVIS
      ============================== */}

      <DevisForm clients={clients} onAddDevis={onAddDevis} />

      {/* ==============================
          LISTE DES DEVIS
      ============================== */}

      <DevisTable
        devis={devis}
        onUpdateDevis={onUpdateDevis}
        onDeleteDevis={onDeleteDevis}
        handleCreateFactureDepuisDevis={handleCreateFactureDepuisDevis}
      />
    </div>
  );
}

export default Devis;
