"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";

const Clients = () => (
    <section id="testimonials" className="py-20">
        <h1 className="heading">
            Kind words from {" "}
            <span className="text-purple"> satisfied clients</span>
        </h1>

        <div className="flex-center mt-6 md:mt-10">
            <div className="flex-center">
                <InfiniteMovingCards 
                    speed="slow"
                    direction="right"
                    items={testimonials}
                />                
            </div>
        </div>
        <div className="flex-center flex-wrap mt-10 gap-4 md:gap-16">
                {companies.map(({id,img,name,nameImg})=>(
                    <div key={id} className="flex gap-3">
                        <Image src={img} width={35} height={35} alt={name}/>
                        <Image src={nameImg} width={100} height={100} alt={name}/>
                    </div>
                ))}
        </div>
    </section>

)

export default Clients