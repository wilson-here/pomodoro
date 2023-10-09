function BackgroundVideo() {
  return (
    <video autoPlay loop muted className="bg-video">
      <source src="./assets/video/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default BackgroundVideo;
