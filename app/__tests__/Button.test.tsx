import { Button } from '@/components/Button'
import { render, screen } from '@testing-library/react'

it('renders a button', () => {
  const { container, debug } = render(<Button>Cool button</Button>)
  debug(container)
  expect(container).toMatchSnapshot()
})
