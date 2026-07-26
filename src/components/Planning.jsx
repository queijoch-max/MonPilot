import { useEffect, useState } from "react";
import styles from "./Planning.module.css";

function Planning() {
  const today = new Date();

  const [date, setDate] = useState(today);

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("planningNotes");

    return savedNotes ? JSON.parse(savedNotes) : {};
  });
  useEffect(() => {
    localStorage.setItem("planningNotes", JSON.stringify(notes));
  }, [notes]);
  const mois = date.toLocaleString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  const changerMois = (direction) => {
    const nouvelleDate = new Date(date);

    nouvelleDate.setMonth(nouvelleDate.getMonth() + direction);

    setDate(nouvelleDate);
  };

  const ajouterNote = (jour) => {
    const note = prompt("Ajouter une note :");

    if (!note) return;

    const cle = `${date.getFullYear()}-${date.getMonth()}-${jour}`;

    setNotes({
      ...notes,
      [cle]: note,
    });
  };

  const jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const nombreJours = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <button className={styles.navButton} onClick={() => changerMois(-1)}>
          ←
        </button>

        <h2>Planning</h2>

        <button className={styles.navButton} onClick={() => changerMois(1)}>
          →
        </button>
      </div>

      <h3>{mois}</h3>

      <div className={styles.calendar}>
        {jours.map((jour) => (
          <div key={jour} className={styles.dayName}>
            {jour}
          </div>
        ))}

        {Array.from({ length: nombreJours }).map((_, index) => {
          const jour = index + 1;

          const cle = `${date.getFullYear()}-${date.getMonth()}-${jour}`;

          return (
            <div
              key={jour}
              className={styles.day}
              onClick={() => ajouterNote(jour)}
            >
              <span>{jour}</span>

              {notes[cle] && <p>📌 {notes[cle]}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Planning;
