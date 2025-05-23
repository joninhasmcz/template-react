
interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error';
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}