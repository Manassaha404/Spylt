import React, { useRef } from 'react';
import cards from '../constant/ReviewData';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const PeopleTalk = () => {
    const vidRef = useRef([]);

    const handlePlay = (index) => {
        const video = vidRef.current[index];
        if (video) {
            video.play();
        }
    };
    const handlePause = (index) => {
        const video = vidRef.current[index];
        if (video) {
            video.pause();
        }
    };





    useGSAP(() => {
        gsap.set(".people-talk", {
            marginTop: "-140vh",
        })
        const textTl = gsap.timeline({
            delay:10,
            scrollTrigger: {
                trigger: ".people-talk-container",
                start: "top bottom",
                end: "200% top",
                // markers: true,
                scrub: 1,
            }
        })
        textTl.to(".fri-text", {
            xPercent: 70,
            yPercent: -400,
        }).to(".sec-text", {
            xPercent: 25,
            yPercent: -400,
        }, "<").to(".thi-text", {
            xPercent: -50,
            yPercent: -400,
        }, "<")
        const pinTl = gsap.timeline({
            scrollTrigger:{
                trigger: ".people-talk-container",
                start: "10% top",
                end: "200% top",
                // markers: true,
                scrub: 1.5,
                pin:true
            }
        })
        const cardsTl =gsap.timeline({
            scrollTrigger:{
                trigger:".people-talk-container",
                start:"10% top",
                end:"200% top",
                // markers:true,
                scrub:true,
            }
        })
        cardsTl.from(".card",{
            yPercent:200,
            ease:"power1.inOut",
            stagger:0.2,
        })
    })

    return (
        <section className='people-talk'>
            <div className='people-talk-container bg-[#faeade] w-full h-[120vh] md:h-[140vh] relative'>
                <div className='w-full h-full flex flex-col md:gap-[15vw] items-center pt-[20vh] md:pt-[20vw] gap-[10vw]'>
                    <h1 className='fri-text text-[20vw] md:text-[20vw] leading-[12vw] md:leading-[8vw] uppercase font-bold text-[#222123] tracking-[-.35vw]'>what's</h1>
                    <h1 className='sec-text text-[20vw] md:text-[20vw] leading-[12vw] md:leading-[8vw] uppercase font-bold text-[#E3A458] tracking-[-.35vw]'>everyone</h1>
                    <h1 className='thi-text text-[20vw] md:text-[20vw] leading-[12vw] md:leading-[8vw] uppercase font-bold text-[#222123] tracking-[-.35vw]'>talking</h1>
                </div>
                <div className='cards-container top-[28%] flex flex-nowrap justify-center md:justify-between  absolute w-full  px-10 h-fit'>
                    {cards.map((card, index) => (
                        <div
                            onMouseEnter={() => {
                                handlePlay(index);
                            }}
                            onMouseLeave={() => {
                                handlePause(index);
                            }}
                            key={index}
                            className={`card md:w-90 md:h-[35vw] w-80 h-[520px] bg-amber-400 rounded-3xl overflow-hidden absolute md:relative border-6 border-[#FAEADE] ${index == 0 ? "md:ml-0" : "md:-ml-[7vw]"} shrink-0 ${card.rotation} ${card.translation}`}
                        >
                            <video
                                ref={(el) => (vidRef.current[index] = el)}
                                src={card.src}
                                playsInline
                                loop
                                muted
                                className='size-full object-cover'
                            ></video>
                            <div className='vid-details bottom-0 absolute w-full h-[7vh] pl-4 flex items-center gap-2'>
                                <img src={card.img} className='object-cover' alt={card.name} />
                                <h1 className='text-white text-lg tracking-normal font-semibold'>{card.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PeopleTalk;