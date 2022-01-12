import styled from 'styled-components'

import TextBase from './Text'

const P = styled(TextBase.withComponent('p'))`
  font-size: ${({
    lead = false,
    small = false,
    medium = false,
    tiny = false,
    theme: { metrics }
  }) => {
    if (lead) {
      return metrics.font.large
    } else if (small) {
      return metrics.font.small
    } else if (medium) {
      return metrics.font.medium
    } else if (tiny) {
      return metrics.font.tiny
    } else {
      return metrics.font.normal
    }
  }}px;

  margin: ${({ compact = false }) => (compact ? '0' : '2px 0 5px')};
`

export { P }
