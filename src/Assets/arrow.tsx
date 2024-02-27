import styled from "styled-components"

export const Arrow:React.FC = () => {

  return(
    <Container></Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 2px;
  height: 85px;
  background-color: ${p => p.theme.textPrimary};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    transform: translateX(-40%) rotate(45deg);
    background-color: inherit;
  }
`
