import { TitlePrimary } from "@/Assets/UIComponents"
import { NavbarInterface } from "@/Utils/sanity/types"
import Image from "next/image"
import styled from "styled-components"

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
  position: sticky;
    top: 0;
  display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 3rem;
    align-content: center;
    justify-items: start;
  width: 100dvw;
  height: 120px;
  background-color: ${p => p.backgroundColor || 'var(--clr-bg-secondary)'};
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
