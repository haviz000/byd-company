import { CAR_PRICE } from "../components/constant";
import Navbar from "../components/Navbar";
import PriceListComponent from "../components/PriceList";

const PriceList = () => {
  return (
    <div>
      <Navbar backgroundColor="neutral-800" textDark />
      <PriceListComponent />
    </div>
  );
};

export default PriceList;
