import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Navigation user={true} />

            <div className="content">
                Coming soon!
            </div>
        </>
    )
}