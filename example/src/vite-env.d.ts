/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TICKUP_SHOWCASE_LICENSE_KEY?: string;
    readonly VITE_TICKUP_SHOWCASE_USER_ID?: string;
}

declare module '*.css';

declare module '*.png' {
    const src: string;
    export default src;
}
