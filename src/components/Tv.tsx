export function Tv() {
  return (
    <>
      <img className="z-[1] [grid-area:1/1]" src="/images/tv.png" alt="TV" />
      <video
        className="w-full h-full max-w-[73%] max-h-[54%] relative -top-[1.8%] -l-[0.3%] [grid-area:1/1]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video-tv-0819.m4v.mp4" type="video/mp4" />
      </video>
    </>
  )
}
