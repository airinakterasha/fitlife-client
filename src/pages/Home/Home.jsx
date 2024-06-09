import { Helmet } from "react-helmet-async"
import Banner from "./Banner/Banner"
import Featured from "./Featured/Featured"
import AboutUs from "./AboutUs/AboutUs"

const Home = () => {
  return (
    <>
      <Helmet>
            <title>FitLife | Home</title>
      </Helmet>
      {/* banner section */}
      <section>
          <Banner></Banner>
      </section>
      {/* banner section */}

      {/* featured section */}
      <section>
        <Featured></Featured>
      </section>
      {/* featured section end */}
      <section>
        <AboutUs></AboutUs>
      </section>
      

    </>
  )
}

export default Home