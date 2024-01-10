// TODO: Replace hard-coded text with translations
export function Mobile() {
  return (
    <div className="grid place-items-center">
      <img
        className="[grid-area:1/1]"
        src="/images/mobile-0819.jpg"
        alt="Mobile - Stranger Things"
      />
      <div className="items-center self-end bg-black rounded-xl gap-x-4 grid [grid-area:1/1] grid-cols-[auto_1fr_auto] py-2 px-3 -translate-y-[22%] w-[60%]">
        <img
          className="w-auto h-20 aspect-[150/210]"
          width={150}
          height={210}
          src="/images/boxshot.png"
          alt="Stranger Things Poster"
        />
        <div>
          <h3 className="text-base leading-tight">Stranger Things</h3>
          <p className="text-sm text-blue-100 leading-tight">Downloading...</p>
        </div>
        <img className="h-12" src="/images/download-icon.gif" alt="" />
      </div>
    </div>
  )
}
