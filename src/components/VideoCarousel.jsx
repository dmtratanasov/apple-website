import { useRef, useState } from "react";
import { highlightsSlides } from "../constants";

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd:false,
        startPlay:false,
        videoId: 0,
        isLastVideo:false,
        isPlaying:false
    })

  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="pr-10 sm:pr-20">
            <div className="video-carousel_container">
              <div className="w-full h-full overflow-hidden bg-black flex-center rounded-3xl">
                <video id="video" playsInline preload="auto" muted>
                  <source src={list.video} type="vide/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="text-xl font-medium md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
