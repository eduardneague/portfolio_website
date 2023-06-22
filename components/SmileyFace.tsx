import React, {useEffect, useState, useRef} from 'react'
import '../src/css_files/smileyFace.css'

const SmileyFace: React.FC = (): JSX.Element => {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    const eyeLeft: any = useRef()
    const eyeRight: any = useRef()

    const calculateAngle = (element: any) => {
        if (!element.current) return;

        const elX = (element.current.getBoundingClientRect().left) + (element.current.clientWidth / 2);
        const elY = (element.current.getBoundingClientRect().top) + (element.current.clientHeight / 2);

        const rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
        const rot = (rad * (180 / Math.PI) * -1)  + 230;

        return rot; 
    }

    const handleMouseMove = (event: any) => {
        setMouseCoordinates({ x: event.clientX, y: event.clientY });
      };

      useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);

    return (
        <div className = "face mr-5 mb-2">
            <div className = "eyes">
                <div 
                    className = "eye" 
                    ref = {eyeLeft} 
                    style = {{
                        transform: `rotate(${calculateAngle(eyeLeft)}deg)`,
                    }}
                ></div>
                <div 
                    className = "eye" 
                    ref = {eyeRight}
                    style = {{
                        transform: `rotate(${calculateAngle(eyeRight)}deg)`,
                      }}
                    ></div>
            </div>
        </div>
    )
}

export default SmileyFace