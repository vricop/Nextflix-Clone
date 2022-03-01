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
  --color-brand-alt: #b9090b;
  --color-tomato: #ff091b; // Age rating
  /* Spacing (from tailwind) */
  --spacing-px: 1px;
  --spacing-0-5: 0.125rem; // 2px 
  --spacing-1: 0.25rem; // 4px 
  --spacing-1-5: 0.375rem; // 6px 
  --spacing-2: 0.5rem; // 8px
  --spacing-2-5: 0.625rem; // 10px 
  --spacing-3: 0.75rem; // 12px 
  --spacing-3-5: 0.875rem; // 14px 
  --spacing-4: 1rem; // 16px 
  --spacing-5: 1.25rem; // 20px 
  --spacing-6: 1.5rem; // 24px 
  --spacing-7: 1.75rem; // 28px 
  --spacing-8: 2rem; // 32px 
  --spacing-9: 2.25rem; // 36px 
  --spacing-10: 2.5rem; // 40px 
  --spacing-11: 2.75rem; // 44px 
  --spacing-12: 3rem; // 48px 
  --spacing-14: 3.5rem; // 56px 
  --spacing-16: 4rem; // 64px 
  --spacing-20: 5rem; // 80px 
  --spacing-24: 6rem; // 96px 
  --spacing-28: 7rem; // 112px 
  --spacing-32: 8rem; // 128px 
  --spacing-36: 9rem; // 144px 
  --spacing-40: 10rem; // 160px 
  --spacing-44: 11rem; // 176px 
  --spacing-48: 12rem; // 192px 
  --spacing-52: 13rem; // 208px 
  --spacing-56: 14rem; // 224px 
  --spacing-60: 15rem; // 240px 
  --spacing-64: 16rem; // 256px 
  --spacing-72: 18rem; // 288px 
  --spacing-80: 20rem; // 320px 
  --spacing-96: 24rem; // 384px
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
  --leading-3: 0.75rem; /* 12px */
  --leading-4: 1rem; /* 16px */
  --leading-5: 1.25rem; /* 20px */
  --leading-6: 1.5rem; /* 24px */
  --leading-7: 1.75rem; /* 28px */
  --leading-8: 2rem; /* 32px */
  --leading-9: 2.25rem; /* 36px */
  --leading-10: 2.5rem; /* 40px */
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
}
`
