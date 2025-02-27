import styles from "../styles/Main.module.css";

export default function main() {
    return (
        <div className={styles.quadrado}>
            <div className={styles.column}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>

            <div className={styles.retangulo}>
                <img src="/mequi.png" alt="foto" />
            </div>
        </div>
    );
}