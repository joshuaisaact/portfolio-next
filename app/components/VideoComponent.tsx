interface VideoComponentProps {
  videoSrc: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoSrc }) => {
  return (
    <video
      autoPlay
      loop
      muted
      preload="none"
      poster={videoSrc.replace(".mp4", "-poster.jpg")}
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={videoSrc.replace(".mp4", ".webm")} type="video/webm" />
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
