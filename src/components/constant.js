import { atto31 } from "../assets";

export const CAR_LIST = [
  {
    title: "BYD ATTO 3",
    img: "/src/assets/BYD_ATTO_3.png",
    link: "/type/byd-atto-3",
  },
  {
    title: "BYD M6",
    img: "/src/assets/BYD_M6.png",
    link: "/type/byd-m6",
  },
  {
    title: "BYD SEAL",
    img: "/src/assets/BYD_SEAL.png",
    link: "/type/byd-seal",
  },
  {
    title: "BYD DOLPHIN",
    img: "/src/assets/BYD_DOLPHIN.png",
    link: "/type/byd-dolphin",
  },
];

export const CAR_DETAILS = [
  {
    background: atto31,
    link: "byd-atto-3",
    title: "BYD ATTO 3",
    row1: "0-100km/j",
    row1Value: 7.3,
    row1Suffix: "detik",
    row2: "Jarak(NEDC)",
    row2Value: 480,
    row2Suffix: "km",
    row3: "Konsumsi Energi",
    row3Value: 16,
    row3Suffix: "kWh/100km",
    tab1: {
      title: "Advance",
      battery: "49,92kWh",
      range: "410Km",
      acceleration: "7,9s",
      acCharging: "6-8 Hours",
      dcCharging: "35 Minutes",
      price: "465.000.000",
    },
    tab2: {
      title: "Superior",
      battery: "60,48kWh",
      range: "480Km",
      acceleration: "7,3s",
      acCharging: "6-8 Hours",
      dcCharging: "35 Minutes",
      price: "515.000.000",
    },
  },
  {
    background: "/src/assets/seal-model.jpg",
    link: "byd-seal",
    title: "BYD SEAL",
    row1: "Jarak (NEDC)",
    row1Value: 3.8,
    row1Suffix: "Detik",
    row2: "0-100km/j",
    row2Value: 650,
    row2Suffix: "KM",
    row3: "Kapasitas Baterai",
    row3Value: 82.5,
    row3Suffix: "kWh",
    tab1: {
      title: "Premium",
      battery: "82,56kWh",
      range: "650Km",
      acceleration: "5,9s",
      acCharging: "6-8 Hours",
      dcCharging: "35 Minutes",
      price: "629.000.000",
    },
    tab2: {
      title: "Performance",
      battery: "82,56kWh",
      range: "580Km",
      acceleration: "3,9s",
      acCharging: "6-8 Hours",
      dcCharging: "35 Minutes",
      price: "719.000.000",
    },
  },
  {
    background: "/src/assets/dolphin-model.jpg",
    link: "byd-dolphin",
    title: "BYD DOLPHIN",
    row1: "0-100km/j",
    row1Value: 7.0,
    row1Suffix: "s",
    row2: "Jarak (NEDC)",
    row2Value: 490,
    row2Suffix: "KM",
    row3: "Kecepatan Penuh",
    row3Value: 160,
    row3Suffix: "Km/jam",
    tab1: {
      title: "Dynamic",
      battery: "44,9kWh",
      range: "410Km",
      acceleration: "12,3s",
      acCharging: "6-8 Hours",
      dcCharging: "35 Minutes",
      price: "365.000.000",
    },
    tab2: {
      title: "Premium",
      battery: "60,48kWh",
      range: "490Km",
      acceleration: "7s",
      acCharging: "6-8 Hours",
      dcCharging: "35 Minutes",
      price: "425.000.000",
    },
  },
  {
    background: "/src/assets/m6-model.jpg",
    link: "byd-m6",
    title: "BYD M6",
    row1: "Jarak Tempuh",
    row1Value: 530,
    row1Suffix: "km",
    row2: "Kapasitas Baterai",
    row2Value: 71.8,
    row2Suffix: "kWh",
    row3: "Torsi Maksimum",
    row3Value: 310,
    row3Suffix: "Nm",
    tab1: {
      title: "Standart",
      battery: "55,4kWh",
      range: "420Km",
      acceleration: "10,1s",
      acCharging: "6-8 Hours",
      dcCharging: "35 Minutes",
      price: "379.000.000",
    },
    tab2: {
      title: "Captain Seat",
      battery: "71,80kWh",
      range: "530Km",
      acceleration: "8.6s",
      acCharging: "6-8 Hours",
      dcCharging: "35 Minutes",
      price: "429.000.000",
    },
  },
];

export const CAR_PRICE = [
  {
    title: "BYD SEAL",
    type: [
      {
        name: "Seal Performance AWD",
        price: "719.000.000",
      },
      {
        name: "Seal Premium",
        price: "629.000.000",
      },
    ],
  },
  {
    title: "BYD DOLPHIN",
    type: [
      {
        name: "Dolphin Premium",
        price: "425.000.000",
      },
      {
        name: "Dolphin Dynamic",
        price: "365.000.000",
      },
    ],
  },
  {
    title: "BYD ATTO 3",
    type: [
      {
        name: "Atto 3 Superior",
        price: "515.000.000",
      },
      {
        name: "Atto 3 Advance",
        price: "465.000.000",
      },
    ],
  },
  {
    title: "BYD M6",
    type: [
      {
        name: "Standart 7 Seater (420 km)",
        price: "379.000.000",
      },
      {
        name: "Standart 7 Seater (530 km)",
        price: "465.000.000",
      },
      {
        name: "Superior Captain 6 Seater",
        price: "429.000.000",
      },
    ],
  },
];
