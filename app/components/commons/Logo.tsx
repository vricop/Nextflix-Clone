import { ReactElement, SVGAttributes } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  color: var(--color-brand);
`

export function Logo(attrs: SVGAttributes<SVGElement>): ReactElement {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="10.4375rem"
      height="2.8125rem"
      viewBox="0 0 512 140"
      {...attrs}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M340.654964,0.802 L319.095037,0.802 L319.095037,121.381873 C338.688773,122.056046 358.199986,123.044524 377.632265,124.340129 L377.632265,103.096299 C365.339985,102.276455 353.015414,101.581471 340.654964,101.005966 L340.654964,0.802 Z M511.997,0.814198993 L488.313013,0.814198993 L472.70189,36.9989246 L458.676636,0.814198993 L435.347855,0.814198993 L460.416786,65.4713749 L433.051574,128.902193 C440.622126,129.640591 448.17115,130.428503 455.712998,131.260904 L471.629096,94.3801186 L487.390913,135.035775 C495.600118,136.091347 503.787795,137.192844 511.961121,138.359283 L511.997,138.34529 L483.910612,65.9080271 L511.997,0.814198993 Z M245.085539,120.328095 L266.646542,120.323431 L266.646542,71.2748666 L295.873894,71.2748666 L295.873894,50.0310374 L266.646542,50.0310374 L266.646542,22.2503417 L305.274295,22.2503417 L305.274295,0.815275375 L245.085539,0.815275375 L245.085539,120.328095 Z M164.572542,22.2489066 L187.138168,22.2489066 L187.138168,121.591049 C194.312611,121.32016 201.501765,121.09699 208.698453,120.908623 L208.698453,22.2489066 L231.263003,22.2489066 L231.263003,0.814198993 L164.572542,0.814198993 L164.572542,22.2489066 Z M90.861919,127.765534 C110.73372,125.959724 130.697014,124.471447 150.751083,123.316489 L150.751083,102.070149 C137.938193,102.810699 125.161541,103.687592 112.422204,104.689344 L112.422204,72.5266985 C120.781026,72.4434584 131.787747,72.1883559 141.53869,72.3096282 L141.53869,51.0640051 C133.748556,51.044989 121.228084,51.1727196 112.422204,51.2853809 L112.422204,22.2503417 L150.751083,22.2503417 L150.751083,0.815275375 L90.861919,0.815275375 L90.861919,127.765534 Z M48.5687269,78.6527459 L20.4877208,0.814198993 L-0.003,0.814198993 L-0.003,138.362154 C7.17000805,137.341026 14.3566503,136.363313 21.5572854,135.425425 L21.5572854,60.6272982 L46.5261131,132.35415 C54.3793944,131.443531 62.2466687,130.58099 70.1293711,129.770116 L70.1293711,0.814198993 L48.5687269,0.814198993 L48.5687269,78.6527459 Z M395.406916,125.619229 C402.604322,126.169978 409.790964,126.760911 416.97043,127.399564 L416.97043,0.814198993 L395.406916,0.814198993 L395.406916,125.619229 L395.406916,125.619229 Z"
      />
    </Svg>
  )
}
