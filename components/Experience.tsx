"use client";
import { workExperience } from '@/data';
import React from 'react'
import { Button } from './ui/MovingBorder';
import Image from 'next/image';

const Experience = () => {
  return (
    <section id='experience' className='py-20 w-full'>
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className='grid mt-12 w-full lg:grid-cols-4 grid-cols-1 gap-8'>
        { workExperience.map(({id,title,desc,className,thumbnail}) => (
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            key={id}
          >
            <div className='lg:p-10 py-6 p-5 flex max-lg:flex-col lg:items-center gap-2'>
              <Image src={thumbnail} width={128} height={128} alt={thumbnail} className="lg:w-32 md:w-20 w-16" />
              <div className='lg:ms-5 text-left'>
                <h1 className='lg:text-2xl text-lg font-bold'>{ title }</h1>
                <p className='max-sm:text-sm text-white-100 '>{ desc }</p>
              </div>
            </div>

          </Button>

        ))}
      </div>
    </section>
  )
}

export default Experience