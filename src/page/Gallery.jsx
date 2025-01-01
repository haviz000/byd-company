import GalleryComponent from "../components/GalleyComponent";
import Navbar from "../components/Navbar";

const Gallery = () => {
  return (
    <div>
      <Navbar backgroundColor="gray-800 !important" />
      <GalleryComponent />
    </div>
  );
};

export default Gallery;
