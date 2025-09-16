import React from "react";

const HeroSec = () => {
  return (
    <section className="relative px-6 lg:px-12 pt-32 md:pt-40 pb-12 lg:py-24 min-h-screen flex flex-col justify-center bg-black">
      <div className="absolute inset-0 z-20 pt-20 flex items-center justify-center">
        <img
          src="/src/assets/9e1c37d5af3664f469eb325471af83df05d764bb.png"
          alt="Octopus"
          className="w-auto h-[1000px] lg:h-[1100px] opacity-80 object-contain "
        />
      </div>

      <div className="absolute inset-0 z-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1280 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <g filter="url(#filter0_f_3_512)">
            <path
              d="M-257.5 791C-239.667 871.667 -28.8 466.3 246 363.5C589.5 235 415 320 817.5 528C1220 736 1456 201.5 1578.5 103"
              stroke="white"
              strokeWidth="32"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_3_512"
              x="-513.123"
              y="-149.469"
              width="2341.65"
              height="1207.02"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="120"
                result="effect1_foregroundBlur_3_512"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="relative z-30 hidden lg:flex flex-row items-center justify-between">
        <div className="w-full lg:w-3/5 text-left lg:mb-50 lg:ml-20">
          <h1 className="text-8xl leading-tight">Note Taking</h1>
        </div>
        <div className="w-full lg:w-2/5 text-right lg:pr-20">
          <h1 className="text-8xl leading-tight">
            <span className="text-emerald-500">Redefined</span>
          </h1>
        </div>
      </div>

      <div className="relative z-20 flex lg:hidden flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-5xl leading-tight mb-4">Note Taking</h1>
        <h1 className="text-5xl md:text-5xl leading-tight">
          <span className="text-emerald-500">Redefined</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSec;
