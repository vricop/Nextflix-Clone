export const theme = {
  color: {
    white: '#fff',
    black: '#000',
    /* Gray scale (from tailwind) */
    'gray-50': '#fafafa',
    'gray-100': '#f5f5f5',
    'gray-200': '#e5e5e5',
    'gray-300': '#d4d4d4',
    'gray-400': '#a3a3a3',
    'gray-500': '#737373',
    'gray-600': '#525252',
    'gray-700': '#404040',
    'gray-800': '#262626',
    'gray-900': '#171717',
    brand: '#e50914',
    'brand-alt-dark': '#b9090b',
    'brand-alt-light': '#f40612',
    tomato: '#ff091b', // Age rating
    orange: '#ffa00a',
    blue: '#0071eb',
  },
  size: {
    px: '1px',
    '0-5': '0.125rem', // 2px
    '1': '0.25rem', // 4px
    '1-5': '0.375rem', // 6px
    '2': '0.5rem', // 8px
    '2-5': '0.625rem', // 10px
    '3': '0.75rem', // 12px
    '3-5': '0.875rem', // 14px
    '4': '1rem', // 16px
    '5': '1.25rem', // 20px
    '6': '1.5rem', // 24px
    '7': '1.75rem', // 28px
    '8': '2rem', // 32px
    '9': '2.25rem', // 36px
    '10': '2.5rem', // 40px
    '11': '2.75rem', // 44px
    '12': '3rem', // 48px
    '14': '3.5rem', // 56px
    '16': '4rem', // 64px
    '18': '4.5rem', // 72px
    '20': '5rem', // 80px
    '24': '6rem', // 96px
    '28': '7rem', // 112px
    '32': '8rem', // 128px
    '36': '9rem', // 144px
    '40': '10rem', // 160px
    '44': '11rem', // 176px
    '48': '12rem', // 192px
    '52': '13rem', // 208px
    '56': '14rem', // 224px
    '60': '15rem', // 240px
    '64': '16rem', // 256px
    '72': '18rem', // 288px
    '80': '20rem', // 320px
    '96': '24rem', // 384px
    /*---- Sizes in ems ----- */
    '0-5em': '0.125em', // 2px
    '1em': '0.25em', // 4px
    '1-5em': '0.375em', // 6px
    '2em': '0.5em', // 8px
    '2-5em': '0.625em', // 10px
    '3em': '0.75em', // 12px
    '3-5em': '0.875em', // 14px
    '4em': '1em', // 16px
    '5em': '1.25em', // 20px
    '6em': '1.5em', // 24px
    '7em': '1.75em', // 28px
    '8em': '2em', // 32px
    '9em': '2.25em', // 36px
    '10em': '2.5em', // 40px
  },
  /* Sizes (from tailwind) */
  /* Font stack (from open props) */
  fontFamiliy: {
    sans: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
    serif: 'ui-serif, serif',
    mono: 'Dank Mono, Operator Mono, Inconsolata, Fira Mono, ui-monospace, SF Mono, Monaco, Droid Sans Mono, Source Code Pro, monospace',
    'netflix-sans': 'Netflix Sans, var(--font-sans)',
  },
  /* Text scale (from tailwind) */
  text: {
    xs: '0.75rem' /* 12px */,
    sm: '0.875rem' /* 14px */,
    base: '1rem' /* 16px */,
    lg: '1.125rem' /* 18px */,
    xl: '1.25rem' /* 20px */,
    '2xl': '1.5rem' /* 24px */,
    '3xl': '1.875rem' /* 30px */,
    '4xl': '2.25rem' /* 36px */,
    '5xl': '3rem' /* 48px */,
    '6xl': '3.75rem' /* 60px */,
    '7xl': '4.5rem' /* 72px */,
    '8xl': '6rem' /* 96px */,
    '9xl': '8rem' /* 128px */,
  },
  leading: {
    '2': '0.5rem' /* 8px */,
    '3': '0.75rem' /* 12px */,
    '4': '1rem' /* 16px */,
    '5': '1.25rem' /* 20px */,
    '6': '1.5rem' /* 24px */,
    '7': '1.75rem' /* 28px */,
    '8': '2rem' /* 32px */,
    '9': '2.25rem' /* 36px */,
    '10': '2.5rem' /* 40px */,
    '12': '3rem' /* 48px */,
    '15': '3.75rem' /* 60px */,
    '17': '4.25rem' /* 68px */,
    none: '1',
    tighter: '1.1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  /* Tracking (from tailwind) */
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
}
