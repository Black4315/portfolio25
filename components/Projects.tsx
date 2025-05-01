"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import { PiArrowUpRightBold } from "react-icons/pi";

const Projects = () => (
    <section className="py-20" id="projects">
        <h1 className="heading">
            A small selection of{" "}
            <span className="text-purple">recent projects</span>
        </h1>

        <div className="flex-wrap flex-center p-4  sm:gap-16 mt-16">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className="flex-center w-[80vw] sm:w-[430px] h-[450px] mb-10 " role="button" tabIndex={1}>
                    <PinContainer title={title} href={link}>
                        <div className="relative flex-center w-[80vw] sm:w-[430px] max-sm:h-[220px] mb-10 overflow-hidden">
                            <div className="relative w-full h-full overflow-hidden rounded-xl bg-[#13162d]">
                                <img src="/bg.png" alt="bgimg" />

                            </div>
                            <Image src={img} width={370} height={370} alt={img} className="z-10 max-sm:w-[300px] absolute top-[28px] rotate-s[2.16deg] rounded-[10px] object-cover" />
                        </div>
                        <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">{title}</h1>

                        <p className="lg:text-lg text-sm lg:font-normal font-light line-clamp-2 text-[#BEC1DD] my-[1vh]">
                            {des}
                        </p>

                        <div className="flex items-center justify-between mt-7">
                            <div className="flex items-center justify-start flex-grow-[0.3]">
                                {iconLists.map((icon, index) => (
                                    <div key={index} className={`rounded-full border border-[rgb(26_30_57)] w-full max-w-12 aspect-square flex-center bg-gradient-90 
                                        ${index !=0 ?'-mx-1':'-mr-1'}`}>
                                        <Image src={icon} width={37} height={37} alt={icon} className="p-2" />

                                    </div>
                                ))}
                            </div>

                            <div className="flex-center text-sm lg:text-lg text-purple">
                                <p> Check Live Site</p>
                                <PiArrowUpRightBold className=" ms-1 mt-1" />
                            </div>
                        </div>
                    </PinContainer>
                </div>

            ))}

        </div>
    </section>
)

export default Projects