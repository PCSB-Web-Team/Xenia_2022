import React from "react";
import { Link } from "react-router-dom";
import "./sponsors.css";

const sponsors = [
  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    name: "abcd efghi",
  },

  {
    url: "https://image.shutterstock.com/shutterstock/photos/1605128917/display_1500/stock-photo-old-brick-black-color-wall-vintage-background-1605128917.jpg",
    name: "abcd efghi",
  },

  {
    url: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
    name: "lmnop qrtts",
  },

  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    name: "abcd efghi",
  },

  {
    url: "https://image.shutterstock.com/shutterstock/photos/1605128917/display_1500/stock-photo-old-brick-black-color-wall-vintage-background-1605128917.jpg",
    name: "abcd efghi",
  },

  {
    url: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
    name: "lmnop qrtts",
  },

  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    name: "abcd efghi",
  },

  {
    url: "https://image.shutterstock.com/shutterstock/photos/1605128917/display_1500/stock-photo-old-brick-black-color-wall-vintage-background-1605128917.jpg",
    name: "abcd efghi",
  },

  {
    url: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
    name: "lmnop qrtts",
  },
];

export default function Sponsors() {
  return (
    <div className="sponsors">
      <div className="top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-800/40 to-black flex items-center justify-center">
        <div className="text-white text-6xl tracking-widest">Sponsors</div>
      </div>
      <div className="h-auto gap-4 bg-black min-h-[600px] p-4">
        <div className="max-w-[900px] mx-auto grid md:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => {
            return (
              <Link to={sponsor.url}>
                <div className="grid grid-cols-2">
                  <div className="h-[100px] w-[100px] flex items-center justify-center mx-auto">
                    <img src={sponsor.url} alt="" className="block" />
                  </div>
                  <div className=" text-blue-500 uppercase my-auto">
                    {sponsor.name}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
