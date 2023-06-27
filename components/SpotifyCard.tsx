import React from 'react'
import {motion} from 'framer-motion'

import '../src/css_files/spotifyPlayer.css'
import '../src/css_files/grid.css'

const SpotifyCard: React.FC = (): JSX.Element => {
  return (
    <motion.div
    initial = {{opacity: 0, y: '300px'}}
    animate = {{opacity: 1, y: 0}}
    transition ={{delay: .25, duration: .5, ease: 'easeOut'}}
    className = "spotify-card w-full h-full justify-center items-center shadow-lg bg-spotify-green rounded-3xl min-h-[15rem] flex overflow-hidden font-[Poppins]">
        <div className = "flex justify-center items-center gap-6 w-4/5 h-full">
            <div className = "left-box h-full mr-[0rem] flex justify-center items-center">
                <img src="post_malone.jfif" alt="Post Malone Album Photo" draggable = "false" className = "spotify-photo rounded-3xl aspect-square select-none"/>
            </div>

            <div className = "right-box w-1/2 flex flex-col justify-center">
                <div className = "flex gap-2">
                    <h1 className = "text-4xl font-bold">Circles</h1>
                    <img src="spotify_logo_black.png" alt="Spotify Logo BLACK" draggable = "false" className = "spotify-logo select-none w-[2rem] h-[2rem] mt-1"/>
                </div>
                <h2 className = "text-sm mb-2">Post Malone</h2>

                <div className = "w-6/7 flex flex-col mb-2">
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

                <div className = "flex justify-between relative w-6/7 h-[3.2rem] gap-[.15rem]">
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
                    <div className = "music-bar"></div>
                    <div className = "music-bar"></div>
                    <div className = "music-bar"></div>
                </div>
                
            </div>
        </div>
    </motion.div>
  )
}

export default SpotifyCard