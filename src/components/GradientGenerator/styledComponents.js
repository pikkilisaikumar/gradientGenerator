import styled from 'styled-components'

export const ContainerOne = styled.div`
  display: flex;
  background-image: linear-gradient(
    to ${props => props.active1},
    ${props => props.first},
    ${props => props.second}
  );
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
`
export const FirstcolorInput = styled.input`
  background-color: ${props => props.color1};
  border-width: 0px;
`

export const SecondcolorInput = styled.input`
  background-color: ${props => props.color2};
  border-width: 0px;
`
export const ParagraphText = styled.p`
  color: white;
  font-family: Roboto;
  font-size: 17px;
`
