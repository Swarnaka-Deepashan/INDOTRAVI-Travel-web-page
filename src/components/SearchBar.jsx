import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  date,
  budget,
  guest,
  chevronDown,
  verticalDivider,
} from "../assets/icons";

const SearchBar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showBudgetPopup, setShowBudgetPopup] = useState(false);
  const [budgetRange, setBudgetRange] = useState({ min: 100, max: 1000 });
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const [guestCount, setGuestCount] = useState(1);

  useEffect(() => {
    setBudgetRange({ min: 100, max: 1000 });
  }, []);

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  const toggleBudgetPopup = () => {
    setShowBudgetPopup((prev) => !prev);
  };

  const toggleGuestPopup = () => {
    setShowGuestPopup((prev) => !prev);
  };

  const handleBudgetChange = (type, value) => {
    setBudgetRange((prev) => ({
      ...prev,
      [type]: Number(value),
    }));
  };

  const handleGuestCountChange = (e) => {
    setGuestCount(Number(e.target.value));
  };

  return (
    <div>
      <div className="flex max-sm:flex-col gap-4 p-2 backdrop-blur-lg bg-white/20 shadow-2xl rounded-xl sm:rounded-full">
        {/* Date Section */}
        <div className="relative flex items-center max-sm:justify-between sm:w-auto">
          <button
            onClick={toggleDatePicker}
            className="flex items-center justify-between w-full sm:w-auto text-white hover:text-slate-400 transition duration-300 ease-in-out"
          >
            <img src={date} alt="Date" className="w-4 h-4 sm:ml-4 mr-2" />
            <span className="text-lg">
              {selectedDate ? selectedDate.toLocaleDateString() : "Date"}
            </span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>

          {showDatePicker && (
            <div className="absolute top-full left-0 mt-2 z-50">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setShowDatePicker(false);
                }}
                inline
              />
            </div>
          )}

          <img
            src={verticalDivider}
            alt="Divider"
            className="hidden sm:block w-6 h-6 mx-2"
          />
        </div>

        {/* Budget Section */}
        <div className="relative flex items-center sm:w-auto">
          <button
            onClick={toggleBudgetPopup}
            className="flex items-center justify-between w-full sm:w-auto text-white hover:text-slate-400 transition duration-300 ease-in-out"
          >
            <img src={budget} alt="Budget" className="w-4 h-4 sm:ml-2 mr-2" />
            <span className="text-lg">
              {budgetRange.min === 100 && budgetRange.max === 1000
                ? "Budget"
                : `$${budgetRange.min} - $${budgetRange.max}`}
            </span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>

          {showBudgetPopup && (
            <div className="absolute top-full left-0 mt-2 z-50 bg-white/90 p-3 shadow-lg rounded-xl w-72 sm:w-80 max-w-full">
              <h3 className="text-sm sm:text-lg font-medium text-gray-700 mb-3">
                Select Budget Range
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                  <span>${budgetRange.min}</span>
                  <span>${budgetRange.max}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  value={budgetRange.min}
                  onChange={(e) => handleBudgetChange("min", e.target.value)}
                  className="w-full accent-gray-600"
                />
                <input
                  type="range"
                  min="100"
                  max="5000"
                  value={budgetRange.max}
                  onChange={(e) => handleBudgetChange("max", e.target.value)}
                  className="w-full accent-gray-600"
                />
                <button
                  className="text-white bg-gray-700 hover:bg-gray-800 py-2 px-4 rounded-lg text-sm sm:text-base"
                  onClick={() => setShowBudgetPopup(false)}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          <img
            src={verticalDivider}
            alt="Divider"
            className="hidden sm:block w-6 h-6 mx-2"
          />
        </div>

        {/* Guest Section */}
        <div className="relative flex items-center sm:w-auto">
          <button
            onClick={toggleGuestPopup}
            className="flex items-center justify-between w-full sm:w-auto text-white hover:text-slate-400 transition duration-300 ease-in-out"
          >
            <img src={guest} alt="Guest" className="w-4 h-4 sm:ml-2 mr-2" />
            <span className="text-lg">Guest</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>

          {showGuestPopup && (
            <div className="absolute top-full left-0 mt-2 z-50 bg-white/90 p-3 shadow-lg rounded-xl w-72 sm:w-80 max-w-full">
              <h3 className="text-sm sm:text-lg font-medium text-gray-700 mb-3">
                Select Guest Count
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                  <span>
                    {guestCount} Guest{guestCount > 1 ? "s" : ""}
                  </span>
                </div>
                <input
                  type="number"
                  min="1"
                  value={guestCount}
                  onChange={handleGuestCountChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <button
                  className="text-white bg-gray-700 hover:bg-gray-800 py-2 px-4 rounded-lg text-sm sm:text-base"
                  onClick={() => setShowGuestPopup(false)}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          <img
            src={verticalDivider}
            alt="Divider"
            className="hidden sm:block w-6 h-6 mx-2"
          />
        </div>

        {/* Search Button */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <button className="text-black bg-white hover:bg-gray-200 rounded-full px-8 py-2 text-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
