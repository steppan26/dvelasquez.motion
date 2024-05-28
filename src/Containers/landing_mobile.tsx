import styled from "styled-components"
import { PrimaryTitle } from "../Components/styledComponents"
import { Sizes } from "../Assets"
import { useTranslation } from "../utils/hooks"

export const LandingMobile:React.FC = () => {
  const { t } = useTranslation()
  return(
    <>
    <Container>
      <ContentWrapper>
        <TextWrapper>
          <span>{t('home.landing.line1')}</span>
          <span>{t('home.landing.line2')}</span>
          <span>{t('home.landing.line3')}</span>
        </TextWrapper>
      </ContentWrapper>
    </Container>
    </>
  )
}

const Container = styled.article`
  z-index: 100;
  position: relative;
  display: flex;
    justify-content: center;
    align-items: flex-start;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  padding-top: 7dvh;

  @media (max-width: ${Sizes.small}) {
    height: max-content;
  }
`

const TextWrapper = styled(PrimaryTitle)`
  cursor: default;
  z-index: 8;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  font-family: var(--font-family-wide);
  font-size: 1.8125rem;
  line-height: 52px;
  font-weight: 200;
  width: 100%;
`


const ContentWrapper = styled.div`
  position: relative;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  width: 90dvw;
  height: 90dvw;
  padding: 0 40px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${p => p.theme.backgroundSecondary};
    transform: scale(0.7) rotate(45deg);
  }
`
