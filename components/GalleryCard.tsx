import React from 'react'
import {motion} from 'framer-motion'
import SwiperComponent from '../components/SwiperComponent'

import {swiperImages} from '../src/swiperImages'
import '../src/css_files/grid.css'

const GalleryCard: React.FC = (): JSX.Element => {
  return (
    <motion.div 
        initial = {{opacity: 0, x: '300px'}}
        animate = {{opacity: 1, x: 0}}
        transition ={{delay: .35, duration: .5, ease: 'easeOut'}}
        className = "gallery-card w-full h-full shadow-lg bg-white rounded-3xl justify-center overflow-hidden font-[Poppins]">
        
        <SwiperComponent 
            slides = {swiperImages}
            startIndex = {0}
        />
        
    </motion.div>
  )
}

export default GalleryCard