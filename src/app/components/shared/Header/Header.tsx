import React from 'react'
import { StyledImg, StyledDiv } from '../../StyledComp';
function Header() {
  return (
    <StyledDiv borderBottom>
      <StyledImg
        src={
          require('../../../assets/image/DayTraderHead_red.gif')
        } />
    </StyledDiv>
  )
}

export default Header
