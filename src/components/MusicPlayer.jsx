function MusicPlayer() {
  return (
    <iframe
      className="content-player"
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator&theme=0"
      width="100%"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default MusicPlayer;
