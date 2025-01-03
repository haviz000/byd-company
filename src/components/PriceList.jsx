import { useState } from "react";
import { CAR_PRICE } from "./constant";
import { descSeal } from "../assets";

const Modal = ({ visible, onClose, id }) => {
  if (!visible) return null;

  // Find the car that matches the given id
  const car = CAR_PRICE.find((car) => car.title === id);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-11/12 max-w-sm relative animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="text-center">
          {car ? (
            <>
              <h2 className="text-2xl font-bold mb-4">{car.title}</h2>
              <p className="text-sm text-gray-500 mb-6">
                {car.desc || "No description available."}
              </p>
              <h3 className="text-lg font-semibold mb-2 justify-start flex">
                Specifications:
              </h3>
              <div className="">
                <img
                  src={car.image}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-150 hover:shadow-2xl cursor-pointer"
                />
              </div>
            </>
          ) : (
            <p className="text-gray-500">Car details not found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const PriceListComponent = () => {
  const [isOpenModal, setIsOpenModal] = useState({ visible: false, id: "" });

  const handleDownloadBrochure = (id) => {
    let destinyId = "";

    if (id === "BYD SEAL") {
      destinyId = "15Xg4grT6ok9ZfV3N1UFly-t90CUp68TR";
    }
    if (id === "BYD ATTO 3") {
      destinyId = "15Z-ln45Pgq35Z-gV_4bp1et4J15pglgz";
    }
    if (id === "BYD M6") {
      destinyId = "15V3_7MK1cBvSbqxg9uYNDYyPQ1KojcA7";
    }
    if (id === "BYD DOLPHIN") {
      destinyId = "15Uj4EpiO5-4u_Yj8X9NCc2MeaYEJqaCz";
    }

    window.open(
      `https://drive.google.com/u/1/uc?id=${destinyId}&export=download`
    );
  };

  const handleWhatsAppRedirect = (unitName) => {
    const message = `Hallo, Saya mau beli unit ${unitName}`;
    const encodedMessage = encodeURIComponent(message || "Hello!");
    const waUrl = `https://wa.me/6287856658439?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="space-y-5 px-8 py-12 h-screen mb-6">
      <div className="container flex space-x-2">
        <div className="no-scrollbar overflow-hidden">
          <div className="flex no-scrollbar justify-start space-x-6 items-center overflow-x-auto">
            <button className="font-semibold whitespace-nowrap text-base hover:text-gray-600 transition-colors duration-300 text-gray-900">
              Pilih Mobil Impianmu
            </button>
          </div>
        </div>
        <button className="text-orange-400 font-semibold text-base animate-pulse">
          (Dapatkan Harga Promo !)
        </button>
      </div>

      <div className="demo-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {CAR_PRICE.map((item) => (
          <div className="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
            <div className="h-full">
              <div className="h-full z-10 relative">
                <div className="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div className="flex justify-between flex-col">
                    <div className="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>{item.title}</span>
                    </div>
                    <div className="pt-5 text-gray-500 font-medium text-base space-y-1">
                      {item.type.map((item) => (
                        <div className="flex items-center justify-between">
                          <div className="font-mono">{item.name}</div>
                          <div className="flex items-center">
                            <span className="pt-1.5">Rp</span>
                            <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                              <span>{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="">
                      <ul className="space-y-2 pt-8">
                        <li className="flex items-center font-medium space-x-2 text-black">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Tersedia unit test drive</span>
                        </li>
                        <li className="flex items-center font-medium space-x-2 text-black">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Melayani Jabodetabek dan sekitarnya</span>
                        </li>
                        <li className="flex items-center font-medium space-x-2 text-black">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Proses Mudah dan Cepat</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    onClick={() => handleDownloadBrochure(item.title)}
                    className="flex justify-end text-blue-400 font-mono cursor-pointer hover:text-blue-600"
                  >
                    Download Detail
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => handleWhatsAppRedirect(item.title)}
                      className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                    >
                      <span className="w-full font-semibold text-base">
                        Pilih Unit
                      </span>
                      <svg
                        className="inline-block h-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        visible={isOpenModal.visible}
        onClose={() => setIsOpenModal({ visible: false })}
        id={isOpenModal.id}
      />
    </div>
  );
};

export default PriceListComponent;
