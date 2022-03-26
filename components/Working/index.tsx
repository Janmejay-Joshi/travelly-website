import React, { useRef, useEffect } from 'react'
import Styles from './Working.module.scss'
import MobileImg from '../../public/Group2.png'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const Working = () => {
    const boxRef = useRef<HTMLDivElement>();
    const imgRef = useRef<HTMLDivElement>();
    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: 'power3.inOut' },
            scrollTrigger: {
                start: 'top 70%',
                end: 'bottom 800px',
                trigger: "#img",
                // pin: true,
                scrub: true,
                // markers: true
            }
        });
        tl.from("#box1", {
            x: 300,
            y: 200,
            opacity: 0,
            duration: 1.3,
            ease: "power3.out",
        }).from("#box2", {
            x: -300,
            y: 200,
            opacity: 0,
            duration: 1.3,
            ease: "power3.out",
        }).from("#box3", {
            x: 300,
            y: -200,
            opacity: 0,
            duration: 1.3,
            ease: "power3.out",
        }).from("#box4", {
            x: -300,
            y: -200,
            opacity: 0,
            duration: 1.3,
            ease: "power3.out",
        })
    }, [])
    return (
        <div className={Styles.working}>

            <h1>How <span> travelly</span> Works</h1>

            <div className={Styles.working_container}>

                <div className={Styles.working_container_item_left}>
                    <div className={Styles.working_container_item_detail}
                        id="box1"
                    >
                        <p>1</p>
                        <h3>Request a trip</h3>
                        <span>Choose your pickup and drop-off location, and the trip type that meets your needs</span>
                    </div>
                    <div className={Styles.working_container_item_detail}
                        id="box3">
                        <p>3</p>
                        <h3>Enjoy Your Trip</h3>
                        <span>Meet your driver with the help of
                            our real-time GPS services and
                            enjoy your trip!</span>
                    </div>
                </div>
                <div className={Styles.next_img} >
                    <Image src={MobileImg} alt="" id='img' />
                </div>
                <div className={Styles.working_container_item_right}>
                    <div className={Styles.working_container_item_detail} id="box2">
                        <p>2</p>
                        <h3>Request a trip</h3>
                        <span>Choose your pickup and drop-off location, and the trip type that meets your needs</span>
                    </div>
                    <div className={Styles.working_container_item_detail} id="box4">
                        <p>4</p>
                        <h3>Enjoy Your Trip</h3>
                        <span>Meet your driver with the help of
                            our real-time GPS services and
                            enjoy your trip!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Working