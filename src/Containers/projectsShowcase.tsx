import styled from "styled-components"

export const ProjectsShowcase:React.FC = () => {
  return(
    <Container>
      <Dummy data-red />
      <Dummy data-green />
      <Dummy data-blue />
      <Dummy data-yellow />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  height: 100dvh;
  width: 100dvw;
  overflow: auto;
`

const Dummy = styled.div`
  flex: 1 0 20%;
  height: 100%;
  box-shadow: -4px 0 8px rgba(50, 50, 50, 0.125);
  transition: ease all 300ms;

  &:hover {
    flex-basis: 30%;
  }

  &[data-red] {
    background-color: #dd5a5a;
  }
  &[data-green] {
    background-color: #8bcf8b;
  }
  &[data-blue] {
    background-color: #7c7cdd;
  }
  &[data-yellow] {
    background-color: #eeeeb1;
  }
`
