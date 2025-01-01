import { Link } from "react-router-dom";

const ModelsCard = ({ title, image, link, textDark, onClick }) => {
  return (
    <Link
      to={link}
      className="flex flex-col items-center p-8 hover:scale-125"
      onClick={onClick}
    >
      <div className={`font-mono ${textDark ? "text-black" : "text-white"}`}>
        {title}
      </div>
      <img src={image} width="400px" height="400px" />
    </Link>
  );
};

export default ModelsCard;
