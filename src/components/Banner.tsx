'use client'
import PopCorn from '@icons/popcorn.svg'
import ChevronRight from '@icons/chevron-right-standard.svg'
import Link from 'next/link'

interface Banner {
  title: string
  description: string
  linkText: string
  url: string
}

export function Banner({ title, description, linkText, url }: Banner) {
  return (
    <div className="mt-4 sm:mt-0 lg:-mt-[72px] mx-6 sm:mx-[74px] relative @container">
      <div
        className={`
          rounded sm:flex justify-center items-center gap-x-8 grid-flow-col
          text-white p-8 sm:p-6 banner shadow-[0px_-8px_25px_rgba(0,_0,_0,_0.5)]
        `}
      >
        <PopCorn className="-mt-20 sm:mt-[initial] sm:ml-[initial] scale-[0.8] sm:scale-100" />
        <div className="grid gap-y-2 justify-items-start">
          <p className="text-xl font-medium">{title}</p>
          <p className="text-base">{description}</p>
          <Link
            href={url}
            className="underline text-blue-500 font-medium flex first-baseline items-center gap-x-2"
          >
            {linkText}
            <ChevronRight className="align-middle inline-block" />
          </Link>
        </div>
      </div>
    </div>
  )
}
