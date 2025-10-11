import React from 'react'

export const BenifitClip = ({bg, color, text, className}) => {
    return (
        <div style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        }} className={`benefit-reveal w-fit px-1 md:px-7 py-2 h-fit bg-[${bg}] border-4 border-[#222123] outline-transparent z-8 opacity-0 ${className}`}>
            <h1 className={`text-[11vw] md:text-[8vw] uppercase font-bold leading-[110%] text-[${color}]`}>{text}</h1>
        </div>
    )
}
