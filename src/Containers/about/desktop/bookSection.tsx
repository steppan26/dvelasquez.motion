import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { HeaderText, Wrapper } from '.'

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
    <Wrapper data-lazy>
        <span />
        <div>
          <HeaderText ref={calendarWrapperRef}>Book a call</HeaderText>
        </div>
        <span />
      </Wrapper>
      <CalendlyWidget />
    </>
  )
}
