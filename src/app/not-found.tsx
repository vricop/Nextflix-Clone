'use client'
import Logo from '@images/logo.svg'
import { Link } from 'iconoir-react'

export default function NotFoundPage() {
  return (
    <>
      <header className="px-11 h-[68px] leading-9 text-white grid items-center">
        <Link href="/">
          <Logo width="93" height="auto" className="text-netflix" />
        </Link>
      </header>
      <main className="text-white h-[calc(100vh-68px)] grid items-center bg-cover bg-center bg-fixed bg-[url(/images/bg-lost-in-space.png)] overlay">
        <div className="mx-auto w-[50vw] container grid justify-items-center text-center">
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-medium">
            Are you lost?
          </h1>
          <p className="mt-8 text-lg md:text-xl xl:text-3xl font-light">
            We couldn&apos;t find that page. You can explore many titles on the
            home page.
          </p>
          <Link
            className="mt-7 xl:text-xl font-medium bg-white hover:bg-white/70 transition-colors ease-in-out text-black rounded px-10 py-3"
            href="/"
          >
            Netflix Home
          </Link>
          <span className="mt-[12vh] text-left border-l-[3px] sm:text-2xl xl:text-3xl font-light border-red-600 py-2 px-[1vw]">
            Error code{' '}
            <strong className="font-medium text-lg xl:text-3xl tracking-widest">
              NSES-404
            </strong>
          </span>
        </div>
        <span className="absolute right-0 bottom-0 py-[2.5vw] px-[4.8vw] uppercase text-neutral-300 font-light  [text-shadow:0_1px_2px_rgba(0,0,0,.57)]">
          From <strong className="font-medium">Lost In Space</strong>
        </span>
      </main>
    </>
  )
}
