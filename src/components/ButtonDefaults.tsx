import styled from 'styled-components'

export const ButtonDefaults = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))``
