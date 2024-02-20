import Image from "next/image"

export const Arrow:React.FC = () => {
  return(
    <Image
        src="/arrow.svg"
        alt="arrow"
        layout='fill'
        // width={15}
        // height={50}
        />
  )
}
