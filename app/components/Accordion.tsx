import HTMLReactParser from 'html-react-parser'
import { Plus } from 'iconoir-react'
import { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 75%;
  max-width: 815px;
  margin-inline: auto;
  display: grid;
  grid-auto-flow: row;
  row-gap: ${({ theme }) => theme.size._2};
  font-size: ${({ theme }) => theme.text._2xl};
`

const Details = styled.details`
  display: grid;
  grid-auto-flow: row;
  row-gap: ${({ theme }) => theme.size._2};

  &[open]:not(.js) > summary + *,
  &.open > summary + * {
    max-height: ${({ theme }) => `calc(100vh - ${theme.size._4} * 2)`};
    padding-block: ${({ theme }) => theme.size._4};
  }

  &[open] > summary > svg {
    transform: rotate(-45deg);
  }
`

const Summary = styled.summary`
  background-color: ${({ theme }) => theme.color.gray_800};
  padding: ${({ theme }) => theme.size._5};
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  column-gap: ${({ theme }) => theme.size._4};
  cursor: pointer;

  & > svg {
    transition: transform 400ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
    transform: rotate(0);
  }

  & + * {
    background-color: ${({ theme }) => theme.color.gray_800};
    transition: 400ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
    overflow: hidden;
    max-height: 0vh;
    padding-inline: ${({ theme }) => theme.size._4};
    margin-top: ${({ theme }) => theme.size.px};
  }
`

export function Accordion({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>
}

function collapseDetails(openDetails: HTMLDetailsElement) {
  const detailsCollection = openDetails
    .closest('div')!
    .querySelectorAll('details')

  detailsCollection.forEach(item => {
    if (item === openDetails) return

    item.classList.remove('open')

    timer2 = setTimeout(() => {
      item.open = false
    }, 400)
  })
}

let timer1: ReturnType<typeof setTimeout>
let timer2: ReturnType<typeof setTimeout>
function handleClick(event: MouseEvent<HTMLDetailsElement>) {
  event.preventDefault()
  const { currentTarget: details } = event

  clearTimeout(timer1)
  clearTimeout(timer2)

  details.classList.toggle('open')
  if (!details.classList.contains('js')) details.classList.add('js')

  if (!details.open) {
    details.open = true
    collapseDetails(details)
    return
  }

  timer1 = setTimeout(() => {
    details.open = false
  }, 400)
}

const AccordionItem = ({
  summary,
  details,
}: {
  summary: string
  details: string
}) => (
  <Details onClick={handleClick}>
    <Summary>
      {summary}
      <Plus />
    </Summary>
    <div>{HTMLReactParser(details)}</div>
  </Details>
)

Accordion.Item = AccordionItem
