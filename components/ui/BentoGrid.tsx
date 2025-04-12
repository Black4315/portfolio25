'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnim } from "./BackgroundGradientAnim";
import { GlobeDemo } from "./GlobeDemo";
import { useState } from "react";
import Lottie from "react-lottie";

import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const leftLists = ["React.JS", "Three.JS", "Typescript"];
  const rightLists = ["Django", "Next.JS", "Python"];
  const email = 'yahialord4315@gmail.com'
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
  }

  return (
    <div
      className={cn(
        `row-span-1 rounded-3xl overflow-hidden relative border group/bento 
        hover:shadow-xl transition duration-200 shadow-input 
        dark:shadow-none dark:border-[rgb(26_30_57)]
        justify-between flex flex-col space-y-4`,
        className
      )}
      style={{
        background: "rgb(4 7 26)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}

    >

      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id == 6 && (
          <BackgroundGradientAnim>
            <div className="absolute z-50 inset-0 flex items-center justify-center 
            text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl 
            lg:text-7xl"></div>
          </BackgroundGradientAnim>
        )
        }

        <div className={cn(titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 flex flex-col md:h-full min-h-40 p-5 lg:p-10 h-full')}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm lg:text-base z-10 md:text-xs" >
            {description}
          </div>
          <div
            tabIndex={1} role="dialog"
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {id == 3 && (
            <div className="flex gap-2 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-2 lg:gap-3 ">
                <span className="py-4 px-3 rounded-md text-center bg-[#10132E]"></span>
                {leftLists.map((item, i) => (
                  <span key={i} className="text-xs px-5 py-4 lg:py-6 lg:p-8 lg:text-sm opacity-50 lg:opacity-100  text-center rounded-md bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 lg:gap-3">
                {rightLists.map((item, i) => (
                  <span key={i} className="text-xs px-5 py-4 lg:py-6 lg:p-8 lg:text-sm opacity-50 lg:opacity-100  text-center rounded-md bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-md text-center bg-[#10132E]"></span>

              </div>
            </div>
          )}
          {id == 6 && (<div className="mt-5" tabIndex={0}>
           
            <div
              className={`absolute -bottom-5 right-0`}
              >
              {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
            </div>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handelClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />

          </div>)}
          {id == 2 && (<><GlobeDemo /></>)}
        </div>
      </div>
    </div>
  );
};
