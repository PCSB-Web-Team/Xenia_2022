import React from "react";
import "./events.css";

const Events = () => {
  const teamDetails = [
    {
      EventName: "Event1",

      img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
    {
      EventName: "Event2",

      img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
    {
      EventName: "Event3",

      img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
    {
      EventName: "Event4 ",

      img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
    {
      EventName: "Event5",

      img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
    {
      EventName: "Event6",

      img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
    {
      EventName: "Event7",

      img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
  ];
  const Details = [
    
    {
      EventName: "Event8 ",

      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
    {
      EventName: "Event9",

      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
    {
      EventName: "Event10",

      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
      logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
      team_info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
    },
  ];
  return (
    <body className="bg-black">
      
      <div className="Events">
        <h1
          className="title text-6xl font-semibold text-center text-white pb-12 "
          style={{ fontFamily: "Quicksand" }}
        >
          Events
        </h1>
        
        {/* <div class="card__collection clear-fix"> */}
          {/* <div class="cards cards--three">
            <img
              src="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80"
              class="img-responsive"
              alt=""
            />
            <span class="cards--three__rect-1">
              <span class="shadow-1"></span>
              <p>Chris Levnon</p>
            </span>
            <span class="cards--three__rect-2">
              <span class="shadow-2"></span>
            </span>
            <span class="cards--three__circle"></span>
            <ul class="cards--three__list ">
              <li className="carti">
                <i class="far fa-shopping-cart "></i>
              </li>
            </ul>
          </div>
        </div> */}

        <div className="  justify-evenly flex-wrap w-full xl:w-6/5 xl:mx-auto  text-center">
          <div className="text-center">
            <h1 className="text-white text-center text-2xl text-bold">
              Technical
            </h1>
            {teamDetails.map((member, i) => (
              
            //      <div class="card__collection clear-fix">
            //    <div key={`member${i}`} className="card_pink cards--three">
            //    <img
            //           className="Logo max-h-full max-w-full absolute px-12  z-20   "
            //           src={member.logo}
            //           alt="Logo1"
            //         />
            //          <img
            //           className="base max-h-full max-w-full z-10 pt-16   "
            //           src={member.img}
            //           alt="Events"
            //         />
            //      <span class="cards--three__rect-1">
            //        <span class="shadow-1"></span>
            //        <p className="eventkanaam">{member.EventName}</p>
            //      </span>
            //      <span class="cards--three__rect-2">
            //        <span class="shadow-2"></span>
            //      </span>
            //      <span class="cards--three__circle"></span>
            //      <ul class="cards--three__list ">
            //        <li className="carti">
            //          <i class="far fa-shopping-cart "></i>
            //        </li>
            //      </ul>
            //    </div>
            //  </div>
              <div
                key={`member${i}`}
                className="cardpink w-[320px] h-auto transition-all p-3  inline-block m-4 cursor-pointer rounded-xl   "
              >
                <div className="app_tooltip">
                <a className="with-tooltip" data-tooltip-content="This is a tooltip" >

                  
                    <span className="icon">
                    
                  
                    <li className="carti">
                      <i class="far fa-shopping-cart  "></i>
                    </li>
                  
                    </span>
                    {/* <span className=" px-20 text-white ">Add to cart</span> */}
                  
                </a>
                </div>
                <div className="relative   ">
                  <div className="">
                    <img
                      className="Logo max-h-full max-w-full absolute px-12  z-20   "
                      src={member.logo}
                      alt="Logo1"
                    />

                    <img
                      className="base max-h-full max-w-full z-10 pt-16   "
                      src={member.img}
                      alt="Events"
                    />
                  </div>
                </div>
                <p className="text_event">

                <p className="text-white  text-center  p-text-white text-allign:center  rounded-2xl font-bold  cursor-pointer   ">
                  {member.EventName}
                </p>
                
                <p className=" text-white text-center pt-5  p-text-white text-allign:center   font-semibold  cursor-pointer   ">
                  {member.team_info}
                </p>
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-white text-center text-2xl text-bold">
              Non-Technical
            </h1>
            {Details.map((member, i) => (
               <div
               key={`member${i}`}
               className="cardgreen w-[320px] h-auto transition-all p-3  inline-block m-4 cursor-pointer rounded-xl   "
             >
               <a className="">
                 
                   <span className="icon ">
                   
                 
                   <li className="carti">
                     <i class="far fa-shopping-cart  "></i>
                   </li>
                 
                   </span>
                   {/* <span className=" px-20 text-white ">Add to cart</span> */}
                 
               </a>
               <div className="relative   ">
                 <div className="">
                   <img
                     className="Logo max-h-full max-w-full absolute px-12  z-20   "
                     src={member.logo}
                     alt="Logo1"
                   />

                   <img
                     className="base max-h-full max-w-full z-10 pt-16   "
                     src={member.img}
                     alt="Events"
                   />
                 </div>
               </div>
               <p className="text_event">

               <p className="text-white  text-center  p-text-white text-allign:center  rounded-2xl font-bold  cursor-pointer   ">
                 {member.EventName}
               </p>
               
               <p className=" text-white text-center pt-5  p-text-white text-allign:center   font-semibold  cursor-pointer   ">
                 {member.team_info}
               </p>
               </p>
             </div>
            ))}{" "}
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css"
      />
    </body>
  );
};

export default Events;
