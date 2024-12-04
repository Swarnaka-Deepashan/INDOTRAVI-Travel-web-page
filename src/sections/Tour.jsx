import { tourGuide } from "../constants"
import TourCard from "../components/TourCard"
import TourImageCard from "../components/TourImageCard"
import { tourImageDetails } from "../constants"

const Tour = () => {
  return (
    <section id="tour" className="max-container">
      <div className="flex max-lg:flex-col-reverse justify-center items-center gap-10">
        <div>
          <TourImageCard {...tourImageDetails} />
        </div>
        <div className="flex flex-col gap-4">
          <div className='flex flex-col items-start max-lg:items-center'>
            <p className='lg:max-w-lg font-normal text-lg text-slate-gray'>How It Works</p>
            <h2 className='text-4xl max-md:text-3xl font-semibold'>One Click For You</h2>
          </div>
          {tourGuide.map((tourGuideElement, index)=>(
                <div key={index}>
                    <TourCard {...tourGuideElement}/>
                </div>
            ))
            }
        </div>
      </div>
    </section>
  )
}

export default Tour