"use client";
import { ReactNode, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import cn from "@/utils";
import MagicButton from "../MagicButton";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { listStack } from "@/data";

interface PropTypes {
  className?: string;
  children?: ReactNode;
}

export const BentoGrid = (props: PropTypes) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-3 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface GridPropTypes {
  className?: string;
  id: number;
  title?: string | ReactNode;
  description?: string | ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const BentoGridItem = (props: GridPropTypes) => {
  const {
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
  } = props;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "qoddri@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* laptop */}
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={220}
              height={220}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>

        {/* tech enthusiast */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={220}
              height={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          <div className="font-sans font-semibold md:max-w-full md:text-xs lg:text-base text-sm text-[#f1f1f1] z-10">
            {description}
          </div>
          <div className={`font-sans text-lg lg:text-xl w-full font-bold z-10`}>
            {title}
          </div>

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="mt-5 grid grid-cols-6 gap-3 md:gap-3 lg:gap-8 items-center min-[1440px]:mt-12 2xl:mt-16 2xl:pt-2">
              {listStack.map((item, i) => (
                <div
                  key={i}
                  className="w-12 h-12 lg:py-4 lg:px-3 py-2 px-3 opacity-50 lg:opacity-100 rounded-lg bg-[#10132E] flex items-center justify-center gap-2"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={35}
                    height={30}
                  />
                </div>
              ))}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute left-28 z-50 ${
                  copied ? "block" : "hidden"
                }`}
              >
                <Image
                  src="/confetti.gif"
                  alt="confetti"
                  height={150}
                  width={150}
                  unoptimized
                />
                {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
