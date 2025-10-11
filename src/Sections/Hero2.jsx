import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText);
const Hero2 = () => {
    useGSAP(() => {
        const splittext1 = SplitText.create(".text1", {
            type: "words",
        })
        const splittext2 = SplitText.create(".text2", {
            type: "words",
        })
        const splittext3 = SplitText.create(".hero-para2", {
            type: "words, lines",
            linesClass: "para-line",
        })

        const tl = gsap.timeline();
        tl.to(splittext1.words, {
            scrollTrigger: {
                trigger: ".hero2-container",
                start: "top center",
                end: "40% center",
                // markers:true,
                scrub: 1,
            },
            color: "#FAEADE",
            stagger: 1,
            ease: "power1.in",
        }).to(".reveal-text2", {
            scrollTrigger: {
                trigger: ".hero2-container",
                start: "41% center",
                end: "43% center",
                // markers:true,
                scrub: 1,
            },
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.in",
            duration: 0.5,
        }).to(splittext2.words, {
            scrollTrigger: {
                trigger: ".hero2-container",
                start: "45% center",
                end: "75% center",
                // markers:true,
                scrub: 1,
            },
            color: "#FAEADE",
            stagger: 1,
            ease: "power1.in",
        }).from(splittext3.words, {
            scrollTrigger: {
                trigger: ".hero2-container",
                start: "79% center",
                end: "81% center",
                // markers: true,
                scrub: 1,
            },
            yPercent: 200,
            stagger: 0.02,
        })
    })
    return (
        <section >
            <div className="hero2-container w-full h-[100vh] md:h-[120vh] relative z-10 bg-[#7F3B2D] flex flex-col justify-center items-center md:px-16">
                <div className="text1-container bg-transparent w-[90vw] md:w-[55vw] h-fit">
                    <h1 className='text1 uppercase text-[13vw] md:text-[8.5vw] font-bold leading-[110%] text-center tracking-[-.35vw] text-[#8C4F42]'>stir up your fearless past and</h1>
                </div>
                <div style={{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
                }} className="reveal-text2 w-fit px-1 py-2 h-fit bg-[#E3A458] -mt-2 rotate-3 border-4 border-[#7F3B2D] outline-transparent z-8">
                    <h1 className=' text-[13vw] md:text-[8vw] uppercase font-bold leading-[95%] text-[#7F3B2D]'>fuel up</h1>
                </div>
                <div className="text2-container -mt-4 bg-transparent w-[80vw] md:w-[80vw] h-fit">
                    <h1 className='text2 uppercase text-[13vw] md:text-[8.5vw] font-bold leading-[110%] text-center tracking-[-.35vw] text-[#8C4F42]'>your future with every
                        gulp of Perfect Protein</h1>
                </div>
                <div className='hero-para2 w-[82vw] md:w-[25vw] h-fit mx-auto mt-6 md:mt-14'>
                    <p className='text-[#FAEADE] md:text-lg font-semibold text-center'>Rev up your rebel spirit and feed the adventure of life with SPYLT, where you’re one chug away from epic nostalgia and fearless fun.</p>
                </div>
            </div>

        </section>
    )
}

export default Hero2