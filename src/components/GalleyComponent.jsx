import { useState } from "react";
import {
  atto31,
  dolphin_model,
  m6_model,
  pelanggan_1,
  seal1,
  seal2,
  seal3,
  seal4,
  seal5,
  seal6,
  seal7,
  seal8,
  seal9,
  seal10,
  seal11,
  seal12,
  seal13,
  seal14,
  seal15,
  seal_model,
  m61,
  m62,
  m63,
  m64,
  m65,
  m66,
  m67,
  m68,
  m69,
  m610,
  m611,
  dp1,
  dp2,
  dp3,
  dp4,
  dp5,
  dp6,
  dp7,
  dp8,
  dp9,
  dp10,
  atto1,
  atto2,
  atto3,
  atto4,
  atto6,
  atto5,
  atto7,
  atto8,
  atto9,
} from "../assets";
import { useMobileResponsive } from "../hooks/useMobileResponsive";
import Carousell from "./Carousell";

const Modal = ({ visible, onClose, id }) => {
  if (!visible) return null;

  let items = [];

  const SealItems = [
    {
      image: seal8,
      alt: "Seal 8",
    },
    {
      image: seal9,
      alt: "Seal 9",
    },
    {
      image: seal10,
      alt: "Seal 10",
    },
    {
      image: seal1,
      alt: "Seal 1",
    },
    {
      image: seal2,
      alt: "Seal 2",
    },
    {
      image: seal3,
      alt: "Seal 3",
    },
    {
      image: seal4,
      alt: "Seal 4",
    },
    {
      image: seal5,
      alt: "Seal 5",
    },
    {
      image: seal6,
      alt: "Seal 6",
    },
    {
      image: seal7,
      alt: "Seal 7",
    },
    {
      image: seal11,
      alt: "Seal 11",
    },
    {
      image: seal12,
      alt: "Seal 12",
    },
    {
      image: seal13,
      alt: "Seal 13",
    },
    {
      image: seal14,
      alt: "Seal 14",
    },
    {
      image: seal15,
      alt: "Seal 15",
    },
  ];

  const AttoItems = [
    {
      image: atto1,
      alt: "Atto 1",
    },
    {
      image: atto2,
      alt: "Atto 2",
    },
    {
      image: atto3,
      alt: "Atto 3",
    },
    {
      image: atto4,
      alt: "Atto 4",
    },
    {
      image: atto5,
      alt: "Atto 5",
    },
    {
      image: atto6,
      alt: "Atto 6",
    },
    {
      image: atto7,
      alt: "Atto 7",
    },
    {
      image: atto8,
      alt: "Atto 8",
    },
    {
      image: atto9,
      alt: "Atto 9",
    },
  ];

  const M6Items = [
    {
      image: m611,
      alt: "M6 11",
    },
    {
      image: m66,
      alt: "M6 6",
    },
    {
      image: m67,
      alt: "M6 7",
    },
    {
      image: m68,
      alt: "M6 8",
    },
    {
      image: m61,
      alt: "M6 1",
    },
    {
      image: m62,
      alt: "M6 2",
    },
    {
      image: m63,
      alt: "M6 3",
    },
    {
      image: m64,
      alt: "M6 4",
    },
    {
      image: m65,
      alt: "M6 5",
    },
    {
      image: m69,
      alt: "M6 9",
    },
    {
      image: m610,
      alt: "M6 10",
    },
  ];

  const DolphinItems = [
    {
      image: dp8,
      alt: "Dolphin 8",
    },
    {
      image: dp9,
      alt: "Dolphin 9",
    },
    {
      image: dp10,
      alt: "Dolphin 10",
    },
    {
      image: dp1,
      alt: "Dolphin 1",
    },
    {
      image: dp2,
      alt: "Dolphin 2",
    },
    {
      image: dp3,
      alt: "Dolphin 3",
    },
    {
      image: dp4,
      alt: "Dolphin 4",
    },
    {
      image: dp5,
      alt: "Dolphin 5",
    },
    {
      image: dp6,
      alt: "Dolphin 6",
    },
    {
      image: dp7,
      alt: "Dolphin 7",
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
              alt="Mobil BYD SEAL"
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
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={m6_model}
              loading="lazy"
              alt="Mobil BYD M6"
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
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={atto31}
              loading="lazy"
              alt="Mobil BYD ATTO 3"
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
              alt="Mobil BYD Dolphin"
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
              alt="Mobil BYD JABODETABEK"
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
