import Image from "next/image"
import styled from "styled-components"
import type { NavbarInterface } from "../../utils/sanity/types"
import { TitlePrimary } from "../../Assets/UIComponents"

export const Navbar:React.FC<{navbarData: NavbarInterface}> = ({ navbarData }) => {
  if(!!navbarData)
    return(
      <Nav backgroundColor={navbarData.backgroundColor}>
        <LogoWrapper>
          <Image src={navbarData.logo.imageUrl} alt="logo" layout="fill" />
        </LogoWrapper>
        <HeaderText>{navbarData.headerText}</HeaderText>
      </Nav>
    )
}

const Nav = styled.nav<{backgroundColor: string}>`
  z-index: 999;
  position: fixed;
    top: 0;
  display: flex;
    justify-content: space-between;
    align-content: flex-start;
  width: 100dvw;
`

const HeaderText = styled(TitlePrimary)`
  color: var(--clr-bg-main);
  margin-block: auto;
`

const LogoWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 120px;
  justify-self: end;
`
