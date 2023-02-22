import React from 'react'
import styled from 'styled-components'

const FooterTitle = styled.footer`
 text-align: center;
  margin-top: 100px;
`

function Footer() {
  return (
    <FooterTitle>
      Все права защищены &copy;
    </FooterTitle>
  )
}

export default Footer
