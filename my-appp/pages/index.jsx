import styles from "../styles/Home.module.css";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header/>

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

            <Header/>
        </div>

    );
}