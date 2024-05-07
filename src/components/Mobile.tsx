import Image from 'next/image'

// TODO: Replace hard-coded text with translations
export function Mobile() {
  return (
    <div className="relative">
      <Image
        width={640}
        height={480}
        className="[grid-area:1/1] w-full mx-auto"
        src="/images/mobile-0819.jpg"
        alt="Mobile - Stranger Things"
      />
      <div className="items-center my-0 mx-auto shadow-2xl border-2 border-neutral-600 bg-black rounded-xl absolute left-1/2 bottom-[8%] grid grid-cols-[auto_1fr_48px] py-1 sm:py-1.5 md:py-2 px-2.5 sm:px-3 -translate-x-1/2 w-[60%] min-w-[16.5rem]">
        <Image
          width={57}
          height={80}
          className="w-auto h-12 sm:h-16 lg:h-[4.5rem] mr-4"
          src="/images/boxshot.png"
          alt="Stranger Things Poster"
        />
        <div>
          <h3 className="text-sm sm:text-base font-medium leading-tight">
            Stranger Things
          </h3>
          <p className="text-xs sm:text-sm text-blue-500 leading-tight">
            Downloading...
          </p>
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
