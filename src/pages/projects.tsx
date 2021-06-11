import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <Navigation user={true} />

            <div className="content">
                Coming soon!
            </div>
        </>
    )
}