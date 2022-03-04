import { v4 as uuidv4 } from 'uuid'
import { DevicePile } from '@/components/DevicePile'
import { Mobile } from '@/components/Mobile'
import { WishDragon } from '@/components/StoryImage'
import { Tv } from '@/components/Tv'

export const stories = [
  {
    key: uuidv4(),
    title: 'Enjoy on your TV.',
    tagline:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    Media: Tv,
    flipped: false,
  },
  {
    key: uuidv4(),
    title: 'Download your shows to watch offline.',
    tagline: 'Save your favorites easily and always have something to watch.',
    Media: Mobile,
    flipped: true,
  },
  {
    key: uuidv4(),
    title: 'Watch everywhere.',
    tagline:
      'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
    Media: DevicePile,
    flipped: false,
  },
  {
    key: uuidv4(),
    title: 'Create profiles for kids.',
    tagline:
      'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    Media: WishDragon,
    flipped: true,
  },
]
