// Extends window with particlesJS from CDN
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    particlesJS: (id: string, config: Record<string, any>) => void;
  }
}

export {};
