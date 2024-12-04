import Nav from "./components/Nav";
import { Home, Blogs, Footer, Locations, Packages, Reviews, Tour } from "./sections";


const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="">
        <Home/>
      </section>
      <section className="xl:px-24 px-8 sm:py-24 py-20">
        <Locations/>
      </section>
      <section className="sm:px-24 px-8 sm:py-16 py-12">
        <Tour/>
      </section>
      <section className="sm:px-24 px-8 sm:py-16 py-12">
        <Packages/>
      </section>
      <section className="sm:px-24 px-8 sm:py-16 py-12">
        <Reviews/>
      </section>
      <section className="sm:px-24 px-8 sm:py-16 py-12">
        <Blogs/>
      </section>
      <section className="sm:px-24 px-8 sm:py-16 py-12">
        <Footer/>
      </section>
    </main>
  )
}

export default App