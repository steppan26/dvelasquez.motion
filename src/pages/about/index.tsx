import { NextPage } from "next"
import styled from "styled-components"
import { TitlePrimary } from "../../Assets/UIComponents"
import { Text } from "../../Components/styledComponents"

const Index:NextPage = () => {
  return(
    <Main>
      <TitlePrimary>Hola!</TitlePrimary>
      <MainText>
        <TextBlock>
          <span>I&apos;m Daniela</span>, an Art Director & Motion Designer with a boundless passion for design and a love for visual storytelling. I speak three languages: Spanish, English, and French. For the past decade, I&apos;ve specialized in content creation, brand communication, and 2D animation.
        </TextBlock>
        <TextBlock>
          I was born in Colombia to an artist (painter and musician) and a communication strategist. Therefore, art and communication have always been integral parts of my universe. Paint and PowerPoint were my happy childhood playground. Since then, my curiosity and interest in color, form, aesthetics, movement, communication, and technology have only grown.
        </TextBlock>
        <TextBlock>
          After an unexpected turn of events, I ended up in France at age 18. There, I obtained a master&apos;s degree in Art Direction and Motion Design from e-artsup school in Paris. I&apos;ve had the opportunity to work in various environments, ranging from established design agencies like TBWA to radio stations like RFM. Most recently, I worked at Jellysmack—a startup that has evolved into a multinational corporation, collaborating with some of the most influential content creators and brands.
        </TextBlock>
        <TextBlock>
          Perpetually curious, an animal lover, and a globe explorer, I am passionate about art in all its forms, especially fashion, interior design, and personal branding.
        </TextBlock>
        <TextBlock>
          Today, my mission is to help you communicate your ideas and your brand in the most effective, authentic way. By utilizing design elements such as composition, colors, typography, and animation effectively, I aim to evoke emotions, sensations, and ultimately, create something unique together to tell your story.
        </TextBlock>

      </MainText>
    </Main>
  )
}

export default Index

const Main = styled.main`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'header pictures'
    'text pictures';

`

const MainText = styled.article``

const TextBlock = styled(Text)`
  span {
    color: var(--clr-bg-secondary);
  }
`
