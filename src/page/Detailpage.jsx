import CountUp from "react-countup";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CAR_DETAILS } from "../components/constant";
import { useMobileResponsive } from "../hooks/useMobileResponsive";

const ModalSpesifikasi = ({
  visible,
  onClose,
  setActiveTab,
  activeTab,
  currentSpec,
  carData,
  handleWhatsAppRedirect,
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-white p-6 rounded-lg shadow-2xl w-11/12 max-w-xs relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              activeTab === "tab1"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {carData.tab1.title}
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`px-4 py-2 text-sm font-medium rounded-lg ${
              activeTab === "tab2"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {carData.tab2.title}
          </button>
        </div>

        {/* Specifications */}
        <div className="bg-gray-100 rounded-lg p-4">
          <ul className="space-y-3 text-sm text-gray-800">
            <li className="flex justify-between border-b border-gray-300 pb-2">
              <span>Battery:</span>
              <span className="font-medium">{currentSpec.battery}</span>
            </li>
            <li className="flex justify-between border-b border-gray-300 pb-2">
              <span>Range:</span>
              <span className="font-medium">{currentSpec.range}</span>
            </li>
            <li className="flex justify-between border-b border-gray-300 pb-2">
              <span>0-100km/h:</span>
              <span className="font-medium">{currentSpec.acceleration}</span>
            </li>
            <li className="flex justify-between border-b border-gray-300 pb-2">
              <span>(AC) 20-80%:</span>
              <span className="font-medium">{currentSpec.acCharging}</span>
            </li>
            <li className="flex justify-between border-b border-gray-300 pb-2">
              <span>(DC) 20-80%:</span>
              <span className="font-medium">{currentSpec.dcCharging}</span>
            </li>
            <li className="flex justify-between font-semibold">
              <span>OTR:</span>
              <span className="text-blue-600">{currentSpec.price}</span>
            </li>
          </ul>
        </div>

        {/* Test Drive Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handleWhatsAppRedirect(carData.title)}
            className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Test Drive
          </button>
        </div>
      </div>
    </div>
  );
};

const Detailpage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("tab2");
  const isMobile = useMobileResponsive();
  const [showModalSpec, setShowModalSpec] = useState(false);

  const carData = CAR_DETAILS.find((car) => car.link === id);

  const currentSpec = activeTab === "tab1" ? carData?.tab1 : carData?.tab2;

  const handleWhatsAppRedirect = (unitName) => {
    const message = `Hallo, Saya mau test drive pada unit ${unitName}`;
    const encodedMessage = encodeURIComponent(message || "Hello!");
    const waUrl = `https://wa.me/6287856658439?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div
      className={`bg-cover bg-no-repeat h-screen ${isMobile && "bg-center"}`}
      style={{ backgroundImage: `url(${carData?.background})` }}
    >
      <Navbar backgroundColor={!carData && "neutral-800"} />
      {carData ? (
        <div>
          <div className="flex text-4xl text-white justify-center font-mono pt-8">
            {carData.title}
          </div>
          {!isMobile && (
            <div className="max-w-md mx-auto bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white rounded-lg shadow-lg p-6 absolute left-0 ml-8">
              <div className="flex justify-center mb-6 gap-2">
                <button
                  onClick={() => setActiveTab("tab1")}
                  className={`px-4 py-2 rounded-t-lg ${
                    activeTab === "tab1"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {carData.tab1.title}
                </button>
                <button
                  onClick={() => setActiveTab("tab2")}
                  className={`px-4 py-2 rounded-t-lg ${
                    activeTab === "tab2"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {carData.tab2.title}
                </button>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Battery:</span>
                    <span>{currentSpec.battery}</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Range:</span>
                    <span>{currentSpec.range}</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-700 pb-2">
                    <span>0-100km/h:</span>
                    <span>{currentSpec.acceleration}</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-700 pb-2">
                    <span>(AC) 20-80%:</span>
                    <span>{currentSpec.acCharging}</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-700 pb-2">
                    <span>(DC) 20-80%:</span>
                    <span>{currentSpec.dcCharging}</span>
                  </li>
                  <li className="flex justify-between font-semibold">
                    <span>OTR:</span>
                    <span>{currentSpec.price}</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => handleWhatsAppRedirect(carData.title)}
                  className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 border-b-blue-700 disabled:border-0 disabled:bg-blue-600 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-blue-600 active:text-gray-300 focus-visible:outline-blue-600 text-sm sm:text-base"
                >
                  Test Drive
                </button>
              </div>
            </div>
          )}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-10 w-full px-4">
            {isMobile && (
              <div className="flex justify-center mb-12">
                <button
                  className="border hover:bg-blue-800 font-mono text-white p-2 rounded-lg opacity-80"
                  onClick={() => setShowModalSpec(true)}
                >
                  Detail Spesifikasi
                </button>
              </div>
            )}
            <div className="flex justify-around items-center gap-x-4 text-white">
              {/* Speed */}
              <div className="flex flex-col items-center">
                <div className="text-lg md:text-2xl font-bold">
                  <CountUp
                    start={0}
                    end={carData.row1Value}
                    duration={2.5}
                    decimals={1}
                    suffix={carData.row1Suffix}
                  />
                </div>
                <div className="text-xs md:text-sm">{carData.row1}</div>
              </div>

              {/* Distance */}
              <div className="flex flex-col items-center">
                <div className="text-lg md:text-2xl font-bold">
                  <CountUp
                    start={0}
                    end={carData.row2Value}
                    duration={2.5}
                    suffix={carData.row2Suffix}
                  />
                </div>
                <div className="text-xs md:text-sm">{carData.row2}</div>
              </div>

              {/* Efficiency */}
              <div className="flex flex-col items-center">
                <div className="text-lg md:text-2xl font-bold">
                  <CountUp
                    start={0}
                    end={carData.row3Value}
                    duration={2.5}
                    suffix={carData.row3Suffix}
                  />
                </div>
                <div className="text-xs md:text-sm">{carData.row3}</div>
              </div>
            </div>
          </div>
          <ModalSpesifikasi
            visible={showModalSpec}
            onClose={() => setShowModalSpec(false)}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            currentSpec={currentSpec}
            carData={carData}
            handleWhatsAppRedirect={handleWhatsAppRedirect}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white font-mono">
          Data mobil tidak ditemukan
        </div>
      )}
    </div>
  );
};

export default Detailpage;
