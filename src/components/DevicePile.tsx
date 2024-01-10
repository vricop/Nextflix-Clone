export function DevicePile() {
  return (
    <div className="grid place-items-center">
      <img
        className="[grid-area:1/1] z-[1]"
        src="/images/device-pile.png"
        alt=""
      />
      <video
        className="[grid-area:1/1] w-full h-full max-w-[63%] max-h-[47%] transform translate-x-0 -translate-y-[34%]"
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
