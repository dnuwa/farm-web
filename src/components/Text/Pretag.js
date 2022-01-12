import React from 'react'
import styled from 'styled-components'

const CodeTag = styled.pre.attrs({
  className: 'd-flex-inline'
})`
  border-left:1px solid black;
  padding:4px 12px;
  margin-top:8px;
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap !important; /* Mozilla, since 1999 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  white-space: pre-wrap; /* crucial for IE 6, maybe 7? */

  width: 100%;

`



export default CodeTag
