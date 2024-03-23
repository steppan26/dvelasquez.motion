import ArrowGif from '/public/arrow_long.png'
import Image from "next/image"

export const ArrowLong:React.FC = () => {

  return (
    <Image
      src={ArrowGif}
      alt="long custom arrow"
      style={{
        maxWidth: "100%",
        width: "100%",
        height: "auto"
      }} />
  );

}
