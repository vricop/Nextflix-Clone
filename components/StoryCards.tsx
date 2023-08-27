import { ReactElement } from 'react'
import { v4 as uuid } from 'uuid'
import { DevicePile } from './DevicePile'
import { Mobile } from './Mobile'
import { StoryCard } from './StoryCard'
import { StoryImage } from './StoryImage'
import { Tv } from './Tv'

const media: { [index: number]: ReactElement } = {
  0: <Tv />,
  1: <Mobile />,
  2: <DevicePile />,
  3: <StoryImage />,
}

export default function StoryCards() {
  return (
    <>
      {/* {storyCards.map((storyCard, index: number) => ( */}
      {/*   <StoryCard */}
      {/*     key={uuid()} */}
      {/*     $flipped={index % 2 !== 0} */}
      {/*     title={storyCard.title} */}
      {/*     tagline={storyCard.tagline} */}
      {/*   > */}
      {/*     {media[index]} */}
      {/*   </StoryCard> */}
      {/* ))} */}
    </>
  )
}
