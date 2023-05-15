import { ButtonDefaults } from '@components/ButtonDefaults'
import { render } from '@testing-library/react'

it('renders a button', () => {
  const { container, debug } = render(<ButtonDefaults>Cool button</ButtonDefaults>)
  debug(container)
  expect(container).toMatchSnapshot()
})
