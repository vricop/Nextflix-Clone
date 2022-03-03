import { Tv } from '@/components/Tv'

const id = (function* generateId() {
  let id = 0
  while (true) {
    yield id
    id++
  }
})()

export const stories = [
  {
    key: id.next().value,
    title: 'Enjoy on your TV.',
    tagline:
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    Media: Tv,
    reverse: false,
  },
  {
    key: id.next().value,
    title: 'Download your shows to watch offline.',
    tagline: 'Save your favorites easily and always have something to watch.',
    Media: Tv,
    reverse: true,
  },
  {
    key: id.next().value,
    title: 'Watch everywhere.',
    tagline:
      'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
    Media: Tv,
    reverse: false,
  },
  {
    key: id.next().value,
    title: 'Create profiles for kids.',
    tagline:
      'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    Media: Tv,
    reverse: true,
  },
]
