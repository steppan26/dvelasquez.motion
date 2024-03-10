import styled from "styled-components"
import { LoopingVideo } from "../../Components"
import React from "react"
import { Sizes } from "../../Assets"

interface Props {
  videosList: string[]
}

export const VideosGallery:React.FC<Props> = ({ videosList }) => {
  return(
    <Container>
      {videosList.map(video => (
        <React.Fragment key={video}>
          <LoopingVideo videoPath={video} allowControls dataLazy soundOption />
        </React.Fragment>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  margin-block: 10dvh;

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-direction: column;
      align-items: center;
    margin-block: 5dvh;
  }
`
