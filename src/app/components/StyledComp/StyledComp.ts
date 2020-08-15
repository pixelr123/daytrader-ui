import styled from 'styled-components';

interface IStyledProps {
  borderBottom?: boolean
}


export const StyledImg = styled.img`
  width: 14%;
  margin-top: 10px;
  margin-left: 10px;
`

export const StyledDiv = styled.div<IStyledProps>`
  border: ${props => props.borderBottom ? '1px solid #ddd' : ''};
`