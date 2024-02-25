import { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"

interface Props {
  backgroundImageUrl: string
  id: string
  children?: any
}

export const ScrollingSection:React.FC<Props> = ({ children, backgroundImageUrl, id }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if(!window) return

    window.addEventListener('selectProject', _handleSelect)

    return () => window.removeEventListener('selectProject', _handleSelect)
  }, [])

  const notifyListeners = useCallback(() => {
    const event = new CustomEvent('selectProject', {
      bubbles: true,
      detail: { id }
    })
    window.dispatchEvent(event)
  }, [id])

  useEffect(() => {
    if(!isSelected) return

    notifyListeners()
  }, [isSelected, notifyListeners])

  const _handleSelect = (e: any) => {
    setIsSelected(e.detail.id === id)
  }

  return(
    <Container
    id={id+'_container'}
    isSelected={isSelected}
    onClick={() => setIsSelected(true)}
    data-projectid
    ref={containerRef}
    >
      <BackgroundHeader className='background' imgUrl={ backgroundImageUrl } />
      <Overlay className='overlay' />
      {isSelected && children}
    </Container>
  )
}

const Container = styled.div<{isSelected: boolean}>`
  cursor: pointer;
  flex: ${p => p.isSelected ? '0 0 100%' : '0 1 25%'};
  position: relative;
  width: 100%;
  height: 100vh;

  transition: flex-basis 230ms cubic-bezier(.77,0,.18,1);

  &:hover {
    flex: ${p => p.isSelected ? '0 0 100%' : '0 1 33%'};
  }
`


const BackgroundHeader = styled.div<{ imgUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${p => p.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-origin: center center;
  background-size: cover;
  backdrop-filter: opacity(20%);
`

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0;
  height: 100%; width: 100%;
  background: linear-gradient(var(--angle), var(--primary-color), var(--secondary-color));
`
