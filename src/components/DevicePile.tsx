import Image from "next/image";

export function DevicePile() {
  return (
    <div className="relative">
      <Image
        width={640}
        height={480}
        className="relative"
        src="/images/device-pile.png"
        alt=""
      />
      <video
        className="absolute -z-10 top-[10.8%] left-[18.8%] max-w-[61.4%] max-h-[46.1%]"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/videos/video-devices.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
