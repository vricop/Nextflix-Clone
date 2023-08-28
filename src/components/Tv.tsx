import styled from 'styled-components'

const Mask = styled.img`
  z-index: 1;
  grid-area: 1/1;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  max-width: 73%;
  max-height: 54%;
  position: relative;
  top: -1.8%;
  left: -0.3%;
  grid-area: 1/1;
`

export const Tv = () => (
  <>
    <Mask src="/images/tv.png" alt="TV" />
    <Video autoPlay muted loop playsInline>
      <source src="/videos/video-tv-0819.m4v.mp4" type="video/mp4" />
    </Video>
  </>
)
