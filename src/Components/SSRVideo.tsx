interface Props {
  muted?: boolean
  controls?: boolean
  videoType: string
  url: string
  posterUrl?: string
  autoPlay?: boolean
}

export const SSRVideo: React.FC<Props> = ({
  autoPlay, muted, controls, posterUrl, url, videoType
}) => {
  return(
    <>
    <video
        // ref={videoRef}
      autoPlay={autoPlay}
      playsInline
      loop
      muted={muted}
      controls={controls}
      // onClick={handleVideoClick}
      controlsList="nodownload noremoteplayback"
      preload="auto"
      poster={posterUrl}
      className="video-js"
      >
        <source src={url} type={videoType} />
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
        </p>
    </video>
    </>
  )
}
