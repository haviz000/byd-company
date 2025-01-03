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
        <Carousell items={items} />
      </div>

      <div className="w-full text-center pb-24 font-Dancings text-2xl text-black mt-12">
        "Powering Your Drive, Empowering the Future"
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row justify-around px-6 md:px-12 mb-12 bg-slate-800 text-white py-24">
        <div className="text-center md:text-left">
          <div className="font-Motterdam font-bold text-3xl md:text-4xl mb-4">
            Hello,
          </div>
          <div className="font-mono text-xs md:text-sm">
            Welcome in <span className="text-red-500">BYD</span> motor Indonesia
          </div>
          <div className="mt-8 md:mt-12">
            <div className="font-Dancings text-xl md:text-2xl">
              Fauzan Azila
            </div>
            <div className="font-mono text-sm md:text-md">
              <span className="text-red-500">BYD</span> Brand Consultant
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src={pelanggan_2}
            width={400}
            height={400}
            className="rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl mx-auto md:mx-0"
          />
        </div>
      </div>

      <div className="flex justify-around my-24">
        {CAR_LIST.map((item) => (
          <Link
            to={item.link}
            className="items-center flex flex-col rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl mx-auto md:mx-0"
          >
            <img src={item.img} width={400} height={400} />
            <div className="font-mono font-semibold">{item.title}</div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
