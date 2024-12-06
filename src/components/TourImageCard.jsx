import PropTypes from "prop-types";
import SearchBarTour from "./SearchBarTour";

const TourImageCard = ({ image, label, text }) => {
  return (
    <div
      className="relative [@media(max-width:640px)_or_(max-height:640px)]:h-[20rem] [@media(max-width:640px)_or_(max-height:640px)]:w-[80vw] sm:h-[36rem] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-[102%] hover:shadow-2xl"
    >
      <img src={image} alt={label} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>

      <div className="flex flex-col gap-4 absolute bottom-4 text-white items-center max-sm:gap-1">
        <div className="px-4">
          {/* Remove onOrientationChange prop */}
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
