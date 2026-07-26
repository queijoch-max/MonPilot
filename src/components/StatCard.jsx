import styles from "./StatCard.module.css";

function StatCard({ title, value, type }) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <h3>{title}</h3>

      <p>{value}</p>
    </div>
  );
}

export default StatCard;
