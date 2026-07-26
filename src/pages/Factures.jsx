import FacturesTable from "../components/FacturesTable";

// ==============================
// PAGE : GESTION DES FACTURES
// ==============================

function Factures({ factures, onUpdateFacture, onDeleteFacture }) {
  // ==============================
  // CALCULS STATISTIQUES
  // ==============================

  const totalFactures = factures.reduce(
    (total, facture) => total + Number(facture.montant),
    0,
  );

  const totalFacturesPayees = factures.reduce(
    (total, facture) =>
      facture.statut === "Payée" ? total + Number(facture.montant) : total,
    0,
  );
  // ==============================
  // AFFICHAGE
  // ==============================

  return (
    <div>
      {/* ==============================
          TITRE PAGE
      ============================== */}

      <h1>Factures</h1>

      {/* ==============================
          STATISTIQUES
      ============================== */}

      <p>Nombre de factures : {factures.length}</p>
      <p>Total des factures : {totalFactures} €</p>
      <p>Total des factures payées : {totalFacturesPayees} €</p>

      {/* ==============================
          LISTE DES FACTURES
      ============================== */}

      <FacturesTable
        factures={factures}
        onUpdateFacture={onUpdateFacture}
        onDeleteFacture={onDeleteFacture}
      />
    </div>
  );
}

export default Factures;
