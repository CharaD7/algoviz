import Image from 'next/image';
import Link from 'next/link';

import styles from '~styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <Link href="/learn" className={styles.card}>
                        <h2>LearnPage &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </Link>

                    <Link href="/visuals" className={styles.card}>
                        <h2>Visuals Page &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </Link>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    );
}