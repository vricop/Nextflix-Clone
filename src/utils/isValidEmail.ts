export default function isValidEmail(str: string) {
  return !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(str)
}
