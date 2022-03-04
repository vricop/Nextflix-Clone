import { v4 as uuidv4 } from 'uuid'

export const footerLinks = [
  {
    key: uuidv4(),
    href: 'https://help.netflix.com/support/412',
    children: 'FAQ',
  },
  { key: uuidv4(), href: 'https://help.netflix.com', children: 'Help Center' },
  { key: uuidv4(), href: '/youraccount', children: 'Account' },
  {
    key: uuidv4(),
    href: 'https://media.netflix.com/',
    children: 'Media Center',
  },
  {
    key: uuidv4(),
    href: 'http://ir.netflix.com/',
    children: 'Investor Relations',
  },
  { key: uuidv4(), href: 'https://jobs.netflix.com/jobs', children: 'Jobs' },
  { key: uuidv4(), href: '/redeem', children: 'Redeem Gift Cards' },
  { key: uuidv4(), href: '/gift-cards', children: 'Buy Gift Cards' },
  { key: uuidv4(), href: '/watch', children: 'Ways to Watch' },
  {
    key: uuidv4(),
    href: 'https://help.netflix.com/legal/termsofuse',
    children: 'Terms of Use',
  },
  {
    key: uuidv4(),
    href: 'https://help.netflix.com/legal/privacy',
    children: 'Privacy',
  },
  { key: uuidv4(), href: '#', children: 'Cookie Preferences' },
  {
    key: uuidv4(),
    href: 'https://help.netflix.com/legal/corpinfo',
    children: 'Corporate Information',
  },
  {
    key: uuidv4(),
    href: 'https://help.netflix.com/contactus',
    children: 'Contact Us',
  },
  { key: uuidv4(), href: 'https://fast.com', children: 'Speed Test' },
  {
    key: uuidv4(),
    href: 'https://help.netflix.com/legal/notices',
    children: 'Legal Notices',
  },
  {
    key: uuidv4(),
    href: 'https://www.netflix.com/es-en/browse/genre/839338',
    children: 'Only on Netflix',
  },
]
