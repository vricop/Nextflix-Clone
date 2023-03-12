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
  background-color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.size._3};
  border: ${({ theme }) => `${theme.size._0_5} solid ${theme.color.gray_700}`};
  column-gap: ${({ theme }) => theme.size._4};
  display: grid;
  grid-area: 1/1;
  grid-template-columns: auto 1fr auto;
  padding: ${({ theme }) => `${theme.size._2} ${theme.size._3}`};
  transform: translateY(-22%);
  width: 60%;
`

const Poster = styled.img`
  width: auto;
  height: ${({ theme }) => theme.size._20};
  aspect-ratio: 150/210;
`

const Title = styled.h3`
  font-size: ${({ theme }) => theme.text.base};
  line-height: ${({ theme }) => theme.leading.tight};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.text.sm};
  color: ${({ theme }) => theme.color.blue};
  line-height: ${({ theme }) => theme.leading.tight};
`

const Gif = styled.img`
  height: ${({ theme }) => theme.size._12};
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
