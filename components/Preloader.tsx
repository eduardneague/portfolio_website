import React, {useEffect} from 'react'
import '../src/css_files/preloader.css'
import {preLoaderAnim} from '../animations/preloaderAnimation'

const Preloader: React.FC = (): JSX.Element => {

    useEffect(() => {
        preLoaderAnim()
    }, [])

    return (
        <div className = "preloader font-[Poppins]">
            <div className = "preloader-mask"></div>
            <div className="texts-container">
                <span>Frontend Developer, </span>
                <span>UX Designer. </span>
            </div>
        </div>
    )
}

export default Preloader