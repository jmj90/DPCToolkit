import React from 'react'

const LandingVideo = () => {
  return (
    <video className="video-banner" autoPlay loop preload="true" muted>
      <source src="/assets/videos/ghostintrobg.mp4" type="video/mp4" />
    </video>
  )
}

export default LandingVideo
