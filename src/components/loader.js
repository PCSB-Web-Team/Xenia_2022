import "./loader.css";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        className="loader-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .3 }}
        exit={{ opacity: 0 }}>
        <motion.div
          drag
          dragConstraints={{
            top: -30,
            left: -30,
            right: 30,
            bottom: 30,
          }}>
          <div className="loader">
            <div className="holder">
              <div className="box"></div>
            </div>
            <div className="holder">
              <div className="box"></div>
            </div>
            <div className="holder">
              <div className="box"></div>
            </div>
          </div>
        </motion.div>
        <div className="loader-line">
          <span className="loader__anim"></span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;
