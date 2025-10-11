import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
    const isMoblie = useMediaQuery({maxWidth : 768});
    useGSAP(() => {
        const HeroTitle = SplitText.create(".hero-title", {
            type:"chars"
        })
        const tl = gsap.timeline({
            delay:1,
        })
        tl.to(".hero-content",{
            opacity:1,
        }).to(".reveal-text",{
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration:0.5,
            ease:"circ.in"
        },"-=0.5").from(HeroTitle.chars, {
            yPercent:200,
            stagger:0.02,
            ease:"power1.inOut"
        }, "-=0.5")
        const scrollTl = gsap.timeline({
            scrollTrigger:{
                trigger:".hero-container",
                start: "1% top",
                end:"bottom top",
                // markers: true,
                scrub: 1,
            }
        })
        scrollTl.to(".hero-container",{
            rotate:8,
            scale:0.9,
            y:40,
            ease:"power1.inOut",
        })
    })

    return (
        <section className="bg-[#222123]">
            <div className='hero-container  bg-[#F9E6D6] relative w-full h-screen flex  flex-col justify-start pt-[22vw]  md:pt-0 md:justify-center items-center'>
                <img src="\images\hero-bg.png" className='absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-200' alt="" />
                {isMoblie ? (
                    <img className="absolute bottom-20" src="\images\hero-img.png"/>
                    
                    ) : (
                    <video className="absolute w-[100%] h-screen object-cover" src="\videos\hero-bg.mp4" autoPlay playsInline muted/>
                    )}
                <div className="hero-content z-10 opacity-0">
                    <div className="hero-text mx-auto  overflow-hidden w-fit md:w-[55vw] h-[14vw] md:h-[10vw]  px-5 md:p-5">
                        <h1 className='hero-title text-[12vw] md:text-[8vw] leading-[12vw] md:leading-[8vw] uppercase font-bold text-[#523122] m-auto tracking-[-.35vw]'>freaking delicious</h1>
                    </div>
                    <div style={{clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"}} className="reveal-text w-fit md:w-[54vw] h-[17vw] md:h-[10vw] bg-[#A26833] border-[1vw] md:border-[0.5vw] border-[#FAEADE] origin-top-left -rotate-3 mt-3 mx-auto md:mt-5 px-3 md:px-5">
                        <h1 className='text-[12.5vw] md:text-[8vw] uppercase font-bold text-[#FCE1CD] leading-[12vw] md:leading-[8vw] tracking-[-.35vw]'>protein + caffeine</h1>
                    </div>
                    <div className="hero-para w-[80vw] md:w-[30vw] mx-auto mt-5 md:mt-8">
                        <h1 className='text-center font-semibold text-[#523122b1] text-[3.8vw] md:text-[1.0vw] leading-[4vw] md:leading-[110%]'>Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</h1>
                    </div>
                    <div className="hero-button w-fit h-[12vw] md:h-fit  bg-[#E3A458] mx-auto flex justify-center items-center mt-13 md:mt-17 rounded-full px-10 md:px-16 md:py-4">
                        <h1 className='uppercase font-semibold md:text-2xl'>chug a spylt</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero