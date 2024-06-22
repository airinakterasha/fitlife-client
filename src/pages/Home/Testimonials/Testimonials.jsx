import useTestimonials from "../../../hooks/useTestimonials"
import TestimonialsComp from "./TestimonialsComp";

//multi carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 920 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 920, min: 520 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 520, min: 0 },
    items: 1
  }
};


const Testimonials = () => {
    const [testimonials] = useTestimonials();
    //console.log(testimonials);
    return (
        <Carousel responsive={responsive}>
            {
                testimonials.map(testimoni => <TestimonialsComp key={testimoni._id} testimoni={testimoni}></TestimonialsComp>)
            }
        </Carousel>

    )
}

export default Testimonials