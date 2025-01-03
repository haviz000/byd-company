import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMobileResponsive } from "../hooks/useMobileResponsive";
import ModelsCard from "./Models";
import { CAR_LIST } from "./constant";
import { logo, photo_card, whatsapp } from "../assets";

const Modal = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleWhatsAppRedirect = () => {
    const message = "Hallo, Saya mau konsultasi terkait pembelian mobil BYD";
    const encodedMessage = encodeURIComponent(message || "Hello!");
    const waUrl = `https://wa.me/6287856658439?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      {/* Modal Content */}
      <div className="bg-white p-8 rounded-xl shadow-2xl w-11/12 max-w-sm relative animate-scaleUp">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={photo_card}
            alt="Fauzan Azila"
            className="w-32 h-32 rounded-full shadow-lg"
          />
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">Fauzan Azila</h2>
          <p className="text-md text-gray-500">Brand Consultant BYD</p>
          <p className="text-sm text-gray-500">
            Jl. Raya Serpong Kilometer 7 No.30, Pakulonan, Kota, Kec. Serpong
            Utara, Kota Tangerang Selatan, Banten 15326
          </p>
        </div>

        {/* Contact Actions */}
        <div className="mt-6 flex flex-col gap-4">
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full px-4 py-2 text-black font-semibold rounded-lg shadow-md hover:bg-green-600 hover:text-white flex items-center"
          >
            <img src={whatsapp} width={100} height={100} />
            Hubungi via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalModels = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Modal Content */}
      <div className="absolute w-96 h-max bg-grey-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className="grid grid-cols-2">
          {CAR_LIST.map((item) => (
            <ModelsCard
              key={item.title}
              title={item.title}
              image={item.img}
              link={item.link}
              onClick={() => handleClick(item)} // Handle klik pada card
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ backgroundColor, textDark }) => {
  const isMobile = useMobileResponsive();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalModels, setShowModalModels] = useState(false);

  return (
    <div
      className={`sticky top-0 z-50 flex justify-between pt-8 items-center pb-4 ${
        backgroundColor ? "bg-transparent" : "bg-neutral-800"
      }`}
    >
      <div className="flex justify-between items-center w-full mx-12">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            width="100px"
            height="100px"
            className="cursor-pointer"
            alt="BYD Logo"
          />
        </Link>

        {/* Desktop Menu */}
        {!isMobile ? (
          <div className={`w-2/4 flex justify-around text-white font-mono`}>
            <div
              className="relative cursor-pointer hover:underline"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              Models
              {showDropdown && (
                <div className="absolute w-96 h-max bg-grey-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                  <div className="grid grid-cols-2">
                    {CAR_LIST.map((item) => (
                      <ModelsCard
                        key={item.title}
                        title={item.title}
                        image={item.img}
                        link={item.link}
                        textDark={textDark}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="cursor-pointer hover:underline">
              <Link to="/gallery">Galeri</Link>
            </div>
            <div className="cursor-pointer hover:underline">
              <Link to="/price-list">Daftar Harga</Link>
            </div>
          </div>
        ) : (
          // Mobile Menu
          <div
            className={`fixed bottom-0 left-0 pl-16 bg-neutral-800 w-full`}
          >
            <div className="w-full flex gap-2 text-white font-mono">
              <div
                className="cursor-pointer"
                onClick={() => setShowModalModels(true)}
              >
                Model
              </div>
              <div>|</div>
              <div className="cursor-pointer hover:underline">
                <Link to="/gallery">Galeri</Link>
              </div>
              <div>|</div>
              <div className="cursor-pointer hover:underline">
                <Link to="/price-list">Daftar Harga</Link>
              </div>
            </div>
          </div>
        )}

        {/* Contact Button */}
        <div className="border hover:bg-green-500 font-mono text-white p-2 rounded-lg opacity-80">
          <button onClick={() => setShowModal(true)}>Hubungi Saya</button>
        </div>
      </div>

      {/* Modal */}
      <Modal visible={showModal} onClose={() => setShowModal(false)} />
      <ModalModels
        visible={showModalModels}
        onClose={() => setShowModalModels(false)}
        textDark={textDark}
      />
    </div>
  );
};

export default Navbar;
