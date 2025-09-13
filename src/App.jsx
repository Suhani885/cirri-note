import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Footer from "./components/Footer";
import Button from "./components/Button";

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Marquee text
  const marqueeText =
    "Join the launch event • Get one year FREE • Only for limited users •  ";

  // Features array
  const features = [
    {
      id: 1,
      name: "Feature Name",
    },
  ];

  // Add scroll event listener to update navScrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
          className={`bg-emerald-500 text-white py-2 overflow-hidden w-full z-50 ${
            navScrolled ? "hidden" : ""
          } hidden md:block`}
        >
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-sm font-medium mx-4">
              {marqueeText.repeat(10)}
            </span>
          </div>
        </div>

        <nav
          className={`fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 lg:px-12 py-6 transition-colors duration-300 ${
            navScrolled ? "bg-black/40 backdrop-blur" : "bg-black"
          }`}
        >
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <span className="text-emerald-400 text-5xl font-extrabold">
                C
              </span>
            </div>
            <span className="text-2xl font-medium">CirriNote</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center justify-center space-x-16">
              <a
                href="#about"
                className="hover:text-emerald-400 transition-colors"
              >
                About
              </a>
              <a
                href="#features"
                className="hover:text-emerald-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#faqs"
                className="hover:text-emerald-400 transition-colors"
              >
                FAQs
              </a>
              <a
                href="#contact"
                className="hover:text-emerald-400 transition-colors"
              >
                Contact
              </a>
            </div>

            <Button />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Button />
            <button
              className="text-white focus:outline-none p-2"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle navigation"
            >
              {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {mobileNavOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black z-[60] flex flex-col items-center justify-center space-y-8 text-2xl md:hidden">
            <a
              href="#about"
              className="hover:text-emerald-400 transition-colors"
              onClick={() => setMobileNavOpen(false)}
            >
              About
            </a>
            <a
              href="#features"
              className="hover:text-emerald-400 transition-colors"
              onClick={() => setMobileNavOpen(false)}
            >
              Features
            </a>
            <a
              href="#faqs"
              className="hover:text-emerald-400 transition-colors"
              onClick={() => setMobileNavOpen(false)}
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-400 transition-colors"
              onClick={() => setMobileNavOpen(false)}
            >
              Contact
            </a>
          </div>
        )}

        <section
          id="about"
          className="px-6 lg:px-12 pt-24 pb-12 lg:py-24 min-h-screen flex flex-col justify-center"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl mb-8 leading-tight">
                Note Taking <br />
                <span className="text-emerald-400">Redefined</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-12 py-20 min-h-screen flex flex-col justify-center items-center text-center bg-neutral-900">
          <h1 className="text-4xl lg:text-6xl mb-16 font-light text-white leading-tight">
            An extraordinary note
            <br />
            for <span className="text-emerald-400">makers, creators..</span>
          </h1>

          <div className="flex justify-center mb-20">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="30"
                y="20"
                width="60"
                height="80"
                rx="8"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="20"
                y="30"
                width="60"
                height="80"
                rx="8"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="35"
                y1="45"
                x2="55"
                y2="45"
                stroke="#10B981"
                strokeWidth="2"
              />
              <line
                x1="35"
                y1="55"
                x2="65"
                y2="55"
                stroke="#10B981"
                strokeWidth="2"
              />
              <line
                x1="35"
                y1="65"
                x2="60"
                y2="65"
                stroke="#10B981"
                strokeWidth="2"
              />
            </svg>
          </div>

          <p className="text-xl font-light text-white max-w-2xl mx-auto leading-relaxed">
            Creators around the planet use this app
            <br />
            for creating <span className="text-emerald-400">magic</span>
          </p>
        </section>

        <section id="features" className="px-6 lg:px-12 py-24">
          <div className="mb-12">
            <span className="bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-medium">
              Whats the best
            </span>
            <h2 className="text-4xl lg:text-6xl mt-8 mb-6">Key Features</h2>
            <p className="text-zinc-400 font-light text-lg max-w-2xl">
              We're proud to announce with the features
              <br />
              that empower creatives every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`bg-gray-900 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedFeature === feature.id
                    ? "border-2 border-emerald-400 bg-gray-800"
                    : "border border-gray-700"
                } ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                onClick={() =>
                  setSelectedFeature(
                    selectedFeature === feature.id ? null : feature.id
                  )
                }
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className={`text-2xl font-bold transition-colors duration-300 ${
                      selectedFeature === feature.id
                        ? "text-emerald-400"
                        : "text-white"
                    }`}
                  >
                    {feature.name}
                  </h3>
                  <div
                    className={`transition-all duration-300 ${
                      selectedFeature === feature.id
                        ? "rotate-45 text-emerald-400"
                        : "text-gray-400"
                    }`}
                  >
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                {selectedFeature === feature.id && (
                  <div className="animate-fadeIn">
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl lg:text-5xl font-bold mb-8 text-gray-300">
              Creative people worldwide rely
              <br />
              on this app to craft ideas
              <br />
              into <span className="text-emerald-400">digital magic.</span>
            </h3>
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
      `}</style>
    </>
  );
};

export default App;
