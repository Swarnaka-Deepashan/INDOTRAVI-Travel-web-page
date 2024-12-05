import PropTypes from "prop-types";
import SearchBarTour from "./SearchBarTour";

const TourImageCard = ({ image, label, text }) => {
  return (
    <div className="relative max-sm:h-[40vh] max-sm:w-[80vw] sm:h-[60vh] sm:w-[80vw] lg:h-[60vh] lg:w-[35vw] xl:h-[80vh] xl:w-[35vw] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-[102%] hover:shadow-2xl">
      <img src={image} alt={label} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>

      <div className="flex flex-col gap-4 absolute bottom-4 text-white items-center max-sm:gap-1">

        <div className="px-4">
          <SearchBarTour />
        </div>

        <div className="px-4">
          <p className="text-base text-center font-light">{text}</p>
        </div>
      </div>
    </div>
  );
};

TourImageCard.propTypes = {
  image: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TourImageCard;
