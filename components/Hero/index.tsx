import Image from "next/image";
import React from "react";
import Styles from "./Hero.module.scss";
import MobileImg from "../../public/Rectangle.png";
import appStore from "../../public/AppStore.png";
import googlePlay from "../../public/GooglePlay.png";
const Hero = () => {
  return (
    <>
      <div className={Styles.hero}>
        <div className={Styles.hero__text}>
          <h1>
            Only app you need to
            <span> travel</span>
          </h1>
          <p>
            Download Travelly app from playstore, create account and start
            travelling hassle-free
          </p>

          <div className={Styles.hero__button}>
            <a href="#" className={Styles.appstore_img}>
              <Image src={appStore} alt="app store" />
            </a>
            <a href="#" className={Styles.googleplay_img}>
              <Image src={googlePlay} alt="Play Store" />
            </a>
          </div>
        </div>
        <div className={Styles.hero__image}>
          <Image src={MobileImg} alt="mobile" />
        </div>
      </div>
    </>
  );
};

export default Hero;
