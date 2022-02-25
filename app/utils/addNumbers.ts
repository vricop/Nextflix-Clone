export function addNumbers(...numbers: number[]): number {
  return numbers.reduce((total, number) => (total += number))
}
