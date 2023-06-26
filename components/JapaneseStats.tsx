import React from 'react'
import '../src/css_files/grid.css'

const JapaneseStats: React.FC = (): JSX.Element => {
  return (
    <div className = "japanese-card w-full h-full shadow-lg bg-white rounded-3xl flex flex-col justify-center overflow-hidden font-[Poppins]">
        <div className = "flex justify-center flex-col">
            <div className = "w-full h-1/4 flex flex-col justify-center ml-10 gap-0 mt-5">
                <div className = "w-full flex items-center gap-2">
                    <h1 className = "text-xl font-bold">日本語 STATS</h1>
                    <div className = "bg-rose-100 rounded-md w-[28px] h-[19px] flex justify-center items-center ">
                        <div className = "bg-japanese-red h-2 w-2 rounded-full"></div>
                    </div>
                </div>
                <h2 className = "text-[#5E5E5E] text-sm mb-5">Japanese Stats (I love Japanese)</h2>
            </div>

            <div className = "w-full h-3/4 flex flex-col gap-0 items-center justify-center">

                <div className = "w-full h-[4rem] flex">
                    <div className = "w-1/2 h-full ml-10 flex flex-col gap-0">
                        <h1 className = "text-xl font-bold">読み能力</h1>
                        <h2 className = "text-[#5E5E5E] text-sm">Reading Ability</h2>
                    </div>
                    <div className = "w-1/2 h-full ml-10 flex gap-1 justify-end mr-10">
                        <h1 className = "text-xl text-japanese-red font-bold">60%</h1>
                    </div>
                </div>

                <div className = "w-full h-[4rem] flex">
                    <div className = "w-1/2 h-full ml-10 flex flex-col gap-0">
                        <h1 className = "text-xl font-bold">書き能力</h1>
                        <h2 className = "text-[#5E5E5E] text-sm">Writing Ability</h2>
                    </div>
                    <div className = "w-1/2 h-full ml-10 flex gap-1 justify-end mr-10">
                        <h1 className = "text-xl text-japanese-red font-bold">40%</h1>
                    </div>
                </div>

                <div className = "w-full h-[4rem] flex">
                    <div className = "w-1/2 h-full ml-10 flex flex-col gap-0">
                        <h1 className = "text-xl font-bold">言語理解</h1>
                        <h2 className = "text-[#5E5E5E] text-sm">Comprehension</h2>
                    </div>
                    <div className = "w-1/2 h-full ml-10 flex gap-1 justify-end mr-10">
                        <h1 className = "text-xl text-japanese-red font-bold">90%</h1>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default JapaneseStats