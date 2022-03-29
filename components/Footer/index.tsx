import React from "react";
import Image from "next/image";
import appStore from "../../public/AppStore.png";
import googlePlay from "../../public/GooglePlay.png";
import Styles from "./Footer.module.scss";
import Phone from "../../public/Rectangle.png";

export default function index() {
  return (
    <>
      <div className={Styles.main_box}>
        <div className={Styles.cover_box}>
          <div className={Styles.left_part}>
            <div className={Styles.content}>
              <h1>Download Travelly App</h1>
              <p>
                We are here to revolutionize, digitalize and standadize travel
                with you. A one stop destination for customers to find multiple
                public transports and for drivers to find potential customers.
              </p>
            </div>
            <div className={Styles.footer_btn}>
              <a href="#" className={Styles.img}>
                <Image src={appStore} alt="app store" />
              </a>
              <a href="#">
                <Image src={googlePlay} alt="Play Store" />
              </a>
            </div>
          </div>
          <div className={Styles.phone_img}>
            <div className={Styles.phone1}>
              <Image src={Phone} alt="Phone" height={412.82} width={211} />
            </div>
            <div className={Styles.phone2}>
              <Image src={Phone} alt="Phone" height={412.82} width={211} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
