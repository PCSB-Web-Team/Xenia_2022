import React, { useState } from "react";
import "./modals.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal  rounded-lg my-4 text-cyan-500">
       View More >>>
      </button>

      {modal && (
        <div className="modal ">
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
              <div className="Modals-btn flex justify-center mr-10">
              <button className="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Register
              </button>
              </div>
            <button className="close-modal " onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}

    </div>
  );
}