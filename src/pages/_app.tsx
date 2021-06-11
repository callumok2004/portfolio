import '../styles/globals.scss';

import NextNprogress from 'nextjs-progressbar';

export default function CallumDEV({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                color="#385db5"
                startPosition={0.2}
                stopDelayMs={100}
            />
            <Component {...pageProps} />
        </>
    )
}