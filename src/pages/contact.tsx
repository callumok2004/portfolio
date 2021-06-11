import Head from 'next/head';

import Navigation from '../components/Navigation';
import styles from '../styles/pages/Contact.module.scss';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Navigation user={true} />

            <div className="content">
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionItem}>
                        <a id="full" target="_blank">Callum<span>#6052</span></a>
                    </div>
                    <div className={styles.sectionItem}>
                        <a id="full">callum_okane</a>
                    </div>
                    <div className={styles.sectionItem}>
                        <a id="full" target="_blank" href="https://instagram.com/callum.o.kane">callum.o.kane</a>
                    </div>
                </div>
            </div>
        </>
    )
}