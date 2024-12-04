import PropTypes from 'prop-types';

const TourImageCard = ({image, label, text }) => {
  return (
    <div className="relative max-sm:h-[40vh] max-sm:w-[80vw] sm:h-[40vh] sm:w-[80vw] lg:h-[45vh] lg:w-[35vw] xl:h-[85vh] xl:w-[35vw] rounded-2xl overflow-hidden shadow-lg">
        <img src={image} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-base text-center font-thin">{text}</p>
        </div>
      </div>
  )
}

TourImageCard.propTypes = {
    image: PropTypes.any.isRequired, 
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

export default TourImageCard