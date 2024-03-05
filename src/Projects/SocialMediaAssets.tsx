import Image from "next/image"
import styled from "styled-components"
import MockupImage from '/public/projects/jellysmack/mockup-post.png'
import PersonalisedCaptionsImage from '/public/projects/jellysmack/personalised_captions.png'
import KeywordsImage from '/public/projects/jellysmack/keywords.png'
import FlameGoBiggerImage from '/public/projects/jellysmack/flame_go-bigger.png'
import WatchImage from '/public/projects/jellysmack/watch-till-the-end.png'
import TransitionOneImage from '/public/projects/jellysmack/transition_1.png'
import TransitionTwoImage from '/public/projects/jellysmack/transition_2.png'

export const SocialMediaAssets:React.FC = () => {
  return(
    <Container>
      <TopSection>
        <Image
        id='mockup'
        src={MockupImage.src}
        alt="social media post mockup"
        height={MockupImage.height}
        width={MockupImage.width}
        layout="responsive"
        />
        <Image
        id='personalisedCaptions'
        src={PersonalisedCaptionsImage.src}
        alt="animated sticker of the word 'captions'"
        height={PersonalisedCaptionsImage.height}
        width={PersonalisedCaptionsImage.width}
        layout="responsive"
        />
        <Image
        id='keywords'
        src={KeywordsImage.src}
        alt="animated sticker of the word 'keywords'"
        height={KeywordsImage.height}
        width={KeywordsImage.width}
        layout="responsive"
        />
      </TopSection>
      <MiddleSection>
        <Image
        id="flame"
        src={FlameGoBiggerImage.src}
        alt="animated sticker of a flame in the Jellysmack brand colours"
        height={FlameGoBiggerImage.height}
        width={FlameGoBiggerImage.width}
        layout="responsive"
        />
        <Image
        id="watch"
        src={WatchImage.src}
        alt="animated sticker inciting to 'watch till the end'"
        height={WatchImage.height}
        width={WatchImage.width}
        layout="responsive"
        />
      </MiddleSection>
      <BottomSection>
        <Image
        id="transitionOne"
        src={TransitionOneImage.src}
        alt="animated sticker showing transition animation"
        height={TransitionOneImage.height}
        width={TransitionOneImage.width}
        layout="responsive"
        />
        <Image
        id="transitionOne"
        src={TransitionTwoImage.src}
        alt="animated sticker showing transition animation"
        height={TransitionTwoImage.height}
        width={TransitionTwoImage.width}
        layout="responsive"
        />
      </BottomSection>
    </Container>
  )
}

const Container = styled.div`
  --page-margin: 5vw;

  margin-top: 22dvh;
  margin-inline: var(--page-margin);
`

const TopSection = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 7fr 6fr;
    grid-template-areas:
    'mockup personalised'
    'mockup keywords';
    justify-items: start;
    align-items: center;
    grid-gap: 2vw;

  &>#mockup {
    grid-area: mockup;
    justify-self: end;
    transform-origin: center;
    transform: rotate(-9deg);
    padding: 5rem;
  }

  #personalisedCaptions {
    align-self: end;
    grid-area: personalised;
    transform: translateX(-20%);
  }

  &>#keywords {
    align-self: start;
    grid-area: keywords;
  }
`

const MiddleSection = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
    justify-items: center;
    align-items: start;
  padding-inline: 5vw;
`

const BottomSection = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5vw;
  margin-top: 10dvh;
  margin-inline: calc(var(--page-margin) * -1);

  &>img:first-of-type {
    margin-top: 11vh;
  }
`
