import { ScrollSmoother, SplitText } from 'gsap/all';
import Hero from './Sections/Hero'
import Navbar from './Sections/Navbar'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero2 from './Sections/Hero2';
import FalvourSection from './Sections/FalvourSection';
import { useGSAP } from '@gsap/react';
import Nutrition from './Sections/Nutrition';
import Benefits from './Sections/Benefits';
import PeopleTalk from './Sections/PeopleTalk';
import FooterSection from './Sections/FooterSection';
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);



function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: true,
      speed: 1.2,
      ignoreMobileResize: true,
    });
  })

  return (
    <main className='bg-[#FAEADE]'>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Hero2 />
          <FalvourSection />
          <Nutrition />
          <div>
            <Benefits />
            <PeopleTalk />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  )
}

export default App
