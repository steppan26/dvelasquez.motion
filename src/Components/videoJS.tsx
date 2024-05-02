import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'
import Player from 'video.js/dist/types/player'
import 'video.js/dist/video-js.css'

interface Props {
  options: Options
  onReady: (player: Player) => void
}

interface Options {
    autoplay?: boolean
    controls?: boolean
    responsive?: boolean
    fluid?: boolean
    sources: [{
      src: string
      type: string
    }]
}

export const VideoJS = (props: Props) => {
  const videoRef = useRef<any>(null)
  const playerRef = useRef<any>(null)
  const {options, onReady} = props

  useEffect(() => {
    if(!videoRef.current) return

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js")

      videoElement.classList.add('vjs-big-play-centered')
      videoRef.current.appendChild(videoElement)

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready')
        onReady && onReady(player)
      })

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
    }
  }, [options, videoRef, onReady])

  useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  )
}

export default VideoJS
