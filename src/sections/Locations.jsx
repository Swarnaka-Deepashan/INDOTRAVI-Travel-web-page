import { locations } from "../constants";
import LocationsCard from "../components/LocationsCard";

const Locations = () => {
  return (
    <section id="locations" className="max-container">
      <div className="flex mb-8 justify-between items-end max-lg:flex-col max-lg:items-center max-lg:justify-center">
        <div className="flex flex-col items-start max-lg:items-center">
          <p className="lg:max-w-lg font-normal text-lg text-slate-gray">
            Best Location
          </p>
          <h2 className="text-4xl max-md:text-3xl font-semibold">
            Indonesian tourism
          </h2>
        </div>
        <p>
          <p className="max-w-md font-normal text-lg max-lg:mt-4 text-center leading-normal text-slate-gray lg:text-end">
            Extra ordinary natural beauty, enjoy the rich culture, and
            experience the friendlisness of the local people
          </p>
        </p>
      </div>

      {/* First Row */}
      <div className="flex max-md:flex-col gap-4 max-md:gap-2">
        <div className="flex-[2]">
          <LocationsCard {...locations[0]} />
        </div>
        <div className="flex-[1]">
          <LocationsCard {...locations[1]} />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex max-md:flex-col gap-4 max-md:gap-2 mt-4 max-md:mt-2">
        <div className="flex-[1]">
          <LocationsCard {...locations[2]} />
        </div>
        <div className="flex-[2]">
          <LocationsCard {...locations[3]} />
        </div>
      </div>
    </section>
  );
};

export default Locations;
