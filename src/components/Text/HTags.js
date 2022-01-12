import styled from 'styled-components'

import { Media } from 'theme'
import TextBase from './Text'

const H1 = styled(TextBase.withComponent('h1')).attrs({
  weight: ({ weight = '800' }) => weight
})`
  font-size: ${({ theme: { metrics } }) => metrics.font.h1}px;
`
const H2 = styled(TextBase.withComponent('h2')).attrs({
  weight: ({ weight = '600' }) => weight
})`
  font-size: ${({ theme: { metrics } }) => metrics.font.h2}px;
`
const H3 = styled(TextBase.withComponent('h3')).attrs({
  weight: ({ weight = '600' }) => weight
})`
  font-size: ${({ theme: { metrics } }) => metrics.font.h3}px;
`
const H4 = styled(TextBase.withComponent('h4')).attrs({
  weight: ({ weight = '600' }) => weight
})`
  font-size: ${({ theme: { metrics } }) => metrics.font.h4}px;
  ${Media.phone`font-size: ${({ theme: { metrics } }) =>
    metrics.font.h4 * 0.8}px;`};
`
const H5 = styled(TextBase.withComponent('h5')).attrs({
  weight: ({ weight = '400' }) => weight
})`
  font-size: ${({ theme: { metrics } }) => metrics.font.h5}px;
`
const H6 = styled(TextBase.withComponent('h6')).attrs({
  weight: ({ weight = '600' }) => weight
})`
  font-size: ${({ theme: { metrics } }) => metrics.font.h6}px;
`

export { H1, H2, H3, H4, H5, H6 }
