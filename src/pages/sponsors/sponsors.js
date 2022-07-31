import React from 'react';
import './sponsors.css';

const title_sponsors = [
  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  }
]


const co_sponsors = [
  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  },

  {
    url: "https://image.shutterstock.com/shutterstock/photos/1605128917/display_1500/stock-photo-old-brick-black-color-wall-vintage-background-1605128917.jpg",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  },

  {
    url: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
    reference: "https://www.youtube.com/",
    name: "lmnop qrtts"
  },

  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  }
]

const knowledge_sponsors = [
  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  },

  {
    url: "https://image.shutterstock.com/shutterstock/photos/1605128917/display_1500/stock-photo-old-brick-black-color-wall-vintage-background-1605128917.jpg",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  },

  {
    url: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
    reference: "https://www.youtube.com/",
    name: "lmnop qrtts"
  },

  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  },

  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  },

  {
    url: "https://image.shutterstock.com/shutterstock/photos/1605128917/display_1500/stock-photo-old-brick-black-color-wall-vintage-background-1605128917.jpg",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  },

  {
    url: "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
    reference: "https://www.youtube.com/",
    name: "lmnop qrtts"
  },

  {
    url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
    reference: "https://www.youtube.com/",
    name: "abcd efghi"
  }
]


export default function Sponsors() {
  return (
    <div className="bg-black">
        <div className='pb-10'>

          <div className='text-center text-6xl h-24 w-full leading-10'>
            <h1 className='text-white'>Title Sponsors</h1>
          </div>

          <div className='flex flex-wrap items-center w-full justify-center'>
            {title_sponsors.map(title_sponsor => {
              return (
                <div className="sponsors-card mb-8 sm:mb-0">

                  <svg height="200" width="240">
                    <rect className="shape" height="200" width="240"></rect>
                  </svg>

                  <div className="design">
                    <img src={title_sponsor.url} alt="" className="logo" />
                    <a href={title_sponsor.reference} className="hover:bg-white hover:text-black">{title_sponsor.name}</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    
        <div className='pb-10'>

          <div className='text-center text-6xl h-24 w-full leading-10'>
            <h1 className='text-white'>Co Sponsors</h1>
          </div>

          <div className='flex flex-wrap items-center w-full justify-center'>
            {co_sponsors.map(co_sponsor => {
              return (
                <div className="sponsors-card mb-8 sm:mb-0">

                  <svg height="200" width="240">
                    <rect className="shape" height="200" width="240"></rect>
                  </svg>

                  <div className="design">
                    <img src={co_sponsor.url} alt="" className="logo" />
                    <a href={co_sponsor.reference} className="hover:bg-white hover:text-black">{co_sponsor.name}</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        <div className='pb-10'>

          <div className='text-center text-6xl h-24 w-full leading-10'>
            <h1 className='text-white'>Title Sponsors</h1>
          </div>

          <div className='flex flex-wrap items-center w-full justify-center'>
            {knowledge_sponsors.map(knowledge_sponsor => {
              return (
                <div className="sponsors-card mb-8 sm:mb-0">

                  <svg height="200" width="240">
                    <rect className="shape" height="200" width="240"></rect>
                  </svg>

                  <div className="design">
                    <img src={knowledge_sponsor.url} alt="" className="logo" />
                    <a href={knowledge_sponsor.reference} className="hover:bg-white hover:text-black">{knowledge_sponsor.name}</a>
                  </div>
                </div>
              )
            })}
          </div>
          </div>
 
    </div>

)
}
