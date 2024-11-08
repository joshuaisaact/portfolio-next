import React from "react";

interface VideoComponentProps {
  videoSrc: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoSrc }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={videoSrc} type="video/mp4" />
      <source src={videoSrc.replace(".mp4", ".webm")} type="video/webm" />
    </video>
  );
};

export default VideoComponent;
