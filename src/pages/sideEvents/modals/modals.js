import { useState } from "react";
import "./modals.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal  rounded-lg my-4">
       View More >>>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content  my-6 ">
            <h1 className="modalshd-sde mt-8 text-4xl ">Rules</h1>
            <hr />
            <ul className="modalsp-sde ">
              <li className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
              <li className="pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
              <li className="pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
              <li className="pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
              <li className="pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
            </ul>
            <h1 className="modalshd-sde mt-8 text-4xl">Prizes</h1>
            <hr />
            <ul className="modalsp-sde ">
              <li className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
              <li className="pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
            </ul>
            <h1 className="modalshd-sde mt-8 text-4xl">Benifits</h1>
            <hr />
            <ul className="modalsp-sde ">
              <li className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
              <li className="pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
            </ul>
            <h1 className="modalshd-sde mt-8 text-4xl">Contact Us</h1>
            <hr />
            <ul className="modalsp-sde ">
              <li className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
              <li className="pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimuslique nostrum nulla libero natus.</li>
            </ul>

            <button className="close-modal " onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}

    </div>
  );
}