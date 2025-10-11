import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

const FalvourTitle = () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    useGSAP(() => {
        const FalvourText1 = SplitText.create(".falvour-title-text1", {
            type: "chars",
        });
        const FalvourText2 = SplitText.create(".falvour-title-text2", {
            type: "chars",
        });
        const tl = gsap.timeline({ paused: true, delay: 70 });
        tl.from(FalvourText1.chars, {
            yPercent: 200,
            ease: "power1.inOut",
            stagger: 0.02,
            duration: 0.5,
        }).to(
            ".falvour-reveal-text",
            {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.5,
                ease: "circ.in",
            },
            "-=0.5"
        ).from(FalvourText2.chars, {
            yPercent: 200,
            ease: "power1.inOut",
            stagger: 0.02,
            duration: 0.5,
        });

        ScrollTrigger.matchMedia({
            "(min-width: 1025px)": function () {
                ScrollTrigger.create({
                    trigger: ".falvuor-title-container",
                    start: "20% bottom",
                    end: "75% bottom",
                    onEnter: () => tl.restart(),
                    // markers: true,
                    scrub: 1,
                });
            },
            "(max-width: 1024px)": function () {
                ScrollTrigger.create({
                    trigger: ".falvuor-title-container",
                    start: "top bottom",
                    end: "55% bottom",
                    onEnter: () => tl.restart(),
                    // markers: true,
                    scrub: 1,
                });
            }
        });
    });




    return (
        <div className="falvuor-title-container w-full md:w-[55vw] h-[32vh] md:h-full flex flex-col justify-center items-center shrink-0">
            <div className="falvour-title1 mx-auto  overflow-hidden w-fit md:w-fit h-[14vw] md:h-[10vw]  px-5 md:p-5">
                <h1 className='falvour-title-text1 text-[12vw] md:text-[8vw] leading-[12vw] md:leading-[8vw] uppercase font-bold text-[#523122] m-auto tracking-[-.35vw]'>we have 6</h1>
            </div>
            <div style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }} className="falvour-reveal-text w-fit md:w-fit h-[17vw] md:h-[11vw] bg-[#A26833] border-[1vw] md:border-[0.5vw] border-[#FAEADE] z-10 origin-top-left -rotate-3 -mt-2  md:-mt-2 px-3 md:py-2 md:px-5">
                <h1 className='text-[12.5vw] md:text-[9vw] uppercase font-bold text-[#FCE1CD] leading-[12vw] md:leading-[8vw] tracking-[-.35vw]'>freaking</h1>
            </div>
            <div className="falvour-title2 mx-auto  overflow-hidden w-fit md:w-fit h-[14vw] md:h-[10vw] -mt-2.5 md:-mt-17 px-5 md:p-5">
                <h1 className='falvour-title-text2 text-[12vw] md:text-[8vw] leading-[12vw] md:leading-[8vw] uppercase font-bold text-[#523122] m-auto tracking-[-.35vw]'>delicious falvours</h1>
            </div>
        </div>
    )
}

export default FalvourTitle