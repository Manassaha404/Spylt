import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Footer from '../Components/Footer'

const FooterSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const titleText = SplitText.create(".footer-title-text", {
      type: "chars",
    })
    const titlePara = SplitText.create(".footer-para-text", {
      type: "words, lines",
      linesClass: "para-line"
    })
    const tl = gsap.timeline({
      delay: 20,
    })
    tl.from(titleText.chars, {
      yPercent: 200,
      ease: "power1.inOut",
      stagger: 0.02,
    }).to(".footer-reveal-text", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.in",
    }).from(titlePara.words, {
      yPercent: 200,
      ease: "power1.inOut",
      stagger: 0.02,
    })
    ScrollTrigger.create({
      trigger: ".footer-img-container",
      start: "top bottom",
      end: "50% bottom",
      // markers: true,
      scrub: true,
      onEnter: () => {
        tl.restart();
      }
    })

  })
  return (
    <section className='h-fit'>
      <div className='footer-container min-h-[50vh] relative bg-[#222123] pt-[20vh] md:pt-[20vw]'>
        <img src="\images\footer-dip.png" className='absolute top-0' alt="" />
        <div className='footer-img-container w-full h-fit relative'>
          <img src="\images\footer-img.svg" className='w-full scale-200 md:scale-100' alt="" />
          <div className='footer-title absolute top-0 w-full h-fit md:h-[30vw] flex flex-col justify-start md:p-15 '>
            <div className="mx-auto md:mx-0   overflow-hidden w-full md:w-[55vw] h-fit md:h-[10vw]  px-5 md:p-5">
              <h1 className='footer-title-text text-[13vw] md:text-[8vw] leading-[110%] md:leading-[8vw] uppercase font-bold text-[#FAEADE] m-auto tracking-[-.35vw]'>right around</h1>
            </div>
            <div style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} className="footer-reveal-text w-fit h-fit md:h-[10vw] bg-[#E9AA56] rotate-3 mx-5 mt-2 md:mt-5 py-1 px-3 md:px-5">
              <h1 className='text-[13vw] md:text-[8vw] uppercase font-bold text-[#523122] leading-[110%] md:leading-[8vw] tracking-[-.35vw]'>the corner</h1>
            </div>
            <div className="footer-para w-full px-5 md:w-[20vw] mt-5 md:mt-8">
              <h1 className='footer-para-text text-[#FAEADE] text-[3.8vw] md:text-[1.0vw] leading-[4vw] md:leading-[110%]'>Buy our drinks at your local store or get them delivered (to your door).</h1>
            </div>
          </div>
        </div>
      </div>
      {<Footer/>}
    </section>
  )
}

export default FooterSection