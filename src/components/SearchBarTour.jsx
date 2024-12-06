import { useEffect, useState, useRef } from "react";
import {
  date,
  budget,
  guest,
  chevronDown,
  verticalDivider,
} from "../assets/icons";

const SearchBarTour = ({ onOrientationChange }) => {
  const [isFlexCol, setIsFlexCol] = useState(false);
  const parentRef = useRef(null);

  // Function to check and update layout based on width
  const updateFlexDirection = () => {
    if (parentRef.current) {
      const parentWidth = parentRef.current.offsetWidth;
      const shouldFlexCol = parentWidth < 500;

      console.log("Parent width:", parentWidth, "Should flex-col:", shouldFlexCol);

      // Update state only if it needs to change
      setIsFlexCol((prev) => {
        if (prev !== shouldFlexCol) {
          console.log("Updating isFlexCol to:", shouldFlexCol);
          return shouldFlexCol;
        }
        return prev;
      });
    }
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      console.log("ResizeObserver triggered");
      updateFlexDirection();
    });

    const currentRef = parentRef.current; // Copy ref to a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    const handleOrientationChange = () => {
      console.log("Orientation changed");
      setIsFlexCol(false); // Reset to default on orientation change
      updateFlexDirection(); // Recheck layout on orientation change
      if (onOrientationChange) {
        onOrientationChange();
      }
    };

    // Add listeners
    window.addEventListener("resize", updateFlexDirection);
    window.addEventListener("orientationchange", handleOrientationChange);

    // Initial check
    updateFlexDirection();

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the copied ref here
      }
      window.removeEventListener("resize", updateFlexDirection);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [onOrientationChange]);

  return (
    <div ref={parentRef}>
      <div
        className={`flex gap-4 p-2 backdrop-blur-lg bg-white/20 shadow-2xl w-fit ${isFlexCol ? "flex-col rounded-xl" : "rounded-full"}`}
      >
        {/* Date Section */}
        <div className={`flex items-center ${isFlexCol ? "justify-between" : "w-auto"}`}>
          <button className={`flex items-center justify-between w-full text-white ${isFlexCol ? "" : "w-auto"}`}>
            <img src={date} alt="Date" className={`w-4 h-4 mr-2 ${isFlexCol ? "" : "ml-4"}`} />
            <span className="text-base">Date</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
            <img src={verticalDivider} alt="Divider" className={`w-6 h-6 ${isFlexCol ? "hidden" : ""}`} />
          </button>
        </div>

        {/* Budget Section */}
        <div className={`flex items-center ${isFlexCol ? "justify-between" : "w-auto"}`}>
          <button className={`flex items-center justify-between w-full text-white ${isFlexCol ? "" : "w-auto"}`}>
            <img src={budget} alt="Budget" className={`w-4 h-4 mr-2 ${isFlexCol ? "" : "ml-2 "}`} />
            <span className="text-base">Budget</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
            <img src={verticalDivider} alt="Divider" className={`w-6 h-6 ${isFlexCol ? "hidden" : ""}`} />
          </button>
        </div>

        {/* Guest Section */}
        <div className={`flex items-center ${isFlexCol ? "justify-between" : "w-auto"}`}>
          <button className={`flex items-center justify-between w-full text-white ${isFlexCol ? "" : "w-auto"}`}>
            <img src={guest} alt="Guest" className={`w-4 h-4 mr-2 ${isFlexCol ? "" : "ml-2 "}`} />
            <span className="text-base">Guest</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>
        </div>

        {/* Search Button */}
        <div className={`w-full sm:w-auto flex ${isFlexCol ? "justify-center" : "justify-end"}`}>
          <button className="text-black bg-white hover:bg-gray-200 rounded-full px-5 py-1 text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarTour;
