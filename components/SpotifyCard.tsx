import React from 'react'

import '../src/css_files/spotifyPlayer.css'
import '../src/css_files/grid.css'

const SpotifyCard: React.FC = (): JSX.Element => {
  return (
    <div className = "spotify-card w-full h-full shadow-lg bg-spotify-green rounded-3xl min-h-[15rem] flex overflow-hidden font-[Poppins] gap-0">
        <div className = "left-box h-full mr-[0rem] w-2/3 flex justify-center items-center">
            <img src="post_malone.jfif" alt="Post Malone Album Photo" className = "rounded-3xl aspect-square w-[10rem] select-none"/>
        </div>

        <div className = "right-box w-1/2 flex flex-col justify-center mr-1">
            <h1 className = "text-4xl font-bold">Circles</h1>
            <h2 className = "text-sm mb-2">Post Malone</h2>

            <div className = "w-5/6 flex flex-col mb-2">
                <div className = "black-line w-full bg-black h-[.1rem] "></div>
                <div className = "flex justify-between">
                    <p className = "text-sm">2:43</p>
                    <div className = "flex gap-1 mt-1">
                        <div className = "left-triangle"></div>
                        <div className = "pause-button flex gap-1">
                            <div className = "pause"></div>
                            <div className = "pause"></div>
                        </div>
                        <div className = "right-triangle"></div>
                    </div>
                    <p className = "text-sm">3:35</p>
                </div>
            </div>

            <div className = "flex justify-between relative w-5/6 h-[3.2rem] gap-[.15rem]">
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
                <div className = "music-bar"></div>
            </div>
            
        </div>

    </div>
  )
}

export default SpotifyCard