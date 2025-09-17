const About = () => {
  return (
    <div id="about" className="lg:h-[1000px] px-6 lg:px-12 bg-neutral-900">
      <div className="h-[800px] flex flex-col justify-center items-center">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-6xl mb-12 font-light text-white leading-tight">
            An extraordinary note
            <br />
            for <span className="text-emerald-400">makers, creators..</span>
          </h1>
          <div className="flex justify-center mb-12">
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
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M80 139.64L73.6533 141.373C55.6933 146.26 46.72 148.707 39.64 144.553C32.5733 140.407 30.16 131.28 25.3533 113.033L18.5467 87.22C13.7333 68.9734 11.3267 59.8467 15.4133 52.66C18.9467 46.44 26.6667 46.6667 36.6667 46.6667"
                stroke="#00BB77"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-xl font-light text-white max-w-2xl mx-auto leading-relaxed">
            Creators around the planet use this app
            <br />
            for creating <span className="text-emerald-400">magic</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
