import styled from "styled-components"

export const Arrow:React.FC = () => {

  return(
    <Container></Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 3px;
  height: 100px;
  background-color: ${p => p.theme.textPrimary};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 12px;
    height: 12px;
    transform: translateX(-40%) rotate(45deg);
    background-color: inherit;
  }
`
