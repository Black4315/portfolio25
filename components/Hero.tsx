import React from 'react'
import { Spotlight } from './ui/SpotLight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { PiArrowUpRightBold } from 'react-icons/pi'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
      <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex-center dark:bg-black-100 
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>   
      </div>
       {/* background */}

       <div className='flex justify-center relative my-20 z-10'>
        <div className='flex-center flex-col lg:max-w-[60vw] md:max-w-2xl max-w-[89vw]'>
          <p className='uppercase tracking-widest text-xs text-blue-100 max-w-80 text-center
          '>
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Yahia, a Next.js Developer based in Egypt.
          </p>

          <Link href={'#projects'}>
            <MagicButton 
              title='Show my Work'
              icon={<PiArrowUpRightBold />}
              position='right'
            />
          </Link>

        </div>
       </div>
    </div>
  )
}

export default Hero
