import { Plus } from 'iconoir-react'
import styled from 'styled-components'

const Section = styled.section`
  background-color: var(--color-black);
  color: var(--color-white);
`

const Container = styled.div`
  max-width: 815px;
  margin-inline: auto;
`

const Summary = styled.summary`
  background-color: var(--color-gray-800);
  padding: var(--size-5);
  margin-bottom: var(--size-3);
  font-size: 1.4rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  column-gap: var(--size-4);
`

export function Faq() {
  return (
    <Section>
      <h2>Frequently Asked Questions</h2>
      <Container>
        <details>
          <Summary>
            What is Netflix? <Plus />
          </Summary>
          <div>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </div>
        </details>
        <details>
          <Summary>
            How much does Netflix cost? <Plus />
          </Summary>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from
          EUR7.99 to EUR17.99 a month. No extra costs, no contracts.
        </details>
        <details>
          <Summary>
            Where can I watch? <Plus />
          </Summary>
          Watch anywhere, anytime. Sign in with your Netflix account to watch
          instantly on the web at netflix.com from your personal computer or on
          any internet-connected device that offers the Netflix app, including
          smart TVs, smartphones, tablets, streaming media players and game
          consoles.
          <br />
          <br />
          You can also download your favorite shows with the iOS, Android, or
          Windows 10 app. Use downloads to watch while you're on the go and
          without an internet connection. Take Netflix with you anywhere.
        </details>
        <details>
          <Summary>
            How do I cancel? <Plus />
          </Summary>
          Netflix is flexible. There are no pesky contracts and no commitments.
          You can easily cancel your account online in two clicks. There are no
          cancellation fees – start or stop your account anytime.
        </details>
        <details>
          <Summary>
            What can I watch on Netflix? <Plus />
          </Summary>
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals, and more. Watch as much
          as you want, anytime you want.
        </details>
        <details>
          <Summary>
            Is Netflix good for kids? <Plus />
          </Summary>
          The Netflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and movies
          in their own space.
          <br />
          <br />
          Kids profiles come with PIN-protected parental controls that let you
          restrict the maturity rating of content kids can watch and block
          specific titles you don’t want kids to see.
        </details>
      </Container>
    </Section>
  )
}
