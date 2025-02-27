import styles from "../styles/Header.module.css";

export default function header({ title }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
            </header>
        </div>

    );
}