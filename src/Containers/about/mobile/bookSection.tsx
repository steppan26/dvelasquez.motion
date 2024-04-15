import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { Wrapper } from '../desktop'
import { MobileHeaderText } from '.'
import styled from 'styled-components'
import { Sizes } from '../../../Assets'

export const BookSection:React.FC = () => {
    const calendarWrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if(router.asPath.includes('#book') && !!calendarWrapperRef.current){
      const top = calendarWrapperRef.current.getBoundingClientRect().top - 80
      const body = document.querySelector('body')
      setTimeout(() => body?.scrollTo({ top, behavior: 'instant' }), 0)
    }
  }, [router])

  const CalendlyWidget = dynamic(() => import('../../../Components/calendly').then(module => module.Calendly), { ssr: false })

  return(
    <>
      <CustomWrapper data-lazy>
        <LargeDiamond />

        <div>
          <MobileHeaderText ref={calendarWrapperRef}>Book a call</MobileHeaderText>
        </div>
        <span />
      </CustomWrapper>
      <CalendlyWidget />
    </>
  )
}


const LargeDiamond = styled.div`
  position: absolute;
  left: 0; top: -2.5rem;
  width: 2.7rem;
  height: 2.7rem;
  background-color: var(--clr-bg-secondary);
  transform: translateX(-50%) rotate(45deg);

  @media (min-width: ${Sizes.small}) {
    display: none;
  }
`

const CustomWrapper = styled(Wrapper)`
  display: flex;
    flex-direction: column;
  padding-inline: var(--main-padding-inline);

  @media (max-width: ${Sizes.small}){
    margin-top: 12dvh;

    h2 {
      transform: unset;
    }

    span {
      display: none;
    }
  }
`
