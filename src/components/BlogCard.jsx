import PropTypes from 'prop-types';

const BlogCard = ({image, label, date, text, subtext}) => {
  return (
    <div className="relative overflow-hidden shadow-lg rounded-xl max-md:h-[60vh] md:h-[45vh] lg:h-[70vh] pb-1">
        <div className='h-3/5 '>
            <img src={image} alt={label} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-thin text-slate-gray py-2 px-4 lg:text-xl">{date}</p>
          <p className="text-lg font-medium text-slate-950 px-4 lg:text-2xl">{text}</p>
          <p className="text-lg md:text-xl md:leading-normal font-thin text-slate-gray py-2 px-4 max-[400px]:line-clamp-2 sm:line-clamp-4 leading-7 lg:text-xl">{subtext}</p>
        </div>
    </div>
  )
}

BlogCard.propTypes = {
    image: PropTypes.any.isRequired, 
    label: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    subtext: PropTypes.string.isRequired,
  };

export default BlogCard