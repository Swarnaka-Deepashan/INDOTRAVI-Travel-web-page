import PackagesCard from "../components/PackagesCard"
import { packageDetails } from "../constants"


const Packages = () => {
  return (
    <section id="packages" className="max-container">

      <div className="flex flex-col gap-6">

        <div className="flex justify-between items-end max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <div className='flex flex-col items-start max-lg:items-center'>
            <p className='lg:max-w-lg font-normal text-lg text-slate-gray'>Tour Packages</p>
            <h2 className='text-4xl max-sm:text-3xl font-semibold'>Our Tourist destination</h2>
          </div>
          <p>
            <p className='max-w-md font-normal text-lg max-lg:mt-2 text-center leading-normal text-slate-gray lg:text-end'>Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness</p>
          </p>
        </div>

        <div className="flex mt-2 max-lg:flex-col justify-between items-center gap-6">
        {packageDetails.map((packageDetail, index)=>(
                  <div key={index}>
                      <PackagesCard {...packageDetail}/>
                  </div>
              ))
              }
        </div>
      </div>
    </section>
  )
}

export default Packages