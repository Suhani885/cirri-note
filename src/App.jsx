import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";

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
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
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

        <section
          id="about"
          className="px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center items-center text-center bg-neutral-900"
        >
          <h1 className="text-4xl lg:text-6xl mb-16 font-light text-white leading-tight">
            An extraordinary note
            <br />
            for <span className="text-emerald-400">makers, creators..</span>
          </h1>

          <div className="flex justify-center mb-20">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85.8667 46.78L117.693 55.2533M79.0533 72.0866L94.96 76.3267M79.8467 119.773L86.2067 121.473C104.207 126.273 113.207 128.667 120.3 124.593C127.387 120.527 129.8 111.573 134.62 93.68L141.44 68.3666C146.267 50.4667 148.673 41.52 144.58 34.4666C140.487 27.4133 131.493 25.02 113.487 20.2266L107.127 18.5266C89.1267 13.7266 80.1267 11.3333 73.04 15.4066C65.9467 19.4733 63.5333 28.4266 58.7067 46.32L51.8933 71.6333C47.0667 89.5333 44.6533 98.48 48.7533 105.533C52.8467 112.58 61.8467 114.98 79.8467 119.773Z"
                stroke="#00BB77"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M80 139.64L73.6533 141.373C55.6933 146.26 46.72 148.707 39.64 144.553C32.5733 140.407 30.16 131.28 25.3533 113.033L18.5467 87.22C13.7333 68.9734 11.3267 59.8467 15.4133 52.66C18.9467 46.44 26.6667 46.6667 36.6667 46.6667"
                stroke="#00BB77"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <p className="text-xl font-light text-white max-w-2xl mx-auto leading-relaxed">
            Creators around the planet use this app
            <br />
            for creating <span className="text-emerald-400">magic</span>
          </p>
        </section>

        <section id="features" className="px-6 lg:px-12 py-28 mb-30">
          <div className="mb-12 px-4">
            <span className="bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-medium">
              Whats the best
            </span>
            <h2 className="text-4xl lg:text-6xl mt-8 mb-6">Key Features</h2>
            <p className="text-zinc-400 font-light text-lg max-w-2xl">
              We're proud to announce the features
              <br />
              that empower creatives every day.
            </p>
          </div>
          <div className="bg-black py-8 min-h-screen flex items-center justify-center">
            <div className=" w-full flex flex-wrap">
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
                <div className=" rounded-2xl h-[18rem] w-full p-8 flex items-end justify-start aspect-square bg-black border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer group relative">
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
        </section>

        <Footer />
      </div>

      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default App;
