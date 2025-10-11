import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"


const BigVideo = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".video-container",
                start: "top top",
                end: "250% top",
                scrub: 1.5,
                // markers: true,
                pin: true,
            }
        });
        if (!isMobile) {
            tl.to(".video-box", {
                clipPath: "circle(100% at 50% 50%)",
                ease: "power1.inOut",
            })
        }

    })


    return (
        <div className="w-full h-[100vh] md:h-[110vh] overflow-hidden bg-[#222123] mt-[10vh] md:-mt-[30vh] video-container">
            <div style={{
                clipPath: !isMobile ? "circle(6% at 50% 50%)" : "circle(100% at 50% 50%)",
            }} className="size-full video-box">
                <video src="\videos\pin-video.mp4" className="md:size-full h-[100vh] absolute object-cover" loop muted autoPlay></video>
                <div className="absolute top-[50%]  md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:scale-100 scale-200">
                    <img src="\images\circle-text.svg" className="size-[15vw] animate-spin [animation-duration:5s]" alt="" />
                    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[8.5vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
                        <img src="\images\play.svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2vw]" alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BigVideo