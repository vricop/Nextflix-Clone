import en from 'messages/en.json'

export type Messages = typeof en

declare global {
  interface IntlMessages extends Messages { }
}

// NOTE: next-intl doesn't properly type `useMessages`. Remove this once they
// implement it properly
declare module 'next-intl' {
  function useMessages(): Messages
}
