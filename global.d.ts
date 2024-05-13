import en from 'messages/en.json'
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  MutableRefObject,
  PropsWithChildren,
  PropsWithRef,
  PropsWithoutRef,
} from 'react'

export type Messages = typeof en

declare global {
  interface IntlMessages extends Messages { }
}

// NOTE: next-intl doesn't properly type `useMessages`. Remove this once they
// implement it properly
declare module 'next-intl' {
  function useMessages(): Messages
}

// POLYMORPHIC COMPONENT UTILITY TYPE HELPERS
interface AsProp<C extends ElementType> {
  as?: C
}

type DistributiveMergeProps<C extends ElementType, P = {}> = Omit<
  ComponentPropsWithoutRef<C>,
  keyof (AsProp<C> & P)
>

type FRef<T> = {
  /**
   * Custom prop for the builtin `ref` prop. Polymorphic Components
   * doesn't cope well with `forwardRef` due to a limitation with generics.
   * With this we avoid type safety issues and Typescript errors. Plus, React
   * 19 is going to remove `forwardRef` and make `ref` just work as intended.
   */
  fRef?: ComponentPropsWithRef<T>['ref']
}

type PolymorphicComponentProps<
  C extends ElementType,
  P = {},
> = PropsWithChildren<P & AsProp<C>> & FRef<C> & DistributiveMergeProps<C, P>
