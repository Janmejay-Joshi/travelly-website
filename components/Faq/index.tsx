import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import Question_btn from "../question_btn/index";
import Image from "next/image";
import mobile_img from "../../public/Group 7.png";
import Driver from "../json/Driver.json";
import User from "../json/User.json";

export default function FAQ() {
  const [slide, update_slide] = useState(false);

  const toggle_mode = () => {
    if (slide == true) update_slide(false);
    else update_slide(true);
  };
  return (
    <>
      <div className={styles.faq}>
        <div className={styles.faq_head}>
          <h1>FAQs</h1>
        </div>

        <div className={styles.slider_div} onClick={toggle_mode}>
          <div className={styles.slider}>
            <div
              className={
                slide ? styles.slide_button_before : styles.slide_button_after
              }
            ></div>
            <p className={slide ? styles.p1_after : styles.p1_before}>Driver</p>
            <p className={slide ? styles.p2_before : styles.p2_after}>User</p>
          </div>
        </div>

        <div className={styles.faq_question_box}>
          <div className={styles.question_list}>
            <Question_btn
              num={slide ? Driver[0].id : User[0].id}
              ques={slide ? Driver[0].ques : User[0].ques}
              ans={slide ? Driver[0].ans : User[0].ans}
            />

            <Question_btn
              num={slide ? Driver[1].id : User[1].id}
              ques={slide ? Driver[1].ques : User[1].ques}
              ans={slide ? Driver[1].ans : User[1].ans}
            />

            <Question_btn
              num={slide ? Driver[2].id : User[2].id}
              ques={slide ? Driver[2].ques : User[2].ques}
              ans={slide ? Driver[2].ans : User[2].ans}
            />

            <Question_btn
              num={slide ? Driver[3].id : User[3].id}
              ques={slide ? Driver[3].ques : User[3].ques}
              ans={slide ? Driver[3].ans : User[3].ans}
            />
          </div>

          <div className={styles.image_mobile}>
            <a href="#">
              <Image
                src={mobile_img}
                alt="Play Store"
                width={600}
                height={600}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
