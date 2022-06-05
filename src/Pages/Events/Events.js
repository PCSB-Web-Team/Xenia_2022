import React from "react";
// import "./Events.scss"


const Events = () => {
  const teamDetails = [
    {
      
      EventName: "Event1",
     img:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    
    },
    {
      EventName: "Event2",
      img:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-" ,logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
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
      EventName: "Event6",
    
      img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventName: "Event7",
    
      img:"https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventName: "Event8 ",
    
      img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventName: "Event9",
   
      img:"https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    {
      EventName: "Event10",
   
    img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
logo:"https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",    },
    
    
  ];

  return (
    
      <body className="bg-indigo-600">
       
       
    <div className="Events">
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12 "
        style={{ fontFamily: "Quicksand" }}
      >
       Events
      </h1>
      <div className="Shiny">
      
      <div className="Events-main flex justify-evenly flex-wrap w-full xl:w-6/5 xl:mx-auto ">
        {teamDetails.map((member, i) => (
          <div
            key={`member${i}`}
            className="w-[300px] transition-all p-3 hover:bg-white hover:bg-opacity-5 inline-block m-4 cursor-pointer rounded-xl   "
          >
            
              <div className="relative   ">
                
              <img
                  className="max-h-full max-w-full absolute px-12  z-20 hover:animate-bounce  "
                  src={member.logo}
                  alt="Logo1"
                />
       
              <img
                  className="max-h-full max-w-full z-10 pt-16  static animate-none "
                  src={member.img}
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
          
        ))}
      </div>
      
      </div>
      
    </div>
    
    </body>
    
  );
};

export default Events;
