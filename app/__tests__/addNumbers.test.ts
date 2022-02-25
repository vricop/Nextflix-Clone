import { addNumbers } from '@/utils/addNumbers'

describe('Add numbers', () => {
  it('adds any number of numbers', () => {
    expect(addNumbers(5)).toBe(5)
    expect(addNumbers(5, 3)).toBe(8)
    expect(addNumbers(100, 23, 5)).toBe(128)
    expect(addNumbers(0)).toBe(0)
    expect(addNumbers(-1, 100, -50)).toBe(49)
  })
})
