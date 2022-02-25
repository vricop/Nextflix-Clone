import { ReactElement, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps): ReactElement {
  return <button type="button">{children}</button>
}
