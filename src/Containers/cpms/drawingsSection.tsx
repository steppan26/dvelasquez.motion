import Image from "next/image"
import styled from "styled-components"
import Drawing00 from '/public/projects/cpms/drawing_00.webp'
import Drawing01 from '/public/projects/cpms/drawing_01.webp'
import { Text } from "../../Components/styledComponents"
import { Sizes } from "../../Assets"
import { useTranslation } from "../../utils/hooks"

export const DrawingsSection:React.FC = () => {
  const { t } = useTranslation()
  return (
    <Container data-lazy>
      <div id="drawingGirl">
        <Image
          src={Drawing01}
          alt="hand drawing of a little girl"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </div>
      <Text>
        {t('projects.cpms.drawingsText')}
      </Text>
      <div id="drawingTent">
        <Image
          src={Drawing00}
          alt="hand drawing of a refuge tent"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto"
          }} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
  margin-block: 14.5dvh;

  p {
    align-self: center;
    padding-block: 0 6rem;
  }

  @media (max-width: ${Sizes.small}) {
    display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    margin: 7dvh 1.5rem;

    p {
      flex: 0 0 100%;
      order: 0;
      padding-bottom: 4rem;
    }

    &>div#drawingTent {
      z-index: 2;
      order: 2;
      flex: 0 0 49%;
      transform: translateX(-20%);
    }

    &>div#drawingGirl {
      z-index: 3;
      order: 1;
      flex: 0 0 49%;
      transform: translate(15%, -15%) rotate(-10deg);
    }
  }
`
