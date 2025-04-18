"use client"
import React, { useEffect } from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";
  },[])
  return (
    <section id='about'>
      <BentoGrid >
        {gridItems.map(({
          id,title,description,className,img,imgClassName,titleClassName,spareImg
        })=>(
          <BentoGridItem 
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName ={titleClassName}
            spareImg ={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
