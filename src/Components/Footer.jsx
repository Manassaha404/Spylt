import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Footer = () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    const isMobile = useMediaQuery({ maxWidth: 768 })
    useGSAP(() => {
        const text = SplitText.create(".last-text", {
            type: "chars",
        })
        const tl = gsap.timeline({
            delay:20
        })
        tl.from(text.chars, {
            yPercent: 200,
            ease: "power1.inOut",
            stagger: 0.03,
        })
        ScrollTrigger.create({
            trigger: ".footer",
            start: "top bottom",
            end: "70% bottom",
            scrub: 1,
            // markers: true,
            onEnter: () => tl.restart(),
        })
    })
    return (
        <div className='footer h-[80vh] md:h-[110vh] w-full bg-[#222123] relative pt-[7vh] md:pt-[10vw] flex flex-col justify-start items-center'>
            {isMobile ? (
                <img
                    src="/images/footer-drink.png"
                    className="absolute top-0 object-contain"
                />
            ) : (
                <video
                    src="/videos/splash.mp4"
                    autoPlay
                    playsInline
                    muted
                    className="absolute top-0 object-contain mix-blend-lighten"
                />
            )}

            <div className="  overflow-hidden w-fit md:w-[55vw] h-[14vw] md:h-[10vw] z-10  px-5 md:p-5">
                <h1 className='last-text text-[12vw] md:text-[8vw] leading-[12vw] md:leading-[8vw] uppercase font-bold text-[#FAEADE] m-auto tracking-[-.35vw]'>#chugresounsibly</h1>
            </div>
            <div className="flex items-center justify-center  gap-5 relative z-10 md:mt-20 mt-5">
                <div className="border border-[#faeade33] md:size-[5vw] size-14 md:p-0 p-3 flex justify-center items-center rounded-full hover:bg-[#ffffff1a] transition-colors cursor-pointer">
                    <img src="./images/yt.svg" alt="" />
                </div>
                <div className="border border-[#faeade33] md:size-[5vw] size-14 md:p-0 p-3 flex justify-center items-center rounded-full hover:bg-[#ffffff1a] transition-colors cursor-pointer">
                    <img src="./images/insta.svg" alt="" />
                </div>
                <div className="border border-[#faeade33] md:size-[5vw] size-14 md:p-0 p-3 flex justify-center items-center rounded-full hover:bg-[#ffffff1a] transition-colors cursor-pointer">
                    <img src="./images/tiktok.svg" alt="" />
                </div>
            </div>
            <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between w-full text-[#FAEADE] font-[ProximaNova] md:text-lg font-medium">
                <div className="flex items-center md:gap-16 gap-5">
                    <div>
                        <p>SPYLT Flavors</p>
                    </div>
                    <div>
                        <p>Chug Club</p>
                        <p>Student Marketing</p>
                        <p>Dairy Dealers</p>
                    </div>
                    <div>
                        <p>Company</p>
                        <p>Contacts</p>
                        <p>Tasty Talk</p>
                    </div>
                </div>

                <div className="md:max-w-lg">
                    <p>
                        Get Exclusive Early Access and Stay Informed About Product
                        Updates, Events, and More!
                    </p>
                    <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full placeholder:font-sans placeholder:text-[#999999]"
                        />
                        <img src="/images/arrow.svg" alt="arrow" />
                    </div>
                </div>
            </div>

            <div className="2xl:absolute w-full md:px-10 px-5 py-7 bottom-0 text-milk opacity-50 md:text-lg font-paragraph flex gap-7 md:flex-row flex-col-reverse md:justify-between justify-center items-center text-[#FAEADE] font-[ProximaNova]">
                <p>Copyright © 2025 Spylt - All Rights Reserved</p>
                <div className="flex items-center gap-7">
                    <p>By Manas</p>
                </div>
            </div>
        </div>
    )
}

export default Footer