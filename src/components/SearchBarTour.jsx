import {
  date,
  budget,
  guest,
  chevronDown,
  verticalDivider,
} from "../assets/icons";

const SearchBarTour = () => {
  return (
    <div>
      <div className="flex max-sm:flex-col gap-4 p-2 backdrop-blur-lg bg-white/20 shadow-2xl rounded-xl sm:rounded-full w-fit">
        {/* Date Section */}
        <div className="flex items-center max-sm:justify-between sm:w-auto ">
          <button className="flex items-center justify-between w-full sm:w-auto text-white">
            <img src={date} alt="Date" className="w-4 h-4 sm:ml-4 mr-2" />
            <span className="text-base">Date</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
            <img
              src={verticalDivider}
              alt="Divider"
              className="hidden sm:block w-6 h-6"
            />
          </button>
        </div>

        {/* Budget Section */}
        <div className="flex items-center sm:w-auto ">
          <button className="flex items-center justify-between w-full sm:w-auto text-white">
            <img src={budget} alt="Budget" className="w-4 h-4 sm:ml-2 mr-2" />
            <span className="text-base">Budget</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
            <img
            src={verticalDivider}
            alt="Divider"
            className="hidden sm:block w-6 h-6"
          />
          </button>
          
        </div>

        {/* Guest Section */}
        <div className="flex items-center sm:w-auto ">
          <button className="flex items-center justify-between w-full sm:w-auto text-white">
            <img src={guest} alt="Guest" className="w-4 h-4 sm:ml-2 mr-2" />
            <span className="text-base">Guest</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>
        </div>

        {/* Search Button */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <button className="text-black bg-white hover:bg-gray-200 rounded-full px-5 py-1 text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarTour;