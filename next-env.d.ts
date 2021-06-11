/// <reference types="next" />
/// <reference types="next/types/global" />

import * as React from 'react'
declare global {
    namespace JSX {
        interface IntrinsicElements {
            center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

declare module "react-audio-spectrum2" {
    interface AudioSpectrumProps {
        [x: string]: any;
    }
}