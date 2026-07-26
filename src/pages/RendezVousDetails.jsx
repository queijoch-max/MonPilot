import { useParams } from "react-router-dom";
import RendezVousEditForm from "../components/RendezVousEditForm";

function RendezVousDetails({ rendezVous, onUpdateRendezVous }) {
  const { id } = useParams();

  const rendezVousSelectionne = rendezVous.find((rdv) => rdv.id === Number(id));

  if (!rendezVousSelectionne) {
    return <p>Rendez-vous introuvable</p>;
  }

  return (
    <div>
      <h1>Modifier le rendez-vous</h1>

      <h2>{rendezVousSelectionne.nomClient}</h2>

      <RendezVousEditForm
        rendezVous={rendezVousSelectionne}
        onUpdateRendezVous={onUpdateRendezVous}
      />
    </div>
  );
}

export default RendezVousDetails;
