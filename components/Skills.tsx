"use client"
import React, { useState } from 'react'
import { LampContainer } from './ui/Lamp'
import { motion } from "motion/react";
import { skills } from '@/data';
import Tooltip from '@mui/material/Tooltip';
import { CustomTooltip } from './ui/CustomTooltip';

const Skills = () => {

  const [skillSelected, setskillSelected] = useState(0)
  return (
    <section id='skills' className='py-20 smd:pb-0'>
      <h1 className="heading">
        My {" "} <span className="text-purple">Skills</span>
      </h1>

      {/* <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 180 }}
          whileInView={{ opacity: 1, y: 200 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full max-h-80"
        > */}

      <div className="flex-center  w-full flex-col mt-16"> 
        
        <div className=' flex-center gap-6 md:gap-8 flex-wrap'>
          {skills.map(({ Icon, name, prog, color }) => (
            <CustomTooltip key={name} title={name} arrowSx={{ color: color }}>
              <span
                className="text-3xl md:text-5xl nshadow-[0_0_150px_#a75cef]  rounded-full text-black-100 p-4 backdrop-blur-xl hover:scale-105 transition duration-500"
                style={{
                  background: color,
                  boxShadow: `0 0 60px ${color}80`, // 80 = 50% opacity in hex #a855f7
                }}
              >
                <Icon />
              </span>
            </CustomTooltip>
          ))}
        </div>
      </div>
      {/* </motion.div>
      </LampContainer> */}
      {/* <div className='flex-center  mt-16'>
            <div className='flex flex-wrap gap-6 w-[70%]'>
              <div className='border backdrop-blur-xl relative w-[24rem] h-[20rem] border-[#f06529] rounded-2xl lg:p-10 py-6 p-5 flex max-lg:flex-col lg:items-center gap-2  before:bg-black-100 before:absolute before:-top-0.5 before:left-6 before:h-1 before:w-20 before:backdrop-blur-xl '>
                <h2 className='text-[#f06529] z-1 bg-black-100 px-1 absolute -top-6 text-5xl left-10'><FaHtml5 /></h2>


              </div>
            </div>
          </div> */}


    </section>
  )
}

export default Skills