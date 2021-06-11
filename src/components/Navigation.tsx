import styles from "../styles/components/navigation.module.scss";
import Router from 'next/router';
import { useLanyard } from "use-lanyard";

export default function Navigation(props) {
    const { data: user } = useLanyard("506899274748133376");

    return (
        <>
            <div className={styles.base}>
                {props.user && (
                    <div className={styles.user}>
                        <img src={`https://cdn.discordapp.com/avatars/${user?.discord_user.id}/${user?.discord_user.avatar}.png`} />
                        <div className={styles.statusIcon} style={{
                            background: user?.discord_status == "online"
                                ? "#2ed128"
                                : user?.discord_status == "dnd"
                                    ? "#d12828"
                                    : user?.discord_status == "idle"
                                        ? "#fc6b03"
                                        : "#888989"
                        }} />
                        <span>{user?.discord_user.username}</span>
                    </div>
                )}
                <a href="/contact" className={styles.navItem} onClick={handleRoute}>Contact</a>
                <a href="/projects" className={styles.navItem} onClick={handleRoute}>Projects</a>
                <a href="/home" className={styles.navItem} onClick={handleRoute}>Home</a>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerRight}>
                    <a href="https://twitter.com/CallumDEV_" target="_blank" className="fab fa-twitter" />
                    <a href="https://instagram.com/callum.o.kane" target="_blank" className="fab fa-instagram" />
                    <a href="https://github.com/callumok2004" target="_blank" className="fab fa-github" />
                </div>
                <div className={styles.footerLeft}>
                    Designed & Developed by Callum and <b><a target="_blank" href="https://itspolar.dev">itspolar</a></b>
                </div>
            </div>
        </>
    )
}

function handleRoute(e) {
    e.preventDefault();
    Router.push(e.target.href, undefined, { shallow: true })
}