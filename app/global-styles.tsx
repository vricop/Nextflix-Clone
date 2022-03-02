import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  font: 100%/1.5 var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, picture, video, canvas {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

/* Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* Create a root stacking context */
#root, #__next {
  isolation: isolate;
}

@font-face {
  font-family: 'Netflix Sans';
  src: url('/fonts/NetflixSans_W_Rg.woff2') format('woff2'),
    url('/fonts/NetflixSans_W_Rg.woff') format('woff');
  font-weight: 400;
  font-display: optional;
}

@font-face {
  font-family: 'Netflix Sans';
  src: url('/fonts/NetflixSans_W_Md.woff2') format('woff2'),
    url('/fonts/NetflixSans_W_Md.woff') format('woff');
  font-weight: 700;
  font-display: optional;
}


:root {
  /* Colors */
  --color-white: #fff;
  --color-black: #000;
  /* Gray scale (from tailwind) */
  --color-gray-50:#fafafa;
  --color-gray-100:#f5f5f5;
  --color-gray-200:#e5e5e5;
  --color-gray-300:#d4d4d4;
  --color-gray-400:#a3a3a3;
  --color-gray-500:#737373;
  --color-gray-600:#525252;
  --color-gray-700:#404040;
  --color-gray-800:#262626;
  --color-gray-900:#171717;
  --color-brand: #e50914;
  --color-brand-alt-dark: #b9090b;
  --color-brand-alt-light: #f40612;
  --color-tomato: #ff091b; // Age rating
  --color-orange: #ffa00a;
  /* Spacing (from tailwind) */
  --size-px: 1px;
  --size-0-5: 0.125rem; // 2px 
  --size-1: 0.25rem; // 4px 
  --size-1-5: 0.375rem; // 6px 
  --size-2: 0.5rem; // 8px
  --size-2-5: 0.625rem; // 10px 
  --size-3: 0.75rem; // 12px 
  --size-3-5: 0.875rem; // 14px 
  --size-4: 1rem; // 16px 
  --size-5: 1.25rem; // 20px 
  --size-6: 1.5rem; // 24px 
  --size-7: 1.75rem; // 28px 
  --size-8: 2rem; // 32px 
  --size-9: 2.25rem; // 36px 
  --size-10: 2.5rem; // 40px 
  --size-11: 2.75rem; // 44px 
  --size-12: 3rem; // 48px 
  --size-14: 3.5rem; // 56px 
  --size-16: 4rem; // 64px 
  --size-20: 5rem; // 80px 
  --size-24: 6rem; // 96px 
  --size-28: 7rem; // 112px 
  --size-32: 8rem; // 128px 
  --size-36: 9rem; // 144px 
  --size-40: 10rem; // 160px 
  --size-44: 11rem; // 176px 
  --size-48: 12rem; // 192px 
  --size-52: 13rem; // 208px 
  --size-56: 14rem; // 224px 
  --size-60: 15rem; // 240px 
  --size-64: 16rem; // 256px 
  --size-72: 18rem; // 288px 
  --size-80: 20rem; // 320px 
  --size-96: 24rem; // 384px
  /* Font stack (from open props) */
  --font-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
  --font-serif: ui-serif, serif;
  --font-mono: Dank Mono, Operator Mono, Inconsolata, Fira Mono, ui-monospace, SF Mono, Monaco, Droid Sans Mono, Source Code Pro, monospace;
  --font-netflix-sans: 'Netflix Sans', var(--font-sans);
  /* Text scale (from tailwind) */
  --text-xs: 0.75rem; /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem; /* 16px */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem; /* 20px */
  --text-2xl: 1.5rem; /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem; /* 36px */
  --text-5xl: 3rem; /* 48px */
  --text-6xl: 3.75rem; /* 60px */
  --text-7xl: 4.5rem; /* 72px */
  --text-8xl: 6rem; /* 96px */
  --text-9xl: 8rem; /* 128px */
  /* Leading (from tailwind) */
  --leading-2: 0.5rem; /* 8px */
  --leading-3: 0.75rem; /* 12px */
  --leading-4: 1rem; /* 16px */
  --leading-5: 1.25rem; /* 20px */
  --leading-6: 1.5rem; /* 24px */
  --leading-7: 1.75rem; /* 28px */
  --leading-8: 2rem; /* 32px */
  --leading-9: 2.25rem; /* 36px */
  --leading-10: 2.5rem; /* 40px */
  --leading-17: 4.25rem; /* 68px */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  /* Tracking (from tailwind) */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
  --font-thin: 100;
  --font-extralight: 200;
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  --font-black: 900;
}
`
