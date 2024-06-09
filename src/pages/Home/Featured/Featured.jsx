import TitleSection from "../../../components/TitleSection/TitleSection";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { PiUsersThreeLight } from "react-icons/pi";
import { PiAirTrafficControlBold } from "react-icons/pi";


const Featured = () => {
  return (
    <>
        <div className="container mx-auto">
            <div className="py-4 md:py-8">
                <TitleSection heading={'Featured We are offering'} subHeading={'join the movement'}></TitleSection>
            </div>            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* card 1 */}
                <div className="py-10 overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure className="p-6 pb-0">
                        <div className="text-8xl inline-flex text-center items-center justify-center text-[#F23B3F]">
                            <MdOutlineSportsGymnastics />
                        </div>
                    </figure>
                    {/*  <!-- Body--> */}
                    <div>
                        <header>
                            <h3 className="text-xl font-medium text-slate-700">
                                Fitness Challenges
                            </h3>
                        </header>
                    </div>
                    <p className="text-md p-4">We are organized workout program that offers a consistent, progressive (meaning it gets harder as it goes on) exercise plan performed over a specified period of time, often 30 days.</p>
                </div>
                {/* card 1 end */}
                {/* card 2 */}
                <div className="py-10 overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure className="p-6 pb-0">
                        <div className="text-8xl inline-flex text-center items-center justify-center text-[#F23B3F]">
                            <IoCalendarNumberOutline />
                        </div>
                    </figure>
                    {/*  <!-- Body--> */}
                    <div>
                        <header>
                            <h3 className="text-xl font-medium text-slate-700">
                                Weekly & Monthly Guides
                            </h3>
                        </header>
                    </div>
                    <p className="text-md p-4">
                        Here you will get your ultimate fitness planner. Weekly and Monthly Workout Guide you will get
                    </p>
                </div>
                {/* card 2 end */}
                {/* card 3 */}
                <div className="py-10 overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure className="p-6 pb-0">
                        <div className="text-8xl inline-flex text-center items-center justify-center text-[#F23B3F]">
                            <IoMdTime />
                        </div>
                    </figure>
                    {/*  <!-- Body--> */}
                    <div>
                        <header>
                            <h3 className="text-xl font-medium text-slate-700 capitalize">
                                All time access
                            </h3>
                        </header>
                    </div>
                    <p className="text-md p-4">
                        As a Elite member, you will enjoy the freedom and flexibility to pursue your fitness goals at any time that works for you.
                    </p>
                </div>
                {/* card 3 end */}
                {/* card 4 */}
                <div className="py-10 overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure className="p-6 pb-0">
                        <div className="text-8xl inline-flex text-center items-center justify-center text-[#F23B3F]">
                            <FaHandsHoldingChild />
                        </div>
                    </figure>
                    {/*  <!-- Body--> */}
                    <div>
                        <header>
                            <h3 className="text-xl font-medium text-slate-700 capitalize">
                                Free Childcare
                            </h3>
                        </header>
                    </div>
                    <p className="text-md p-4">
                        Our free childcare service is designed to provide a safe, fun, and nurturing environment for your children while you participate in our fitness classes or work out independently. 
                    </p>
                </div>
                {/* card 4 end */}
                {/* card 5 */}
                <div className="py-10 overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure className="p-6 pb-0">
                        <div className="text-8xl inline-flex text-center items-center justify-center text-[#F23B3F]">
                            <PiUsersThreeLight />
                        </div>
                    </figure>
                    {/*  <!-- Body--> */}
                    <div>
                        <header>
                            <h3 className="text-xl font-medium text-slate-700 capitalize">
                                Flexible Membership Options
                            </h3>
                        </header>
                    </div>
                    <p className="text-md p-4">
                        We are committed to supporting you on your fitness journey, no matter which membership pricing option you choose.
                    </p>
                </div>
                {/* card 5 end */}
                {/* card 6 */}
                <div className="py-10 overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure className="p-6 pb-0">
                        <div className="text-8xl inline-flex text-center items-center justify-center text-[#F23B3F]">
                            <PiAirTrafficControlBold />
                        </div>
                    </figure>
                    {/*  <!-- Body--> */}
                    <div>
                        <header>
                            <h3 className="text-xl font-medium text-slate-700 capitalize">
                                Control strength
                            </h3>
                        </header>
                    </div>
                    <p className="text-md p-4">
                        Control is an immersive, full body strength training class that shines the spotlight on muscular endurance and strength while challenging participants to control their heart rate, technique, and mind.
                    </p>
                </div>
                {/* card 6 end */}
            </div>
        </div>
    </>
  )
}

export default Featured