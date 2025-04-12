"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
      <footer className="w-full pt-20 pb-10" id="contact">
          <div className='w-full absolute min-h-96 left-0 bottom-0'>
          <Image
                src="/footer-grid.svg"
                alt="grid"
                width={100}
                height={100}
                className="w-full h-full max-h-[2000px] opacity-50"
          />

        </div>

        <div className='flex flex-col items-center relative z-1'>
            <h1 className="heading lg:max-w-[45vw]">
                  Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>
              <p className='text-white-200 text-base md:mt-10 my-5'>Reach out to me today and let's discuss how I can help you achieve your goals.</p>

            <Link href={'/#mail'}>
                  <MagicButton 
                      title="Let's get in touch"
                      icon={<PiArrowUpRightBold />}
                      position='right'
                  />
            </Link>
        </div>

          <div className="w-full flex items-center justify-between mt-16 max-sm:flex-col md:gap-3 gap-6 relative z-1">
            <p className="md:text-base text-sm md:font-normal font-light">
                Copyright © 2024 Yahia Badr
            </p>

            <ul className="flex gap-2">
                { socialMedia.map(({id,img,link}) => (
                    <Link href={link} key={id} >
                        <div className='cursor-pointer w-11 h-11 rounded-lg border border-[rgb(26_30_57)] flex-center shadow-[inset_0px_0px_8px_0.82px_rgba(255,255,255,0.10)]'>
                            <Image src={img} alt="icons" width={23} height={23} />
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
      </footer>
  )
}

export default Footer