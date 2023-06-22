import React, {useEffect, useState} from 'react'

const Weather: React.FC = (): JSX.Element => {

    const [weatherIcon, setWeatherIcon] = useState<any>(null)
    const [weatherConditions, setWeatherConditions] = useState<string | null>(null)
    const [currentTemperature, setCurrentTemperature] = useState<number | null>(null)

    const apikey = import.meta.env.VITE_API_KEY
    const baseURL = import.meta.env.VITE_BASE_URL

     useEffect(() => {

        const apiRequest = async () => {
            const response = await fetch(`${baseURL}Bucharest?key=${apikey}`)
            const data = await response.json()
            setWeatherIcon(data.currentConditions.icon)
            setWeatherConditions(data.currentConditions.conditions)
            setCurrentTemperature(Math.trunc((data.currentConditions.temp - 32) / 1.8))
        }
        apiRequest()
     }, []) 

    const DATE = new Date()
    const currentMonth: number = DATE.getMonth()
    const currentDay: number = DATE.getDay()
    const currentDate: number = DATE.getDate()

    return (
        <div className = "flex overflow-hidden flex-col shadow-lg font-[Poppins] bg-gradient-to-b from-meteo-light-blue to-meteo-dark-blue w-[22rem] rounded-2xl h-[10rem] ">
            <div className = "top-box w-full h-3/4 flex">
                <div className = "left-box flex flex-col gap-2 justify-center ml-10 w-1/2">
                    <h1 className = "text-xl font-bold text-white z-[1000]">
                        {
                            currentDay == 1 ? 'MONDAY' :
                            currentDay == 2 ? 'TUESADY' : 
                            currentDay == 3 ? 'WEDNESDAY' :
                            currentDay == 4 ? 'THURSDAY' : 
                            currentDay == 5 ? 'FRIDAY' :
                            currentDay == 6 ? 'SATURDAY' : 
                            currentDay == 7 ? 'SUNDAY' : ''
                        }
                    </h1>
                    <h1 className = "text-[40px] text-white">{currentDate}<span className = "text-xl ml-1 z-[1000]">
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

                <div className = "relative right-box flex flex-col gap-2 justify-center mr-10 w-1/2 text-right">
                    <h1 className = "text-xl font-bold text-white z-[1000]">{weatherConditions === 'Partially cloudy' ? 'Cloudy' : weatherConditions}</h1>
                    <h1 className = "text-[40px] text-white mr-5 z-[1000]">{currentTemperature}<span className = "text-xl absolute right-0">℃</span></h1>
                </div>
            </div>

            <div className = "h-1/4 flex relative bottom-box rounded-br-2xl rounded-bl-2xl items-center justify-between select-none ">
                <span className = "text-white text-md ml-10 mb-7 z-[1000]">Romania, Bucharest</span>
                <img src={`${weatherIcon}.svg`} alt="weather_icon" className = "select-none z-[1] aspect-square object-contain h-[17rem] opacity-10 absolute bottom-[-200%] right-0"/>
            </div>
        </div>
    )
}

export default Weather