'use client'
import { Fragment, ReactNode, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '../Accordion'

interface FaqAccordion {
  data: Data
}

export type Data = {
  summary: string
  details: ReactNode
}[]

export function FaqAccordion({ data: faq }: FaqAccordion) {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  function handleItem(n: number) {
    setActiveIndex((prev) => (prev === n ? null : n))
  }

  return (
    <Accordion className="w-full">
      {faq.map((item, i) => {
        const expanded = i === activeIndex

        return (
          <Fragment key={i}>
            <AccordionSummary
              id={`panel-header-${i}`}
              aria-controls={`panel-content-${i}`}
              onClick={() => handleItem(i)}
              {...{ expanded }}
            >
              {item.summary}
            </AccordionSummary>
            <AccordionDetails
              id={`panel-content-${i}`}
              aria-labelledby={`panel-header-${i}`}
              {...{ expanded }}
            >
              {item.details}
            </AccordionDetails>
          </Fragment>
        )
      })}
    </Accordion>
  )
}
