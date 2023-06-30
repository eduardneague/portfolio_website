import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import '../src/css_files/grid.css'

export const weatherLoader = async () => {
    const apikey = '86SDWEZXMFK89QF887GU28YNN'
    const baseURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'
 
    const response = await fetch(`${baseURL}Bucharest?unitGroup=metric&key=${apikey}`)
    return response.json()
}

const Weather: React.FC = (): JSX.Element => {

    const [weatherIcon, setWeatherIcon] = useState<string>('clear-day')
    const [weatherConditions, setWeatherConditions] = useState<string | null>(null)
    const [currentTemperature, setCurrentTemperature] = useState<number | null>(null)

    // FIX FUCKING RETARDED DEFFERING DATA THAT DOES NOT WANT TO DISPLAY MOTHERFUCKER (PROBABLY A SIMPLE FIX BUT I CANT FIX IT RN. GG)

    useEffect(() => {
        const stateValidation = async () => {
            // this is a problem, data deffers the way it should, but by the time the loader function finishes, this await still takes some time...
            const data = await weatherLoader()
            if(data.status === 'pending') {
                setWeatherIcon('')
                setWeatherConditions('...')
            }
            setWeatherIcon(data.currentConditions.icon)
            setWeatherConditions(data.currentConditions.conditions)
            setCurrentTemperature(Math.trunc(data.currentConditions.temp))
        }
        stateValidation()
    }, [])

    const DATE = new Date()
    const currentMonth: number = DATE.getMonth()
    const currentDay: number = DATE.getDay()
    const currentDate: number = DATE.getDate()

    return (
        <motion.div 
            initial = {{opacity: 0, x: '300px'}}
            animate = {{opacity: 1, x: 0}}
            transition ={{delay: .25, duration: .5, ease: 'easeOut'}}
            className = "weather-card flex overflow-hidden w-full min-h-[10rem] h-full flex-col shadow-lg font-[Poppins] bg-gradient-to-b from-meteo-light-blue to-meteo-dark-blue rounded-3xl">
            <div className = "top-box w-full h-3/4 flex">
                <div className = "left-box flex flex-col gap-2 justify-center weather-left-box w-1/2">
                    <h1 className = "text-xl mb-2 font-bold text-white z-[1000]">
                        {
                            currentDay == 1 ? 'MONDAY' :
                            currentDay == 2 ? 'TUESDAY' : 
                            currentDay == 3 ? 'WEDNESDAY' :
                            currentDay == 4 ? 'THURSDAY' : 
                            currentDay == 5 ? 'FRIDAY' :
                            currentDay == 6 ? 'SATURDAY' : 
                            currentDay == 0 ? 'SUNDAY' : ''
                        }
                    </h1>
                    <h1 className = "text-4xl text-white">{currentDate}<span className = "text-xl ml-1 z-[1000]">
                    {
                            currentMonth == 0 ? 'Jan' :
                            currentMonth == 1 ? 'Feb' : 
                            currentMonth == 2 ? 'Mar' :
                            currentMonth == 3 ? 'Apr' : 
                            currentMonth == 4 ? 'May' :
                            currentMonth == 5 ? 'Jun' : 
                            currentMonth == 6 ? 'Jul' : 
                            currentMonth == 7 ? 'Aug' : 
                            currentMonth == 8 ? 'Sep' : 
                            currentMonth == 9 ? 'Oct' : 
                            currentMonth == 10 ? 'Nov' : 
                            currentMonth == 11 ? 'Dec' : ''
                    }  
                    </span></h1>
                </div>

                <div className = "relative right-box flex flex-col gap-2 justify-center weather-right-box w-1/2 text-right">
                    <h1 className = "text-xl font-bold mb-2 text-white z-[1000]">
                        {
                            weatherConditions === 'Partially cloudy' ? 'Cloudy' : 
                            weatherConditions === 'Overcast' ? 'Cast' : ''
                        }
                        </h1>
                    <h1 className = "text-4xl text-white mr-5 z-[1000]">{currentTemperature}<span className = "text-xl absolute right-0">℃</span></h1>
                </div>
            </div>

            <div className = "h-1/4 flex relative bottom-box rounded-br-2xl rounded-bl-2xl items-center justify-between select-none ">
                <span className = "text-white text-md weather-left-box mb-7 z-[1000]">Romania, Bucharest</span>
                <img src={`${weatherIcon}.svg`} draggable = "false" alt="weather_icon" className = "select-none z-[1] aspect-square object-contain h-[17rem] opacity-10 absolute bottom-[-200%] right-0"/>
            </div>
        </motion.div>
    )
}

export default Weather