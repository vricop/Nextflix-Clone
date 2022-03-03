import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  place-items: center;
`

const Phone = styled.img`
  grid-area: 1/1;
`

const DownloadItemCard = styled.div`
  align-items: center;
  align-self: end;
  background-color: var(--color-black);
  border-radius: var(--size-3);
  border: var(--size-0-5) solid var(--color-gray-700);
  column-gap: var(--size-4);
  display: grid;
  grid-area: 1/1;
  grid-template-columns: auto 1fr auto;
  padding: var(--size-2) var(--size-3);
  transform: translateY(-22%);
  width: 60%;
`

const Poster = styled.img`
  width: auto;
  height: var(--size-20);
  aspect-ratio: 150/210;
`

const Title = styled.h3`
  font-size: var(--font-base);
  line-height: var(--leading-tight);
`

const Description = styled.p`
  font-size: var(--text-sm);
  color: var(--color-blue);
  line-height: var(--leading-tight);
`

const Gif = styled.img`
  height: var(--size-12);
`

export function Mobile() {
  return (
    <Container>
      <Phone src="/images/mobile-0819.jpg" alt="Mobile - Stranger Things" />
      <DownloadItemCard>
        <Poster
          width={150}
          height={210}
          src="/images/boxshot.png"
          alt="Stranger Things Poster"
        />
        <div>
          <Title>Stranger Things</Title>
          <Description>Downloading...</Description>
        </div>
        <Gif src="/images/download-icon.gif" alt="" />
      </DownloadItemCard>
    </Container>
  )
}
