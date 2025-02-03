const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-l-4 border-blue-500 pl-2">
            CONTACT INFO
          </h3>
          <p className="text-sm font-bold">Fauzan Azila</p>
          <p>Telp: 0878-5665-8439</p>
          <p>Whatsapp: 0878-5665-8439</p>
          <p>
            Email:{" "}
            <a
              href="mailto:fauzanazila.byd@gmail.com"
              className="text-blue-400 hover:underline"
            >
              fauzanazila.byd@gmail.com
            </a>
          </p>
          <p className="mt-4 text-sm">
            Feel free to contact us and chat with me
          </p>
        </div>

        {/* BYD Tangerang */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-l-4 border-blue-500 pl-2">
            BYD JABODETABEK
          </h3>
          <p className="text-sm font-bold">BYD BIPO Pasar Minggu</p>
          <p>
            BYD Jl. Raya Pasar Minggu Kilometer 7 No.30, Pakulonan, Kota, Kec.
            Pasar Minggu Utara, Kota Tangerang Selatan, Banten 15326
          </p>
          <p>15326</p>
          <div className="mt-4">
            <a
              href="https://www.instagram.com/fauzanazl.byd/profilecard/?igsh=b2pzcWhwMjZjd3Zw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C8.75 0 8.352.02 7.053.075 5.76.13 4.654.364 3.672.746 2.643 1.15 1.786 1.715 1.018 2.482.252 3.249-.313 4.106-.717 5.135-.986 5.913-.988 6.643-.988 12c0 5.361.002 6.086.273 6.865.404 1.029.969 1.886 1.736 2.653.768.768 1.625 1.333 2.653 1.737.778.27 1.503.272 6.865.272 5.359 0 6.086-.002 6.865-.273 1.027-.404 1.885-.969 2.653-1.736.768-.768 1.333-1.626 1.737-2.653.27-.779.272-1.504.272-6.865 0-5.359-.002-6.086-.272-6.865-.404-1.027-.969-1.886-1.736-2.653-.768-.768-1.626-1.333-2.653-1.737C18.085.022 17.359.02 12 0zM12 2c5.247 0 5.792.002 6.209.055 1.182.155 1.89.666 2.299 1.075.409.409.92 1.117 1.075 2.299.053.417.055.962.055 6.209s-.002 5.792-.055 6.209c-.155 1.182-.666 1.89-1.075 2.299-.409.409-1.117.92-2.299 1.075-.417.053-.962.055-6.209.055s-5.792-.002-6.209-.055c-1.182-.155-1.89-.666-2.299-1.075-.409-.409-.92-1.117-1.075-2.299C2.002 17.792 2 17.247 2 12s.002-5.792.055-6.209C2.21 4.609 2.721 3.901 3.13 3.492 3.539 3.083 4.247 2.572 5.429 2.417 5.847 2.365 6.393 2.363 12 2.363zm0 3.179a6.458 6.458 0 00-6.457 6.458A6.458 6.458 0 0012 18.457a6.458 6.458 0 006.457-6.458A6.458 6.458 0 0012 5.179zm0 2a4.458 4.458 0 014.457 4.457A4.458 4.458 0 0112 16.093 4.458 4.458 0 017.543 11.636 4.458 4.458 0 0112 7.179zM19.458 4.063a1.1 1.1 0 11-2.197 0 1.1 1.1 0 012.197 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Get Our Location */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-l-4 border-blue-500 pl-2">
            GET OUR LOCATION
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4074.4682911383957!2d106.65064187513903!3d-6.2607838612953115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb8c919b8de1%3A0xc2aca1d216db57d3!2sBYD%20BIPO%20Pasar Minggu!5e1!3m2!1sid!2sid!4v1735875024631!5m2!1sid!2sid"
            className="w-full h-64 rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
