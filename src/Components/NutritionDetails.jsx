import React from 'react'
import nutrientLists from '../constant/NutritionData'
import { useMediaQuery } from 'react-responsive'

const NutritionDetails = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <div className='details-container bg-[#FDEBD2] w-fit mx-auto rounded-full flex px-6 py-7 md:py-10: font-["ProximaNova"] border-6  border-[#E8DDCA]'>
            {nutrientLists.map((val, index) => {
                if (!isMobile) {
                    return (
                        <div key={index} className={`flex flex-col justify-between items-center px-5 md:px-15 gap-2 ${index != 4 ? "border-r border-[#C28C42]" : ""}`}>
                            <h1 className='text-s font-light text-[#865720] md:text-xl' >{val.label}</h1>
                            <h1 className='text-[#865720]'>up to </h1>
                            <h1 className='text-2xl font-["Antonio"] font-bold text-[#865720] md:text-4xl'>{val.amount}</h1>
                        </div>
                    )
                }
            })}
            {nutrientLists.filter((val, index) => {
                if (isMobile) {
                    return val.moblie == true;
                }
            }).map((val,index) => {
                return (
                    <div key={index} className={`flex flex-col justify-between items-center px-5 md:px-15 gap-2 ${index != 2 ? "border-r border-[#C28C42]" : ""}`}>
                        <h1 className='text-s font-light text-[#865720] md:text-xl' >{val.label}</h1>
                        <h1 className='text-[#865720]'>up to </h1>
                        <h1 className='text-2xl font-["Antonio"] font-bold text-[#865720] md:text-4xl'>{val.amount}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default NutritionDetails