import { useState } from "react";
import { ModalComponent } from "./ModalComponent";
import { AnimatePresence } from "framer-motion";

export default function Modal(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button className={props.className} onClick={() => setIsOpen(true)}>{props.buttonName}</button>
            <AnimatePresence>
                {isOpen && <ModalComponent close={() => setIsOpen(false)}>{props.children}</ModalComponent>}
            </AnimatePresence>
        </>
    )
}
