import { SVGProps } from 'react'

interface Icon {
  name: string
  width?: string
  height?: string
  href?: string
  attrs?: SVGProps<SVGSVGElement>
}

export function Icon({
  name,
  width = '1em',
  height,
  href = '/images/sprite.svg',
  ...attrs
}: Icon) {
  height = height || width

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      {...{ width, height, ...attrs }}>
      <use href={`${href}#${name}`} />
    </svg>
  )
}
