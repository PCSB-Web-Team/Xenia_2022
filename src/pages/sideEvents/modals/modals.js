import parseURL from "../../../utils/urlParser";

export default function Modal({ modal, toggleModal, details }) {
  return (
    modal && (
      <div className="fixed z-10 top-0 left-0 w-screen h-screen flex items-center justify-center transition ease-in-out">
        <div
          onClick={toggleModal}
          className="absolute top-0 left-0 bg-black/10 h-screen w-full z-0 backdrop-blur"
        ></div>
        <div className=" w-96 md:w-1/3 px-10 py-5 z-10 backdrop-blur-sm h-[80vh] bg-black/60 rounded-md overflow-auto font-light">
          <div className="text-2xl font-bold pb-2 mt-5 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
            Prizes
          </div>
          <div className="border-t pt-2 px-5 border-slate-600">
            <ol className="text-white ">
              {details?.event?.prizes?.length >= 1 ? (
                details?.event?.prizes?.map((data) => (
                  <li>
                    {data?.position} : Rs. {data?.prize}
                  </li>
                ))
              ) : (
                <div>Coming Soon...</div>
              )}
            </ol>
          </div>

          <div className="text-2xl font-bold pb-2 mt-5 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
            Rules
          </div>
          <div className="border-t pt-2 px-5 border-slate-600">
            <ul className="text-white list-disc">
              {details?.event?.rules[0]?.roundRules?.length >= 1 ? (
                details?.event?.rules[0]?.roundRules?.map((data, index) => {
                  if (index !== details?.event?.rules[0]?.roundRules?.length - 1) return <li>{data}</li>
                  const formURL = parseURL(data)[0] || "#";
                  return <li><a href={formURL} rel="noopener noreferrer" target="_blank" className="text-blue-300 underline">Registration Form 🔗</a></li>
                })
              ) : (
                <div>Come out! No Rules...</div>
              )}
            </ul>
          </div>

          <div className="text-2xl font-bold pb-2 mt-5 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
            Schedule
          </div>
          <div className="border-t pt-2 border-slate-600">
            <ul className="text-gray-300 font-thin  list-disc list-inside">
              {details?.event?.schedule?.map((data) => (
                <li>
                  Round {data.round} : <date>{data.datetime}</date>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-2xl font-bold pb-2 mt-5 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
            Contact Help
          </div>
          <div className="border-t pt-2 border-slate-600 space-y-2 ">
            {details?.event?.contactUs?.map(data => (
              <p>
                <span className="text-blue-300 px-3">
                  {data?.name} :
                </span>
                <p className="inline-block text-blue-300  font-bold font-xl">
                  <a href={`tel:${data?.contact}`}>📞 {data?.contact}</a>
                </p>
              </p>
            ))}
          </div>

          <div className="border-t pt-2 border-slate-600 text-2xl font-normal text-blue-300 pb-2 mt-3 ">
            Team Size :{" "}
            <span className="font-light text-blue-200">
              {details?.event?.teamSize}
            </span>
          </div>

          <div className="border-t pt-2 border-slate-600 text-2xl font-normal text-blue-300 pb-2 ">
            Platform :{" "}
            <span className="font-light text-blue-200">
              {details?.event?.platform}
            </span>
          </div>
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
