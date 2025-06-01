import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer2 = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const playerRef = useRef(null);
  const [volume, setVolume] = useState(0.8);
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const containerRef = useRef(null);

  // Called continuously as video plays
  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  // When user seeks manually
  const handleSeek = (e) => {
    const newPlayed = parseFloat(e.target.value);
    setPlayed(newPlayed);
    playerRef.current.seekTo(newPlayed, "fraction"); // Seek based on fraction (0 to 1)
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowVolume(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute top-0 left-0 z-[100] w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,.9)]">
      <Link
        onClick={() => navigate(-1)}
        className="absolute left-[5%] top-[5%] text-3xl text-white hover:text-[#6c5ce7]  ri-close-fill"
      ></Link>

      {/*for play trailer2*/}

      {ytvideo ? (
        <div className="flex flex-col relative items-center">
          {!hasStarted && (
            <div
              onClick={() => {
                setHasStarted(true);
                setIsPlaying(true);
              }}
              className="absolute w-[1200px] h-[600px] bg-black/50 z-10 flex items-center justify-center cursor-pointer"
            ></div>
          )}

          <ReactPlayer
            ref={playerRef}
            height={600}
            width={1200}
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
            volume={volume}
            controls={false}
            playing={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onProgress={handleProgress}
          />

          {hasStarted && !isPlaying && (
            <div className="w-[10%]" ref={containerRef}>
              <i
                className="ri-volume-up-fill absolute bottom-[4%] left-[12%] text-xl text-white cursor-pointer"
                onClick={() => setShowVolume((prev) => !prev)}
              />
              {showVolume && (
                <input
                  className="w-[10%] absolute bottom-[5%] left-[15%] appearance-none h-1 bg-gray-300 rounded-lg outline-none
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:bg-gray-700
                    [&::-webkit-slider-thumb]:rounded-full"
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
              )}
            </div>
          )}

          {hasStarted && !isPlaying && (
            <input
              className="w-[75%] absolute bottom-[1%] left-[12%] appearance-none h-1 rounded-lg outline-none
     bg-gradient-to-r from-red-500 to-gray-300
     [style*='background-size']:bg-[length:100%_100%]
     [&::-webkit-slider-thumb]:appearance-none 
     [&::-webkit-slider-thumb]:w-3 
     [&::-webkit-slider-thumb]:h-3 
     [&::-webkit-slider-thumb]:bg-red-500 
     [&::-webkit-slider-thumb]:rounded-full 
     [&::-webkit-slider-thumb]:cursor-pointer"
              type="range"
              min={0}
              max={1}
              step={0.001}
              value={played}
              onChange={handleSeek}
              style={{
                background: `linear-gradient(to right, red ${
                  played * 100
                }%, #d1d5db ${played * 100}%)`,
              }}
            />
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer2;

