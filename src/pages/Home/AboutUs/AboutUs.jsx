import TitleSection from "../../../components/TitleSection/TitleSection"

const AboutUs = () => {
  return (
    <>
        <div className="">
            <div className="py-4 md:py-8">
                <TitleSection heading={'About Us'} subHeading={'Take a look to know about us'}></TitleSection>
            </div> 
            <div className="">
                <div className="hero" style={{backgroundImage: 'url(https://images.pexels.com/photos/2294400/pexels-photo-2294400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-3xl">
                            <p className="py-32">
                                We position ourselves as the best training studio. We provide tailor-made training based on your individual goal.
                                As for the training, there will be no meaningless moves or over-pushing, and you will have no chance to let your determination go astray. Regardless of your level, our experienced trainers make sure that you will be trained and prepared like a real fighter.
                                To guarantee consistency in the quality of training delivered by each trainer, each of our trainers has completed pad works, bag works and coaching methodologies with our founder and master trainer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs