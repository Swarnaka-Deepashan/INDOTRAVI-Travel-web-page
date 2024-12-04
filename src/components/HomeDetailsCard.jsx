import PropTypes from 'prop-types';

export const HomeDetailsCard = ({value, label}) => {
    return (
        <div className="min-w-[300px] rounded-[20px] shadow-2xl px-10 py-4 bg-white">
            <div className='flex flex-col justify-center items-center'>
                <p className="text-4xl font-semi-bold font-normal">{value}</p>
                <p className="text-lg mt-1 break-words font-light text-slate-gray">{label}</p>
            </div>
        </div>
    );
}

HomeDetailsCard.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, 
    label: PropTypes.string.isRequired,
  };