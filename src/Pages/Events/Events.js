import React from "react";
import "./Events.css"


const Events = () => {
  const teamDetails = [
    {
      
      EventName: "Event1",
     img:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    
    },
    {
      EventName: "Event2",
      img:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-" ,
      logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
    },
    {
      EventName: "Event3",
      
      img:"https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventName: "Event4 ",
   
      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventName: "Event5",
    
      img:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventNameNT: "Event6",
    
      imgNT: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
logoNT:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventNameNT: "Event7",
    
      imgNT:"https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
logoNT:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventNameNT: "Event8 ",
    
      imgNT: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
logoNT:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventNameNT: "Event9",
   
      imgNT:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
logoNT:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventNameNT: "Event10",
   
    imgNT: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
logoNT:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    
    
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
      
      
      <div className=" flex justify-evenly flex-wrap w-full xl:w-6/5 xl:mx-auto ">
        {teamDetails.map((member, i) => (
          <div
            key={`member${i}`}
            className="card w-[310px] h-[320px] transition-all p-3  inline-block m-4 cursor-pointer rounded-xl   "
          >
          <div className="grid grid-cols-2">
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
              <div className="">
              <img
                  className="Logo max-h-full max-w-full absolute px-12  z-20   "
                  src={member.logoNT}
                  alt="Logo1"
                />
       
              <img
                  className="base max-h-full max-w-full z-10 pt-16   "
                  src={member.imgNT}
                  alt="Events"
                />
                         
              </div>
              
              <div>
                
                <br />
                
                <p className="text-white  text-center  p-text-white text-allign:center   px-8 rounded-2xl font-bold  cursor-pointer   ">
                  {member.EventName}
                </p>
                
              </div>
              </div>
            
            
          </div>
          </div>
          
        ))}
      </div>
      
      
      
      
    </div>
    
    </body>
    
  );
};

export default Events;
