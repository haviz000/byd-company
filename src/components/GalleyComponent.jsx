import { useState } from "react";
import {
  atto31,
  banner,
  dolphin_model,
  m6_model,
  pelanggan_1,
  pelanggan_2,
  seal_model,
} from "../assets";
import { useMobileResponsive } from "../hooks/useMobileResponsive";
import Carousell from "./Carousell";

const Modal = ({ visible, onClose, id }) => {
  if (!visible) return null;

  let items = [];

  const SealItems = [
    {
      image: seal_model,
      alt: "Slide 1",
    },
    {
      image: seal_model,
      alt: "Slide 2",
    },
    {
      image: seal_model,
      alt: "Slide 3",
    },
  ];

  const AttoItems = [
    {
      image: atto31,
      alt: "Slide 1",
    },
    {
      image: atto31,
      alt: "Slide 2",
    },
    {
      image: atto31,
      alt: "Slide 3",
    },
  ];

  const M6Items = [
    {
      image: m6_model,
      alt: "Slide 1",
    },
    {
      image: m6_model,
      alt: "Slide 2",
    },
    {
      image: m6_model,
      alt: "Slide 3",
    },
  ];

  const DolphinItems = [
    {
      image: dolphin_model,
      alt: "Slide 1",
    },
    {
      image: dolphin_model,
      alt: "Slide 2",
    },
    {
      image: dolphin_model,
      alt: "Slide 3",
    },
  ];

  const DeliveryItems = [
    {
      image: pelanggan_1,
      alt: "Slide 1",
    },
  ];

  if (id === "byd-seal") {
    items = SealItems;
  }

  if (id === "byd-atto3") {
    items = AttoItems;
  }

  if (id === "byd-m6") {
    items = M6Items;
  }

  if (id === "byd-dolphin") {
    items = DolphinItems;
  }

  if (id === "customer") {
    items = DeliveryItems;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="w-full max-w-lg relative animate-scaleUp">
        <div className="overflow-hidden rounded-lg shadow-md">
          <Carousell items={items} />
        </div>
      </div>
    </div>
  );
};

const GalleryComponent = () => {
  const [showModalGallery, setShowModalGallery] = useState({
    visible: false,
    id: "",
  });
  const isMobile = useMobileResponsive();
  return (
    <div
      className={`bg-white dark:bg-gray-800 ${
        isMobile ? "h-screen" : "h-full"
      } py-6 sm:py-8 lg:py-12`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Galeri
            </h2>

            <p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              Momen bersama para pelanggan BYD
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="#"
            onClick={() =>
              setShowModalGallery({ visible: true, id: "byd-seal" })
            }
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={seal_model}
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Unit BYD SEAL
            </span>
          </a>
          <a
            href="#"
            onClick={() => setShowModalGallery({ visible: true, id: "byd-m6" })}
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={m6_model}
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Unit BYD M6
            </span>
          </a>

          <a
            href="#"
            onClick={() =>
              setShowModalGallery({ visible: true, id: "byd-atto3" })
            }
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={atto31}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              BYD ATTO 3
            </span>
          </a>
          <a
            href="#"
            onClick={() =>
              setShowModalGallery({ visible: true, id: "byd-dolphin" })
            }
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={dolphin_model}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              BYD DOLPHINE
            </span>
          </a>
          <a
            href="#"
            onClick={() =>
              setShowModalGallery({ visible: true, id: "customer" })
            }
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={pelanggan_1}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Delivery Customer
            </span>
          </a>
        </div>
      </div>
      <Modal
        visible={showModalGallery.visible}
        onClose={() => setShowModalGallery(false)}
        id={showModalGallery.id}
      />
    </div>
  );
};

export default GalleryComponent;
