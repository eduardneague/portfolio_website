import React from 'react'

const JapaneseStats: React.FC = (): JSX.Element => {
  return (
    <div className = "w-[22rem] shadow-lg bg-white rounded-3xl h-[19rem] flex flex-col overflow-hidden font-[Poppins]">

        <div className = "w-full h-1/4 flex flex-col justify-center ml-10 gap-2 mt-5">
            <div className = "w-full flex items-center gap-2">
                <h1 className = "text-xl font-bold">日本語 STATS</h1>
                <div className = "bg-rose-100 rounded-md w-[28px] h-[19px] flex justify-center items-center ">
                    <div className = "bg-japanese-red h-2 w-2 rounded-full"></div>
                </div>
            </div>
            <h2 className = "text-[#5E5E5E] text-sm">Japanese Stats (Yes, I love Japanese)</h2>
        </div>

        <div className = "w-full h-3/4 flex flex-col gap-0 items-center justify-center">

            <div className = "w-full h-[4rem] flex">
                <div className = "w-1/2 h-full ml-10 flex flex-col gap-1">
                    <h1 className = "text-xl font-bold">読み能力</h1>
                    <h2 className = "text-[#5E5E5E] text-sm">Reading Ability</h2>
                </div>
                <div className = "w-1/2 h-full ml-10 flex gap-1 justify-end mr-10">
                    <h1 className = "text-xl text-japanese-red font-bold">60%</h1>
                </div>
            </div>

            <div className = "w-full h-[4rem] flex">
                <div className = "w-1/2 h-full ml-10 flex flex-col gap-1">
                    <h1 className = "text-xl font-bold">書き能力</h1>
                    <h2 className = "text-[#5E5E5E] text-[14px]">Writing Ability</h2>
                </div>
                <div className = "w-1/2 h-full ml-10 flex gap-1 justify-end mr-10">
                    <h1 className = "text-xl text-japanese-red font-bold">40%</h1>
                </div>
            </div>

            <div className = "w-full h-[4rem] flex">
                <div className = "w-1/2 h-full ml-10 flex flex-col gap-1">
                    <h1 className = "text-xl font-bold">言語理解</h1>
                    <h2 className = "text-[#5E5E5E] text-[14px]">Comprehension</h2>
                </div>
                <div className = "w-1/2 h-full ml-10 flex gap-1 justify-end mr-10">
                    <h1 className = "text-xl text-japanese-red font-bold">90%</h1>
                </div>
            </div>

        </div>

    </div>
  )
}

export default JapaneseStats