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
      <motion.div className={styles.main_div}>
        <motion.div layout className={styles.disclosure_btn}>
          <motion.div
            layout
            className={styles.btn_top}
            onClick={() => setRotate(!rotate)}
          >
            <motion.div>
              <p>FAQ {props.num}</p>
            </motion.div>
            <motion.div className={rotate ? styles.up : styles.down}>
              <p>^</p>
            </motion.div>
          </motion.div>

          <AnimatePresence>
            {rotate && (
              <motion.div
                className={styles.disclosure_panel}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <motion.p
                  className={styles.ques_desc}
                  layout
                  exit={{ opacity: 0 }}
                >
                  <p className={styles.ques}>{props.ques}</p>
                  <p className={styles.ans}>{props.ques}</p>
                </motion.p>
                {
                  <motion.div
                    layout
                    exit={{ opacity: 0 }}
                    style={{
                      marginTop: "1rem",
                    }}
                    className={styles.icons}
                  ></motion.div>
                }
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}
