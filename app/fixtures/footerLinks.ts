import { v4 as uuidv4 } from 'uuid'

export const footerLinks = [
  {
    id: uuidv4(),
    href: 'https://help.netflix.com/support/412',
    children: 'FAQ',
  },
  { id: uuidv4(), href: 'https://help.netflix.com', children: 'Help Center' },
  { id: uuidv4(), href: '/youraccount', children: 'Account' },
  {
    id: uuidv4(),
    href: 'https://media.netflix.com/',
    children: 'Media Center',
  },
  {
    id: uuidv4(),
    href: 'http://ir.netflix.com/',
    children: 'Investor Relations',
  },
  { id: uuidv4(), href: 'https://jobs.netflix.com/jobs', children: 'Jobs' },
  { id: uuidv4(), href: '/redeem', children: 'Redeem Gift Cards' },
  { id: uuidv4(), href: '/gift-cards', children: 'Buy Gift Cards' },
  { id: uuidv4(), href: '/watch', children: 'Ways to Watch' },
  {
    id: uuidv4(),
    href: 'https://help.netflix.com/legal/termsofuse',
    children: 'Terms of Use',
  },
  {
    id: uuidv4(),
    href: 'https://help.netflix.com/legal/privacy',
    children: 'Privacy',
  },
  { id: uuidv4(), href: '#', children: 'Cookie Preferences' },
  {
    id: uuidv4(),
    href: 'https://help.netflix.com/legal/corpinfo',
    children: 'Corporate Information',
  },
  {
    id: uuidv4(),
    href: 'https://help.netflix.com/contactus',
    children: 'Contact Us',
  },
  { id: uuidv4(), href: 'https://fast.com', children: 'Speed Test' },
  {
    id: uuidv4(),
    href: 'https://help.netflix.com/legal/notices',
    children: 'Legal Notices',
  },
  {
    id: uuidv4(),
    href: 'https://www.netflix.com/es-en/browse/genre/839338',
    children: 'Only on Netflix',
  },
]
