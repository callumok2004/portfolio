import Head from 'next/head';

import Navigation from '../components/Navigation';
import styles from '../styles/pages/Projects.module.scss';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <Navigation user={true} />

            <div className="content">
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionItem}>
                        <img src="fyre.png" />
                        <a target="_blank" href="https://fyredev.xyz/" id="full">Fyre <span>(2018 - Present)</span></a>
                        <span id="position">Founder & Developer</span>
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="premid.png" />
                        <a target="_blank" href="https://premid.app" id="full">PreMiD <span>(2019 - 2021)</span></a>
                        <span id="position">Developer & Support</span>
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="bounce.png" />
                        <a target="_blank" href="https://itsbounce.net" id="full">Bounce Radio <span>(2019 - Present)</span></a>
                        <span id="position" style={{marginTop: "8px"}}>Lead Developer & System<br/>Administrator</span>
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="repeat.png" />
                        <a target="_blank" href="https://repeat.pw" id="full">Repeat Radio <span>(2020 (5 Months))</span></a>
                        <span id="position">Discord Bot Developer</span>
                    </div>
                </div>
            </div>
        </>
    )
}