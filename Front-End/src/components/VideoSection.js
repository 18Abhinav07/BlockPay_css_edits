import React from "react";
import "../styles.css";

const VideoSection = () => {
  return (
    <div className="video-sectionhome">
      <h2>Watch Our Introductory Video</h2>
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
