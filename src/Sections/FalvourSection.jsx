import React, { useRef, useEffect } from 'react'
import FalvourTitle from '../Components/FalvourTitle'
import Falvours from '../Components/Falvours'
import { useMediaQuery } from "react-responsive";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const FalvourSection = () => {
  const elementWidth = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 })
  console.log(isMobile);
  useGSAP(() => {
    const tl = gsap.timeline();
    if (!isMobile && elementWidth.current) {
      const totalWidth = elementWidth.current.scrollWidth - window.innerWidth;
      const pinWidth = totalWidth - window.innerWidth - (window.innerWidth / 15);
      tl.to(".flavour-container", {
        scrollTrigger: {
          trigger: ".flavour-container",
          start: "2% top",
          end: `${pinWidth}$`,
          pin:true,
          scrub: 1,
        }
      }).to(".flavour-container", {
        scrollTrigger: {
          trigger: ".flavour-container",
          start: "2% top",
          end: `${totalWidth}px`,
          scrub: 1,
        },
        x: `-${totalWidth}px`,
        ease: "power1.inOut",
      })
      const titleAni = gsap.timeline({
        scrollTrigger:{
          trigger:".flavour-container",
          start:"top top",
          end:"80% top",
          scrub:1,
          // markers:true,
        }
      });
      titleAni.to(".falvour-title1",{
        xPercent:-18,
        ease:"power1.inOut",
      }).to(".falvour-reveal-text",{
        xPercent:-21,
        ease:"power1.inOut",
      },"<").to(".falvour-title2",{
        xPercent:-15,
        ease:"power1.inOut",
      },"<")

    }
  })
  return (
    <section>
      <div ref={elementWidth} className="flavour-container flex flex-col md:flex-row  w-fit h-fit md:h-screen flex-nowrap shrink-0 overflow-hidden pb-[20vw] md:pb-[0vw]">
        <FalvourTitle />
        <Falvours />
      </div>
    </section>
  )
}
export default FalvourSection;