import styled from 'styled-components';

interface IStyledProps {
  borderBottom?: boolean
}


export const StyledImg = styled.img`
  width: 239px;
  margin-left: 10px;
  object-fit: contain;
`

export const StyledDiv = styled.div<IStyledProps>`
  border: ${props => props.borderBottom ? '1px solid #ddd' : ''};
`

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 1;
  height: 53px;
  border-top: 2px solid red;
`

export const Wrapper = styled.div`
  position: absolute;
  top: 53px;
`