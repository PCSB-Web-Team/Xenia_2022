import "./modal.css";
import { motion } from "framer-motion";

const shade = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8 }
};

const modal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.15 } }
};

export function ModalComponent(props) {
    return (
        <motion.div initial="hidden" animate="visible" exit="hidden">
            <motion.div
                variants={shade}
                transition={{ duration: 0.15 }}
                className="modal-shade"
                onClick={props.close}
            />
            <div className="modal-container">
                <motion.div className="modal-box" variants={modal}>
                    {props.children}
                </motion.div>
            </div>
        </motion.div>
    )
}
