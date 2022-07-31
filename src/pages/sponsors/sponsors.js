import React from 'react';
import './sponsors.css';

const sponsors = [
 {
  title: "Title Sponsors",
  sponsor_info: [
    {
      url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Golden-Arches.jpeg?auto=format&q=60&fit=max&w=930",
      reference: "https://www.youtube.com/",
      name: "abcd efghi"
    }
  ]
 },

 {
  title: "Co Sponsors",
  sponsor_info: [
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
 },

 {
  title: "Knowledge Sponsors",
  sponsor_info: [
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
 },

 {
  title: "Event Sponsors",
  sponsor_info: [
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
    }

  ]
 },


]

export default function Sponsors() {
  return (
    <div className="bg-black">
      {sponsors.map(sponsor => {
        return (
          <div>
            <div className='pb-10'>

              <div className='text-center text-5xl h-24 w-full leading-10'>
                <h1 className='text-white'>{sponsor.title}</h1>
              </div>

              <div className='flex flex-wrap items-center w-full justify-center'>
                {sponsor.sponsor_info.map(each_sponsor => {
                  return (
                    <div className="sponsors-card mb-8 sm:mb-0">

                      <svg height="200" width="240">
                        <rect className="shape" height="200" width="240"></rect>
                      </svg>

                      <div className="design">
                        <img src={each_sponsor.url} alt="" className="logo" />
                        <a href={each_sponsor.reference}>{each_sponsor.name}</a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
