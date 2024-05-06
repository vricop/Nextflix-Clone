import Image from 'next/image'

export function Tv() {
  return (
    <div className="relative">
      <Image
        width={640}
        height={480}
        src="/images/tv.png"
        alt="TV"
      />
      <video
        className="absolute -z-10 top-[20.8%] left-[13.3%] max-w-[73%] max-h-[54.4%] [grid-area:1/1]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video-tv-0819.m4v.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
