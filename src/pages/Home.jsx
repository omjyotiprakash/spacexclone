// eslint-disable-next-line no-unused-vars
import React from 'react'

const Home = () => {
  const data = [
    {
      launchdate: "May 22, 2026",
      heading: "Starship's Twelfth Flight Test",
      description: null,
      image: null,
      video: 'https://sxcontent9668.azureedge.us/cms-assets/assets/20260522_Starship_Flight12_web1920_v2_71d68b5ee9.mp4',
      button: "Watch"
    },
    {
      launchdate: null,
      heading: "Making life multiplanetary",
      description: "SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
      image: null,
      video: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Rotation_Web_HB_d96299f9de.mp4',
      button: "Explore"
    },
    {
      launchdate: null,
      heading: "Revolutionizing space technology",
      description: "SpaceX's Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
      image: "https://sxcontent9668.azureedge.us/cms-assets/assets/Revolutionizing_Space_Tech_Desktop_ec67ad03c2.jpg",
      video: null,
      button: "Learn More"
    },
    {
      launchdate: null,
      heading: "World's leading launch service provider",
      description: "SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity's ability to access space into something as routine as air travel.",
      image: null,
      video: "https://sxcontent9668.azureedge.us/cms-assets/assets/Space_X_Falcon_Heavy_UAS_Landing_DESKTOP_compress_b4568daf9c_5e2026727a.mp4",
      button: "Reserve Your Ride"
    },
    {
      launchdate: null,
      heading: "Advancing human spaceflight",
      description: "Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
      image: "https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg",
      video: null,
      button: "Join a Mission"
    },
    {
      launchdate: null,
      heading: "Delivering high-speed internet from space",
      description: "Starlink is the world's most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
      image: null,
      video: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_12_10_20250428_Deploy_website_DESKTOP_14fe7e072c.mp4',
      button: "Order Now"
    }
  ]

  return (
    <div className='w-screen'>
      {data.map((ele, index) => (
        <div key={index}>
          <div className='relative w-screen h-screen'>
            {
              ele.video ? <video src={ele.video} autoPlay muted loop playsInline className='absolute top-0 left-0 w-full h-full object-cover'/> : <img src={ele.image} alt={ele.heading} className='absolute top-0 left-0 w-full h-full object-cover' />
            }

            <div className='absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-10' />

            <div className={`absolute bottom-50 z-20 flex flex-col items-start gap-4 max-w-xl ${ele.image ? 'right-20' : 'left-20'}`}>
              {
                ele.launchdate && <p className='text-white/70 text-xs uppercase tracking-widest'>{ele.launchdate}</p>
              }

              <h1 className='text-white text-5xl font-black uppercase leading-tight tracking-wide'>
                {ele.heading}
              </h1>

              {
                ele.description && <p className='text-white/80 text-sm leading-relaxed max-w-md'>{ele.description}</p>
              }

              <button className='flex items-center justify-between gap-6 uppercase text-white text-xs tracking-widest border border-white/50 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer mt-2'>
                {ele.button}
                <span>→</span>
              </button>

            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Home