import React, { useState } from "react";
import styles from "./question_btn.module.scss";
import { motion, AnimatePresence } from "framer-motion";

type props = {
  num: number;
  ques: string;
  ans: string;
};
export default function Index(props: props) {
  const [rotate, setRotate] = useState(false);

  return (
    <>
      <motion.div layout transition={{ layout: { duration: 0.25, type: "spring" } }} onClick={() => setRotate(!rotate)} className={styles.card}>
        <motion.h2 layout="position">
          {props.ques}
        </motion.h2>
        {
          rotate &&
          <motion.div layout="position">
            <p>{props.ans}</p>
          </motion.div>
        }
      </motion.div>
    </>
  );
}
