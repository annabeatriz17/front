import styles from "../styles/Home.module.css";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Main from "../componentes/main";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            <Main />

            <Footer />
        </div>

    );
}