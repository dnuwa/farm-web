import styled from 'styled-components'

const Base = styled.span`
  text-align: ${({ center = false, right = false, left = true }) => {
    if (center) {
      return 'center'
    } else if (right) {
      return 'right'
    } else if (left) {
      return ' left'
    }
  }};
  opacity: ${({ helper = false }) => (helper ? 0.75 : 1)};
  color: inherit;
  text-transform: ${({ transform = 'none', uppercase = false }) =>
    uppercase ? 'uppercase' : transform};
  padding: 0;
  margin: 0;
  display: ${({ display = 'block', inline = false }) =>
    inline ? 'inline' : display};
  font-weight: ${({ bold = false, weight = 'normal' }) =>
    bold ? 'bold' : weight};
  font-family: ${({ conden = false }) =>
      conden ? `'Roboto Condensed'` : `'Open Sans'`},
    sans-serif;
`

export default Base
