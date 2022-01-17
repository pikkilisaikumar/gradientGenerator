import styled from 'styled-components'

const Button = styled.button`
  border-width: 0px;
  background-color: ${props => props.bgColor};
  color: white;
  opacity: ${props => props.opacity};
`
export default Button
