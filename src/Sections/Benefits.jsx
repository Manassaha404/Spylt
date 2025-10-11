import { BenifitClip } from '../Components/BenifitClip'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import BigVideo from '../Components/BigVideo'

const Benefits = () => {
    useGSAP(()=>{
        const benefitTitle = SplitText.create(".benefit-para-text",{
            type:"words, lines",
            linesClass:"para-line",
        })
        const muchMoreText = SplitText.create(".much-more-text",{
            type:"words",
        })
        const tl = gsap.timeline({
            delay:1,
            scrollTrigger:{
                trigger:".benefit-container",
                start:"top center",
                end:"17% top",
                // markers:true,
                scrub:1.5,
            }
        })
        tl.from(benefitTitle.words,{
            yPercent:200,
            stagger:0.02,
            ease:"power1.inOut",
        }).to(".benefit-reveal",{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity:1, 
            ease:"circ.inOut",
            stagger:0.9,
        },).from(muchMoreText.words,{
            yPercent:200,
            ease:"power1.inOut",
            stagger:0.05,
        })
    })
    
  return (
    <section>
        <div className='benefit-container h-fit md:pb-[40vh] bg-[#222123] pt-[10vh] flex flex-col justify-start relative'>
            <div className='benifit-para'>
                <p className='benefit-para-text md:text-xl text-center text-[#FAEADE] font-["ProximaNova"]'>
                    Unlock the Advantage: <br />
                    Explpore the Key Benefits of Choosing SPYLT
                </p>
            </div>
            <div className="benefit-reveal-container h-fit w-full pt-[20vh] flex flex-col justify-center items-center">
                <BenifitClip text={"SHELF STABLE"} bg={"#C88E64"} color={"#FAEADE"} className={"rotate-3 z-10 bg-[#C88E64]"} />
                <BenifitClip text={"PROTINE + CAFFEINE"} bg={"#FAEADE"} color={"#2E2D2F"} className={"-mt-1 -rotate-1"} />
                <BenifitClip text={"INFINITELY RECYCLABLE"} bg={"#7F3B2D"} color={"#FAEADE"} className={"rotate-2 z-10 -mt-2"}/>
                <BenifitClip text={"LACTOSE FREE"} bg={"#FED775"} color={"#2E2D2F"} className={"-rotate-3 bg-[#FED775] mt-0 text-[#2E2D2F]"}/>
            </div>
            <div className="much-more mt-[20vh] md:mt-[5vw] overflow-hidden z-10">
                <h1 className='much-more-text md:text-xl text-center text-[#FAEADE] font-["ProximaNova"]'>And  much  more...</h1>
            </div>
            <div>
                {<BigVideo/>}
            </div>
                
            
            
        </div>
    </section>
  )
}

export default Benefits