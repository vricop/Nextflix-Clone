import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  place-items: center;
`

const Devices = styled.img`
  grid-area: 1/1;
  z-index: 1;
`

const Video = styled.video`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  max-width: 63%;
  max-height: 47%;
  transform: translate(0%, -34%);
`

export function DevicePile() {
  return (
    <Container>
      <Devices src="/images/device-pile.png" alt="" />
      <Video autoPlay playsInline muted loop>
        <source src="/videos/video-devices.mp4" type="video/mp4" />
      </Video>
    </Container>
  )
}
