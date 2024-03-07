import Image from "next/image"
import styled from "styled-components"
import MockupImage from '/public/projects/jellysmack/mockup-post.png'
import PersonalisedCaptionsImage from '/public/projects/jellysmack/personalised_captions.gif'
import KeywordsImage from '/public/projects/jellysmack/keywords.gif'
import FlameKeywordsImage from '/public/projects/jellysmack/flame_keywords.gif'
import FlameGoBiggerImage from '/public/projects/jellysmack/flame_go-bigger.gif'
import GoBiggerImage from '/public/projects/jellysmack/go-bigger.gif'
import WatchImage from '/public/projects/jellysmack/watch-till-the-end.gif'
import TransitionOneImage from '/public/projects/jellysmack/transition_1.png'
import TransitionTwoImage from '/public/projects/jellysmack/transition_2.png'
import { Sizes } from "../Assets"
import { useIsMobileView } from "../utils/hooks"

export const SocialMediaAssets:React.FC = () => {
  const { isMobileView } = useIsMobileView()

  return(
    <Container>
      <TopSection>
        <Image
        id='mockup'
        src={MockupImage}
        alt="social media post mockup"
        layout="responsive"
        />
        <Image
        id='personalisedCaptions'
        src={PersonalisedCaptionsImage}
        alt="animated sticker of the word 'captions'"
        layout="responsive"
        />
        <Image
        id='keywords'
        src={isMobileView ? FlameKeywordsImage : KeywordsImage}
        alt="animated sticker of the word 'keywords'"
        layout="responsive"
        />
      </TopSection>
      <MiddleSection>
        <Image
        id="flame"
        src={isMobileView ? GoBiggerImage : FlameGoBiggerImage}
        alt="animated sticker of a flame in the Jellysmack brand colours"
        layout="responsive"
        />
        <Image
        id="watch"
        src={WatchImage}
        alt="animated sticker inciting to 'watch till the end'"
        layout="responsive"
        />
      </MiddleSection>
      <BottomSection>
      <span>
        <video
        autoPlay
        playsInline
        muted
        loop
        controls={false}
        controlsList="nodownload"
        poster={TransitionOneImage.src}
        preload="metadata">
          <source src="/jellysmack_transition_1.mp4" type="video/mp4" />
        </video>
      </span>
      <span>
        <video
        autoPlay
        playsInline
        muted
        loop
        controls={false}
        controlsList="nodownload"
        poster={TransitionTwoImage.src}
        preload="metadata">
          <source src="/jellysmack_transition_2.mp4" type="video/mp4" />
        </video>
      </span>
      </BottomSection>
    </Container>
  )
}

const Container = styled.div`
  --page-margin: 5vw;

  margin-top: 22dvh;
  margin-inline: var(--page-margin);

  @media (max-width: ${Sizes.small}) {
    margin-top: 3dvh;
  }
`

const TopSection = styled.div`
  display: grid;
    grid-template-columns: 1fr 0.8fr;
    grid-template-rows: 7fr 6fr;
    grid-template-areas:
    'mockup personalised'
    'mockup keywords';
    justify-items: start;
    align-items: center;
    grid-gap: 2vw;

  #mockup {
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

  #keywords {
    align-self: start;
    grid-area: keywords;
  }

  @media (max-width: ${Sizes.small}) {
      grid-template-columns: 100%;
      grid-template-rows: auto;
      grid-template-areas: unset;

    &>#mockup {
      z-index: 3;
      grid-row: 1 / 3;
      grid-column: 1 / 2;
      align-self: center;
      justify-self: start;
      padding: 1rem 22vw 2rem 8vw;
    }

    &>#personalisedCaptions {
      z-index: 4;
      grid-row: 2 / 3;
      grid-column: 1 / 2;
      justify-self: end;
      transform: translateX(5vw);
      padding-inline: 30vw 0;
    }

    &>#keywords {
      grid-row: 3 / 4;
      grid-column: 1 / 2;
      align-self: end;
      justify-self: center;
      max-width: 80vw;
      padding-inline: 1rem;
      margin-bottom: 2vh;
    }
  }
`

const MiddleSection = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
    justify-items: center;
    align-items: start;
  padding-inline: 5vw;

  @media (max-width: ${Sizes.small}) {
    display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10vw;
    padding-inline: 10vw;
  }
`

const BottomSection = styled.div`
  --video-size: 50vw;
  --stagger-size: 11vh;

  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5vw;
  margin-top: 10dvh;
  margin-inline: calc(var(--page-margin) * -1);

  &>span {
    position: relative;
    display: flex;
      justify-content: center;
      align-items: center;
    max-height: var(--video-size);
    overflow: hidden;
  }

  &>span>video {
    height: auto;
    width: var(--video-size);
  }

  &>span:first-of-type {
    margin-top: var(--stagger-size);
  }

  @media (max-width: ${Sizes.small}) {
    --video-size: 100%;

    display: block;

    &>span {
      height: 100vw;
    }

    &>span:last-of-type {
      display: none;
    }
  }
`
