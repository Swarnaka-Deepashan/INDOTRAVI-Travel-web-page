import { home01 } from "../assets/images";
import { HomeDetailsCard } from "../components/HomeDetailsCard";
import { statistics } from "../constants";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <section id="home" className="relative flex items-center justify-center">

        <div className="flex relative px-3 py-3 w-full h-[120vh] max-lg:h-[100vh] bg-cover bg-center">
            <img src={home01} alt="Home Image" className="rounded-lg h-full w-full object-cover" />
        </div>

        <div className="absolute top-[25%] w-full px-20 text-center ">
            <h3 className="text-white text-[6vw] max-lg:text-[7vw] font-medium leading-none drop-shadow-lg">Extraordinary natural and cultural charm</h3>
            <p className="text-white text-[2rem] max-lg:text-[3vw] leading-none drop-shadow-2xl mt-4">Exploring Indonesia is an unforgettable adventure</p>
        </div>

        <div className="absolute top-[55%]">
            <SearchBar/>
        </div>
        
        <div className="absolute -bottom-[5%] px-5 flex flex-wrap max-2xl:gap-3 gap-5 justify-center items-center">
            {statistics.map((stat, index)=>(
                <div key={index}>
                    <HomeDetailsCard {...stat}/>
                </div>
            ))
            }
        </div>
    </section>
  )
}

export default Home