function BackgroundMedia() {
  return (
    <div className="background-media" aria-hidden="true">
      <video autoPlay loop muted playsInline>
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundMedia;
