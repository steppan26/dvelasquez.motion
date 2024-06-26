import Script from "next/script"
import styled from "styled-components"
import { Sizes } from "../Assets"

export const Calendly:React.FC = () => {
  return(
    <Wrapper>
      <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/d-velasquezart/30min?background_color=f3e4d9&text_color=370031&primary_color=7a9b76"
      style={{minWidth: '320px', height:'750px'}}
      />
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
    justify-content: center;
  margin-block: -2rem 3rem;

  &>div {
    flex: 1 0 320px;
  }

  @media (max-width: ${Sizes.small}) {
    margin-top: unset;
  }
`
