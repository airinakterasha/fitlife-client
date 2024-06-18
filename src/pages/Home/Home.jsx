import { Helmet } from "react-helmet-async"
import Banner from "./Banner/Banner"
import Featured from "./Featured/Featured"
import AboutUs from "./AboutUs/AboutUs"
import TitleSection from "../../components/TitleSection/TitleSection"
import ForumSec from "./ForumSec/ForumSec"
import Subscribe from "./Subscribe/Subscribe"

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
      {/* About section */}
      <section>
        <AboutUs></AboutUs>
      </section>

      {/* forum section */}
      <section className="container mx-auto">
        <div className="py-4 md:py-8">
            <TitleSection heading={'Latest Community Forum'} subHeading={'Our forums'}></TitleSection>
        </div> 
        <div className="grid grid-cols-1 md:grid-cols-3">
          <ForumSec></ForumSec>
        </div>
      </section>

      {/* subscribe newsletter section */}
      <section>
        <div className="py-4 md:py-8">
            <TitleSection heading={'subscribe to our newsletter'} subHeading={'Our newsletter'}></TitleSection>
        </div>
        <div className="">
            <Subscribe></Subscribe>  
        </div> 
      </section>
      {/* subscribe newsletter section */}

    </>
  )
}

export default Home