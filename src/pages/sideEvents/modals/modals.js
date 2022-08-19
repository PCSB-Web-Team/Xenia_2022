export default function Modal({ modal, toggleModal, details, ...props }) {
  console.log(details);
  return (
    modal && (
      <div className="fixed z-10 top-0 left-0 h-screen flex items-center justify-center transition ease-in-out">
        <div
          onClick={toggleModal}
          className="absolute top-0 left-0 bg-black/10 h-screen w-full z-0 backdrop-blur"
        ></div>
        <div className="z-10 backdrop-blur-sm h-[80vh] p-4 bg-black/60 rounded-md overflow-auto font-light  max-w-[600px]">
          <div className="mt-8 text-3xl pb-0 border-b border-cyan-400 text-cyan-400">
            Rules
          </div>
          <ul className="text-white">
            {details.rules.map((rule) => (
              <l1>{rule}</l1>
            ))}
          </ul>
          <div className="mt-8 text-3xl pb-0 border-b border-cyan-400 text-cyan-400">
            Prizes
          </div>
          <ul className="">
            <li className="pt-3">will be Updated Soon</li>
            {/* <li className="pt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimuslique nostrum nulla libero natus.
            </li> */}
          </ul>
          <div className="mt-8 text-3xl pb-0 border-b border-cyan-400 text-cyan-400">
            Benifits
          </div>
          <ul className="modalsp-sde ">
            <li className="pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimuslique nostrum nulla libero natus.
            </li>
            <li className="pt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimuslique nostrum nulla libero natus.
            </li>
          </ul>
          <div className="mt-8 text-3xl pb-0 border-b border-cyan-400 text-cyan-400">
            Contact Us
          </div>
          <ul className="modalsp-sde ">
            <li className="pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimuslique nostrum nulla libero natus.
            </li>
            <li className="pt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimuslique nostrum nulla libero natus.
            </li>
          </ul>
          <button
            className=" absolute top-4 right-4 text-red-600 font-extrabold text-lg"
            onClick={toggleModal}
          >
            X
          </button>
        </div>
      </div>
    )
  );
}
