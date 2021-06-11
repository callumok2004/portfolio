import moment from 'moment';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useLanyard } from 'use-lanyard';

import Navigation from '../components/Navigation';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
    const { data: user } = useLanyard("506899274748133376"),
        [time, setTime] = useState(null);

    function getStatus() {
        return <span style={{
            color:
                user?.discord_status
                    .replace("online", "#1cba16")
                    .replace("dnd", "#d12828")
                    .replace("idle", "#fc6b03")
                    .replace("offline", "#888989"),
            fontWeight: 600
        }}>
            {
                user?.discord_status
                    .replace("online", "Online")
                    .replace("dnd", "Do Not Disturb")
                    .replace("idle", "Idle")
                    .replace("offline", "Offline")
            }
        </span>
    }
    useEffect(() => {
        const interval = setInterval(() => setTime(moment().format("dddd h:mm:ss A")), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Navigation user={false} />
            <div className="content">
                <h2>Hey, I'm <span className={styles.name}>Callum</span></h2>
                <h3 className={styles.typing}>I'm a full stack developer with experience in NodeJS, TypeScript and NextJS!</h3>
                <div className={styles.margin}>
                    <p className={styles.status}>
                        <span><i className="fal fa-power-off fa-fw" /> Currently {user && getStatus()}</span><br />
                        {user?.discord_status !== "offline" && (
                            <>
                                {user?.activities.filter(x => x.type == 0)[0] && <><span><i className="fal fa-gamepad-alt fa-fw" /> {user?.activities.filter(x => x.type == 0)[0]?.name || "Loading..."}</span><br /></>}
                                {user?.activities.filter(x => x.type == 4)[0] && <><span><i className="fal fa-sticky-note fa-fw" /> {user?.activities.filter(x => x.type == 4)[0]?.state || "Loading..."}</span><br /></>}
                            </>
                        )}
                        <span><i className="fal fa-clock fa-fw" /> {time || "Couldn't get time."}</span>
                    </p>
                </div>
            </div>
        </>
    )
}