import Image from 'next/image'

// TODO: Replace hard-coded text with translations
export function Mobile() {
  return (
    <div className="grid items-end justify-items-center">
      <Image
        width={640}
        height={480}
        className="[grid-area:1/1] max-w-[calc(100%-3rem)]"
        src="/images/mobile-0819.jpg"
        alt="Mobile - Stranger Things"
      />
      <div className="items-center mb-6 shadow-2xl border-2 border-neutral-600 bg-black rounded-xl gap-x-4 grid [grid-area:1/1] grid-cols-[auto_1fr_auto] py-2 px-3 w-[60%] xl:w-[50%]">
        <Image
          width={57}
          height={80}
          src="/images/boxshot.png"
          alt="Stranger Things Poster"
        />
        <div>
          <h3 className="text-base font-medium leading-tight">Stranger Things</h3>
          <p className="text-sm text-blue-500 leading-tight">Downloading...</p>
        </div>
        <Image
          width={48}
          height={60}
          src="/images/download-icon.gif"
          alt=""
        />
      </div>
    </div>
  )
}
