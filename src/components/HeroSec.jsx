const HeroSec = () => {
  return (
    <section className="relative px-6 lg:px-12 pt-32 md:pt-40 pb-12 lg:py-24 min-h-screen flex flex-col justify-center bg-black">
      <div className="absolute bottom-0 right-0 z-20 lg:inset-0 lg:pt-20 lg:flex lg:items-center lg:justify-center">
        <img
          src="/9e1c37d5af3664f469eb325471af83df05d764bb.png"
          alt="Octopus"
          className="w-auto h-[80vh] ml-10 lg:h-[1100px] opacity-80 object-right lg:object-center translate-x-8 lg:translate-x-0"
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
          <h1 className="text-8xl leading-relaxed text-white">Note Taking</h1>
        </div>
        <div className="w-full lg:w-2/5 text-right lg:pr-20">
          <h1 className="text-8xl leading-relaxed">
            <span className="text-emerald-500">Redefined</span>
          </h1>
        </div>
      </div>

      <div className="absolute w-full top-30 left-1/2 transform -translate-x-1/2 z-30 flex lg:hidden flex-col items-center text-center">
        <h1 className="text-6xl leading-relaxed text-white ">Note Taking</h1>
        <h1 className="text-6xl leading-relaxed">
          <span className="text-emerald-500">Redefined</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSec;
