import React from 'react'
import { StyledFooter } from '../../StyledComp'

export default function Footer() {
  return (
    <StyledFooter>
      <img
        src={require("../../../assets/image/copyRight.gif")}
        alt="Fotter Imgae"
        width="100%"
        height={53}
        style={{ objectFit: 'fill' }}
      />
    </StyledFooter>
  )
}
