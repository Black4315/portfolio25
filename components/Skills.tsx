"use client"
import React, { useState } from 'react'
import { LampContainer } from './ui/Lamp'
import { motion } from "motion/react";
import { skills } from '@/data';
import Tooltip from '@mui/material/Tooltip';
import { CustomTooltip } from './ui/CustomTooltip';

const Skills = () => {

  const [skillSelected, setskillSelected] = useState(0)
  const [anim, setanim] = useState(false)
  return (
    <section id='skills' className='py-20 pb-0'>
      <h1 className="heading">
        My {" "} <span className="text-purple">Skills</span>
      </h1>

      <div className="relative">
        <LampContainer >
          <></>
        </LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: -100 }}
            whileInView={{ opacity: 1, y: -150 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            onViewportEnter={() => setanim(true)}
            viewport={{ once: true }}
            className="w-full max-h-80d"
          >

            <div className="flex-center  w-full flex-col mt-16">

              <div className=' flex-center gap-6 md:gap-8 flex-wrap'>
                {skills.map(({ Icon, name, prog, color }) => (
                  <CustomTooltip key={name} title={name} arrowSx={{ color: color }}>
                    <motion.span
                      animate={anim && {
                        boxShadow: [
                          `0 0 0px ${color}00`,    // off
                          `0 0 30px ${color}40`,   // dim
                          `0 0 0px ${color}00`,    // off again
                          `0 0 0px ${color}00`,    // off
                          `0 0 30px ${color}40`,   // dim
                          `0 0 0px ${color}00`,    // off again
                          `0 0 0px ${color}00`,    // off
                          `0 0 30px ${color}40`,   // dim
                          `0 0 0px ${color}00`,    // off again
                          `0 0 50px ${color}80`,   // flicker
                          `0 0 20px ${color}40`,   // dim
                          `0 0 40px ${color}ba`,   // final glow
                        ],
                      }}
                      transition={anim ? {
                        delay:0.5,
                        duration: 2,
                        times: [0, 0.1, 0.2, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.9, 0.95, 1],
                        ease: "easeInOut",
                      
                      }:undefined}
                      viewport={{ once: true }}
                      className="text-3xl md:text-5xl nshadow-[0_0_150px_#a75cef]  rounded-full text-black-100 p-3 md:p-4 backdrop-blur-xl hover:scale-105 hovesFr:transition hovers:duration-500 skill"
                      style={{
                        background: color,
                        // boxShadow: `0 0 60px  ${color}80`, // 80 = 50% opacity in hex #a855f7
                      }}
                    >
                      <Icon />
                    </motion.span>
                  </CustomTooltip>
                ))}
              </div>
            </div>
          </motion.div>

      </div>
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