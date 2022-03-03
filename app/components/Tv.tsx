import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`

const Frame = styled.img`
  z-index: 1;
  grid-area: 1/1;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  max-width: 73%;
  aspect-ratio: 1.333;
  top: -1.8%;
  position: relative;
  left: -0.3%;
  grid-area: 1/1;
`

export const Tv = () => (
  <Wrapper>
    <Frame src="/images/tv.png" alt="TV" />
    <Video autoPlay muted loop playsInline>
      <source src="/videos/video-tv-0819.m4v.mp4" type="video/mp4" />
    </Video>
  </Wrapper>
)
