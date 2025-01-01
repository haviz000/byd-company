import { banner2 } from "../assets";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div
      className={` bg-cover bg-no-repeat bg-center h-screen`}
      style={{ backgroundImage: `url(${banner2})` }}
    >
      <Navbar backgroundColor="transparent" />
      <div className="fixed bottom-0 w-full text-center pb-24 font-Dancings text-2xl text-white">
        "Powering Your Drive, Empowering the Future"
      </div>
    </div>
  );
};

export default Homepage;
