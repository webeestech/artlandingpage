import Image from 'next/image'
import Image1 from '../public/image1.jpg'
import Image2 from '../public/image2.jpg'
import Image3 from '../public/image3.jpg'
import Image4 from '../public/image4.jpg'

export default function Home() {
  return (
    <main>
     <div className='w-full h-screen overflow-hidden'>
        <div className='fixed w-full p-4 flex justify-between
        items-center uppercase text-white mix-blend-difference z-10'>
          <div>logo</div>
          <div>art gallery</div>
          <div>menu</div>
        </div>
        <div className='w-full h-screen flex'>
          <div className='relative w-[25vw] h-screen overflow-hidden'>
            <div className='item-wrapper'>
              <Image className='absolute w-full h-full object-cover scale-150 nimg' src={Image1} alt="Picture of the author" />
              <div className='absolute w-full h-full top-0 left-0 bg-[#dfdbd5]
              img-overlay'></div>
              <div className='absolute w-full h-full flex flex-col justify-between
              self-center uppercase leading-loose py-32 px-8 text-black z-10 hover:text-white'>
                <div className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px]'>
                  the history energy <span className='lg:text-[20px] md:text-[15px] text-[12px] uppercase block place'>italy - xv</span>
                </div>
                <div className='text-white border-2 w-fit p-1.5 text-sm 
                hover:bg-white cursor-pointer transition duration-500 
                hover:text-black md:block hidden'>EXPLORE</div>
              </div>
            </div>
          </div>
          <div className='relative w-[25vw] h-screen overflow-hidden'>
            <div className='item-wrapper'>
              <Image className='absolute w-full h-full object-cover scale-150 nimg' src={Image2} alt="Picture of the author" />
              <div className='absolute w-full h-full top-0 left-0 bg-[#dfdbd5]
              img-overlay'></div>
              <div className='absolute w-full h-full flex flex-col justify-between
              self-center uppercase leading-loose py-32 px-8 text-black z-10 hover:text-white'>
                <div className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px]'>
                  the artist in studio <span className='lg:text-[20px] md:text-[15px] text-[12px] uppercase block place'>france - ix</span>
                </div>
                <div className='text-white border-2 w-fit p-1.5 text-sm 
                hover:bg-white cursor-pointer transition duration-500 
                hover:text-black md:block hidden'>EXPLORE</div>
              </div>
            </div>
          </div>
          <div className='relative w-[25vw] h-screen overflow-hidden'>
            <div className='item-wrapper'>
              <Image className='absolute w-full h-full object-cover scale-150 nimg' src={Image3} alt="Picture of the author" />
              <div className='absolute w-full h-full top-0 left-0 bg-[#dfdbd5]
              img-overlay'></div>
              <div className='absolute w-full h-full flex flex-col justify-between
              self-center uppercase leading-loose py-32 px-8 text-black z-10 hover:text-white'>
                <div className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px]'>
                  the beautiful place <span className='lg:text-[20px] md:text-[15px] text-[12px] uppercase block place'>xiv</span>
                </div>
                <div className='text-white border-2 w-fit p-1.5 text-sm 
                hover:bg-white cursor-pointer transition duration-500 
                hover:text-black md:block hidden'>EXPLORE</div>
              </div>
            </div>
          </div>
          <div className='relative w-[25vw] h-screen overflow-hidden'>
            <div className='item-wrapper'>
              <Image className='absolute w-full h-full object-cover scale-150 nimg' src={Image4} alt="Picture of the author" />
              <div className='absolute w-full h-full top-0 left-0 bg-[#dfdbd5]
              img-overlay'></div>
              <div className='absolute w-full h-full flex flex-col justify-between
              self-center uppercase leading-loose  py-32 px-8 text-black z-10 hover:text-white'>
                <div className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px]'>
                  the nation of history 
                  <span className='lg:text-[20px] md:text-[15px] text-[12px] uppercase block place'>xviii</span>
                </div>
                <div className='text-white border-2 w-fit p-1.5 text-sm 
                hover:bg-white cursor-pointer transition duration-500 
                hover:text-black md:block hidden '>EXPLORE</div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </main>
  )
}
