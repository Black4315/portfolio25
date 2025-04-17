"use client"
import React from 'react'

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasReveal";
import MagicButton from './ui/MagicButton';
import { approach } from '@/data';

export default function Approach() {
    return (
        <section id='approach' className='py-20 w-full z-10 relative'>
            <h1 className='heading'>
                My {" "} <span className="text-purple">Approach</span>
            </h1>
        
            <div className="my-20 flex-col lg:flex-row flex-center w-full gap-4 ">
                {approach.map(({ title, des, order, otherProp },i)=>(
                    <Card key={i}
                        des={des}
                        title={title} 
                        icon={<AceternityIcon order={order} />}
                    >
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName={` ${i == 0 ? 'bg-emerald-900' : i == 1 ? 'bg-pink-900' : 'bg-sky-600'} rounded-3xl overflow-hidden`}
                            {...otherProp}
                            
                        />
                    </Card>

                ))}
                
            </div>
        </section>
       
    );
}

const Card = ({
    title,
    icon,
    des,
    children,
}: {
    title: string;
    des:string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[25rem] lg:h-[35rem] rounded-3xl bg-black-100"
        >
            <Icon className="absolute h-10 w-10 -top-[13.5px] -left-[13.5px] dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-[13.5px] -left-[13.5px] dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -top-[13.5px] -right-[13.5px] dark:text-white text-black opacity-30" />
            <Icon className="absolute h-10 w-10 -bottom-[13.5px] -right-[13.5px] dark:text-white text-black opacity-30" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative px-10 z-20 flex-center flex-col h-full text-center">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full absolute mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
                <p
                    className="text-sm opacity-0 group-hover/canvas-card:opacity-100
                    relative z-10 mt-4 group-hover/canvas-card:text-white text-center
                    group-hover/canvas-card:-translate-y-2 transition duration-200"
                    style={{ color: "#E4ECFF" }}
                >
                    {des}
                </p>
            </div>
        </div>
    );
};

const AceternityIcon = ({order}:any) => {
    return (
        <button className="pointer-events-none relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-purple backdrop-blur-3xl font-bold text-2xl">
                {order}
            </span>
        </button>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};
