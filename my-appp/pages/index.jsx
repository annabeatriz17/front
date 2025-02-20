import styles from "../styles/Home.module.css";
import header from "../componentes/Header";

export default function Home() {
    return (
        <div className={styles.container}>
            <header/>

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
            <footer/>
        </div>

    );
}