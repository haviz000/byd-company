const ContactComponent = () => {
    return (
      <div>
        <section
          id="home"
          className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800"
        >
          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white text-black mb-4">
              Hello, I’m Achraf abdeslami{" "}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium dark:text-gray-300 text-gray-600">
              Freelance UI Designer, Fullstack Developer, & Data Miner. I create
              seamless web experiences for end-users.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src="https://c0.wallpaperflare.com/preview/692/415/725/business-portrait-glasses-style.jpg"
              alt="Profile Picture"
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-500 object-cover"
            />
          </div>
        </section>
      </div>
    );
  };
  
  export default ContactComponent;
  