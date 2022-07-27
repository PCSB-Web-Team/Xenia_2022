import React from 'react';
import './sponsors.css';

const sponsors = [
  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    name: "abcd efghi"
  },

  {
    url: "https://image.shutterstock.com/shutterstock/photos/1605128917/display_1500/stock-photo-old-brick-black-color-wall-vintage-background-1605128917.jpg",
    name: "abcd efghi"
  },

  {
    url: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
    name: "lmnop qrtts"
  },

  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    name: "abcd efghi"
  },

  {
    url: "https://image.shutterstock.com/shutterstock/photos/1605128917/display_1500/stock-photo-old-brick-black-color-wall-vintage-background-1605128917.jpg",
    name: "abcd efghi"
  },

  {
    url: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
    name: "lmnop qrtts"
  },

  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    name: "abcd efghi"
  },

  {
    url: "https://image.shutterstock.com/shutterstock/photos/1605128917/display_1500/stock-photo-old-brick-black-color-wall-vintage-background-1605128917.jpg",
    name: "abcd efghi"
  },

  {
    url: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
    name: "lmnop qrtts"
  }
]

export default function Sponsors() {
  return (
    <div>
      <div className='pt-0 pb-0'>
        <div className='top-0 left-0 w-screen min-h-full bg-black'> {/*Removed absolute class as it was  causing footer to shift upwards*/}
          <div className='text-center text-6xl h-24 w-full leading-10'> {/*Removed my-20 class as it was pushing the page down*/}
            <h1 className='text-white'>Sponsors</h1>
          </div>

          <div className='xl:grid xl:grid-rows-3 xl:grid-cols-3 xl:gap-y-60 xl:gap-x-28 md:grid md:grid-rows-5 md:grid-cols-2 md:gap-y-60 md:gap-x-28 mx-auto mt-20 w-3/5 h-[500px]'>
            {sponsors.map(sponsor => {
              return (
                <div className="svg-wrapper">

                  <svg height="200" width="320" >
                    <rect className="shape" height="200" width="320"></rect>
                  </svg>

                  <div className="design">
                    <img src={sponsor.url} alt="" className="logo" />
                    <a href="https://www.youtube.com/" className="hover:bg-white hover:text-black">{sponsor.name}</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
