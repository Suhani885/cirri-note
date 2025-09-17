import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import About from "./components/About";

const App = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black text-white ">
        <div
          className={`fixed top-0 left-0 w-full bg-emerald-700 text-white py-3 overflow-hidden z-30 transition-transform duration-800 ${
            navScrolled ? "-translate-y-full" : "translate-y-0"
          } hidden md:block`}
        >
          <div className="animate-marquee whitespace-nowrap flex items-center">
            <span className="text-sm font-medium flex items-center">
              {Array.from({ length: 100 }).map((_, i) => (
                <span key={i} className="flex items-center font-light">
                  <span className="mx-4">Join the launch event</span>
                  <span className="text-white text-xs mx-2">♦</span>
                  <span className="mx-4">Get one year FREE</span>
                  <span className="text-white text-xs mx-2">♦</span>
                  <span className="mx-4">Only for limited users</span>
                  <span className="text-white text-xs mx-2">♦</span>
                </span>
              ))}
            </span>
          </div>
        </div>
        <Navbar />
        <HeroSec />

        <div className="lg:sticky top-0 right-0 w-full">
          <About />
        </div>

        <div
          id="features"
          className="relative top-0 z-30 bg-black px-6 lg:px-12 py-28 min-h-screen"
        >
          <div className="mb-12 px-4 max-w-lg">
            <span className="bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-medium">
              Whats the best
            </span>
            <h2 className="text-5xl lg:text-6xl mt-8 mb-6">Key Features</h2>
            <p className="text-zinc-400 font-light text-2xl">
              We're proud to announce with the features that empower creatives
              every day.
            </p>
          </div>

          <div className="hidden lg:block bg-black py-8 min-h-screen items-center justify-center">
            <div className="w-full flex flex-wrap">
              <div className="w-1/3 px-2">
                <div className="bg-[#1c1c1c] h-[18rem] w-full rounded-2xl p-8 flex items-end justify-start aspect-square hover:bg-black hover:border-green-400 border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 text-3xl pb-6 group-hover:text-white group-hover:ml-3 transition-all duration-300">
                    Feature <br /> Name
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-310 p-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-green-400"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className=" rounded-2xl p-8 h-[18rem] w-full flex items-end justify-start aspect-square bg-black border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 text-2xl font-semibold group-hover:text-white transition-colors duration-300"></p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-110"></div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="bg-[#1c1c1c] h-[18rem] w-full rounded-2xl p-8 flex items-end justify-start aspect-square hover:bg-black hover:border-green-400 border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 text-3xl pb-6 group-hover:text-white group-hover:ml-3 transition-all duration-300">
                    Feature <br /> Name
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-310 p-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-green-400"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className=" rounded-2xl p-8 h-[18rem] w-full flex items-end justify-start aspect-square bg-black border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 text-2xl font-semibold group-hover:text-white transition-colors duration-300"></p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-110"></div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="bg-[#1c1c1c] h-[18rem] w-full rounded-2xl p-8 flex items-end justify-start aspect-square hover:bg-black hover:border-green-400 border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 text-3xl pb-6 group-hover:text-white group-hover:ml-3 transition-all  duration-300">
                    Feature <br />
                    Name
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-310 p-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-green-400"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="rounded-2xl h-[18rem] w-full p-8 flex items-end justify-start aspect-square bg-black border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 text-2xl font-semibold group-hover:text-white transition-colors duration-300"></p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-110"></div>
                </div>
              </div>
              <div className="w-2/3 px-2">
                <div className="mt-16 justify-start ml-12">
                  <h3 className="text-3xl lg:text-5xl font-light mb-8 text-neutral-500">
                    Creative people worldwide rely
                    <br />
                    on this app to craft ideas
                    <br />
                    into{" "}
                    <span className="text-emerald-400">digital magic.</span>
                  </h3>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="bg-[#1c1c1c] h-[18rem] w-full rounded-2xl p-8 flex items-end justify-start aspect-square hover:bg-black hover:border-green-400 border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 pb-6 text-3xl group-hover:text-white group-hover:ml-3 transition-all duration-300">
                    Feature <br /> Name
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-310 p-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-green-400"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="bg-[#1c1c1c] h-[18rem] w-full rounded-2xl p-8 flex items-end justify-start aspect-square hover:bg-black hover:border-green-400 border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 text-3xl pb-6 group-hover:text-white group-hover:ml-3 transition-all  duration-300">
                    Feature <br />
                    Name
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-310 p-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-green-400"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="bg-[#1c1c1c] h-[18rem] w-full rounded-2xl p-8 flex items-end justify-start aspect-square hover:bg-black hover:border-green-400 border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 text-3xl pb-6 group-hover:text-white group-hover:ml-3 transition-all  duration-300">
                    Feature <br />
                    Name
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-310 p-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-green-400"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="rounded-2xl h-[18rem] w-full p-8 flex items-end justify-start aspect-square bg-black border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
                  <p className="text-gray-300 text-2xl font-semibold group-hover:text-white transition-colors duration-300"></p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-110"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="block lg:hidden py-8">
            <div
              className="overflow-x-scroll scrollbar-hide -mx-6 px-6 mb-12"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#1c1c1c] h-80 rounded-3xl p-8 flex items-end justify-start border-2 border-transparent cursor-pointer relative flex-shrink-0 touch-manipulation hover:bg-black hover:border-green-400 active:bg-black active:border-green-400 group transition-all duration-300 ease-in-out"
                    style={{ width: "320px", minWidth: "320px" }}
                  >
                    <p className="text-gray-300 text-4xl font-light leading-tight transition-all duration-300 group-hover:ml-3 group-hover:text-white group-active:ml-3 group-active:text-white ">
                      Feature <br /> Name
                    </p>
                    <div className="absolute top-8 right-8 opacity-0 transition-all duration-300 group-active:opacity-100 group-active:scale-350">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-green-400"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-2">
              <h3 className="text-3xl sm:text-3xl font-light text-neutral-500 leading-relaxed">
                Creative people worldwide rely on this app to craft ideas into{" "}
                <span className="text-emerald-400">digital magic.</span>
              </h3>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @media (max-width: 1023px) {
          .touch-manipulation {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </>
  );
};

export default App;
