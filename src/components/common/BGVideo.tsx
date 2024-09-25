import React from 'react';

const BackgroundVideo = ({ 
  src, 
  type = 'video/mp4', 
  height = '100vh', 
  objectFit = 'cover',
  objectPosition = 'center',
  zIndex = -1,
  opacity = 1,
  loop = true,
  muted = true,
  autoPlay = true,
  playsInline = true,
  controls = false,
  poster,
  children,
}:any) => {
  return (
    <div className="fixed top-0 left-0 w-full overflow-hidden" style={{ height, zIndex }}>
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
        style={{ objectFit, objectPosition, opacity }}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        controls={controls}
        poster={poster}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  );
};

export default BackgroundVideo;