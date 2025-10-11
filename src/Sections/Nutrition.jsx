import React from 'react'
import NutritionDetails from '../Components/NutritionDetails'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

const Nutrition = () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    useGSAP(() => {
        const titleText = SplitText.create(".nutrition-title1-text", {
            type: "chars",
        })
        const paraText = SplitText.create(".nutrition-para-text", {
            type: "words, lines",
            linesClass: "para-line",
        })
        const tl = gsap.timeline({ paused: true })
        tl.from(titleText.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
        }).to(".nutrition-reveal-text", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.in",
        },).from(paraText.words, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
        },"-=0.5")

        ScrollTrigger.matchMedia({
            "(min-width: 1025px)": function() {
                ScrollTrigger.create({
                    trigger: ".nutrition-container",
                    start: "-4% center",
                    end: "50% center",
                    // markers: true,
                    scrub: 1,
                    onEnter: () => tl.restart(),
                })
            },
            "(max-width: 1025px)": function() {
                ScrollTrigger.create({
                    trigger: ".nutrition-container",
                    start: "-36% center",
                    end: "50% center",
                    // markers: true,
                    scrub: 1,
                    onEnter: () => tl.restart(),
                })
            }
        })
    })
    return (
        <section>
            <div className="nutrition-container bg-[#E5D9C5] h-[110vh] md:h-[120vh] w-full relative">
                <div className="content h-[122vh] md:h-[130vh] w-full absolute z-10 top-0 px-4 md:px-[2vw] py-30 flex flex-col justify-between">
                    <div className="nutrition-title w-full md:pt-[30vh] md:flex md:justify-between md:items-center">
                        <div>
                            <div className='nutrition-title1 overflow-hidden w-fit md:w-fit h-[14vw] md:h-[10vw]'>
                                <h1 className='nutrition-title1-text text-[14vw] md:text-[8vw] leading-[12vw] md:leading-[8vw] uppercase font-bold text-[#523122] m-auto tracking-[-.35vw]'>it still does</h1>
                            </div>
                            <div style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", }} className="nutrition-reveal-text w-fit md:w-fit h-[18vw] md:h-[11vw] bg-[#A26833] border-[1vw] md:border-[0.5vw] border-[#FAEADE] z-10  -rotate-3 -mt-2 md:-mt-16     px-3 md:py-2 md:px-5">
                                <h1 className='text-[13vw] md:text-[8vw] uppercase font-bold text-[#FCE1CD] leading-[110%] md:leading-[8vw] tracking-[-.35vw]'>body good</h1>
                            </div>
                        </div>
                        <div className="nutrition-para w-[80vw] md:w-[18vw] mt-5 md:mt-8">
                            <h1 className='nutrition-para-text text-left md:text-right font-semibold text-[#523122b1] text-[3.8vw] md:text-[1.0vw] leading-[6vw] md:leading-[170%]'>Mlik contains a wide array of nutrients including vitamins, minerals and protein , and this is lactose free</h1>
                        </div>
                    </div>
                    {<NutritionDetails />}
                </div>
                <div className="nutition-imgs h-full w-full flex flex-col justify-between">
                    <img src="public\images\slider-dip.png" className='w-full h-[15vw]' alt="" />
                    <img src="public\images\big-img.png" className='w-full h-[35vh] md:size-fit  scale-[2] md:scale-[1]' alt="" />
                </div>
            </div>
        </section>
    )
}

export default Nutrition