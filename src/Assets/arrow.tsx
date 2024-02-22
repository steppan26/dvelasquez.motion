import Image from "next/image"
import ArrowSVG from '/public/arrow.svg'

export const Arrow:React.FC = () => {
  return(
    <Image
        src={ArrowSVG}
        alt="arrow"
        width={25}
        height={74}
        />
  )
}
