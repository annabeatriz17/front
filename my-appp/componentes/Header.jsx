import styles from "../styles/Header.module.css";

export default function header() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Méqui</h1>
            </header>
        </div>

    );
}