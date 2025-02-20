import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Méqui</h1>
            </header>
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
            <footer className={styles.footer}>
            </footer>
        </div>

    );
}