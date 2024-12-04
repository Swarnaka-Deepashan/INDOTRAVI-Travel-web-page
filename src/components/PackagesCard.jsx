import PropTypes from 'prop-types';

const PackagesCard = ({image, label}) => {
  return (
    <div className="relative max-sm:h-[20vh] max-sm:w-[90vw] sm:h-[25vh] sm:w-[90vw] lg:h-[65vh] lg:w-[25vw] xl:h-[75vh] xl:w-[25vw] rounded-2xl overflow-hidden shadow-lg">
        <img src={image} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-base text-center font-thin">{label}</p>
        </div>
    </div>
  )
}

PackagesCard.propTypes = {
    image: PropTypes.any.isRequired, 
    label: PropTypes.string.isRequired,
  };


export default PackagesCard