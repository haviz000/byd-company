import { Link } from "react-router-dom";
import { atto31, banner, banner2, pelanggan_2, seal_model } from "../assets";
import Carousell from "../components/Carousell";
import { CAR_LIST } from "../components/constant";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const items = [
    {
      image: seal_model,
      alt: "Slide 1",
    },
    {
      image: pelanggan_2,
      alt: "Slide 2",
    },
    {
      image: banner,
      alt: "Slide 3",
    },
  ];
  return (
    <div>
      <div className="bg-neutral-800">
        <Navbar backgroundColor="transparent" />
      </div>
      <div className="">
        <Carousell items={items} isAutoSlide={true}/>
      </div>

      <div className="w-full text-center pb-24 font-Dancings text-2xl text-black mt-12">
        "Powering Your Drive, Empowering the Future"
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 mb-12 bg-slate-800 text-white py-12">
        <div className="text-center md:text-left md:w-1/2">
          <div className="font-Motterdam font-bold text-3xl md:text-4xl mb-4">
            Welcome!
          </div>
          <div className="font-mono text-sm md:text-base leading-relaxed md:leading-loose">
            Explore the future of sustainable mobility with Fauzan Azila, your
            trusted <span className="text-red-500">BYD</span> Brand Consultant.
            Let me guide you in finding the perfect electric vehicle for your
            lifestyle. Your journey toward innovation and sustainability starts
            here.
          </div>
          <div className="mt-8 md:mt-12">
            <div className="font-Dancings text-xl md:text-2xl">
              Fauzan Azila
            </div>
            <div className="font-mono text-sm md:text-base">
              <span className="text-red-500">BYD</span> Brand Consultant
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/3">
          <img
            src={pelanggan_2}
            alt="Fauzan Azila - BYD Consultant"
            className="w-64 md:w-full max-w-sm rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl mx-auto"
          />
        </div>
      </div>

      <div className="flex justify-around my-24 flex-col md:flex-row">
        {CAR_LIST.map((item) => (
          <Link
            to={item.link}
            className="items-center flex flex-col rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl mx-auto md:mx-0"
          >
            <img src={item.img} width={400} height={400} alt="Harga Mobil BYD" />
            <div className="font-mono font-semibold">{item.title}</div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
