import React from "react";

function VideoPlayer() {
  return (
    <div className="video-player-container">
      <video controls autoPlay width="100%" height="auto">
        <source
          src="/videos/video-3.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
