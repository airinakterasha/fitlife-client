import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom"
import TitleSection from "../../../components/TitleSection/TitleSection";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const BookedTrainer = () => {
  const bookingTrainer = useLoaderData();
  const {user, packageone, setPackage} = useAuth();
  console.log(bookingTrainer);
  const {_id, trainerName, slotName, trainerImage, slotTime, classes, email, age, profileImage, skills, role, availableDay, availableTime, status} = bookingTrainer;

  const handleBasicPackage = () => {
    
  }


  return (
    <>
        <Helmet>
              <title>FitLife | Booked {trainerName}</title>
        </Helmet>
        <div className="">
            <div className="">
                <div className="py-10">
                  <TitleSection heading={`Booked ${trainerName}`} subHeading={`Book the trainer`}></TitleSection>
                </div>
                {/* profile */}
                <div className="flex justify-center">
                  <div className="p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                      <img src={trainerImage} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div>
                        <h2 className="text-2xl font-semibold">{trainerName}</h2>
                      </div>
                      <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                            <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                          </svg>
                          <span className="dark:text-gray-600 capitalize">Available Slot: {slotName} - {slotTime}</span>
                        </span>

                       
                        <div className="">
                          <div className="flex gap-3">
                          <p className="py-3">Classes: </p>
                            {
                              classes.map((slotClass, index) => <p key={index} className="btn">{slotClass.label}</p>)
                            }
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
                {/* profile end */}

                <div className="">
                  {/* package start */}
                  <section className="pb-6 dark:bg-gray-100 dark:text-gray-900">
                    <div className="container mx-auto p-4 sm:p-10">
                      <div className="mb-16 space-y-4 text-center">
                        <h1 className="text-4xl font-semibold leading-tight">Pricing</h1>
                        <p className="px-4 sm:px-8 lg:px-24">Sunt suscipit eaque qui iure unde labore numquam iusto alias explicabo, pariatur ipsam, cupiditate aliquid modi?</p>
                      </div>
                      <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
                        <div className="relative z-0 flex flex-col items-center p-8 border rounded-md">
                          <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-600 dark:text-gray-50">Personal</span>
                          <p className="my-6 text-4xl font-bold dark:text-violet-600">FREE</p>
                          <ul className="flex-1 space-y-2">
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Lumet consectetur adipisicing</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Lumet consectetur adipisicing</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Lumet consectetur adipisicing</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Lumet consectetur adipisicing</span>
                            </li>
                          </ul>
                          <button 
                          className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-violet-600"
                          >
                            Subscribe price $10
                          </button>
                        </div>
                        <div className="relative flex flex-col items-center p-8 border-2 rounded-md dark:border-violet-600 dark:bg-gray-100">
                          <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-600 dark:text-gray-50">Professional</span>
                          <p className="flex items-center justify-center my-6 space-x-2 font-bold">
                            <span className="text-lg line-through dark:text-gray-700">&nbsp;32€&nbsp;</span>
                            <span className="pb-2 text-4xl">19€</span>
                            <span className="text-lg">/mo</span>
                          </p>
                          <ul className="flex-1 space-y-2">
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Consectetur</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Adipisicing</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Aliquam</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Lumet consectetur facilis</span>
                            </li>
                          </ul>
                          <button className="px-8 py-3 mt-12 text-lg font-semibold uppercase rounded dark:bg-violet-600 dark:text-gray-50">Subscribe price $30</button>
                        </div>
                        <div className="relative z-0 flex flex-col items-center p-8 border rounded-md dark:bg-gray-100">
                          <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-600 dark:text-gray-50">Enterprise</span>
                          <p className="flex items-center justify-center my-6 space-x-2 font-bold">
                            <span className="text-lg line-through dark:text-gray-700">&nbsp;49€&nbsp;</span>
                            <span className="pb-2 text-4xl">37€</span>
                            <span className="text-lg">/mo</span>
                          </p>
                          <ul className="flex-1 space-y-2">
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Lumet consectetur adipisicing</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Lumet consectetur adipisicing</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Lumet consectetur adipisicing</span>
                            </li>
                            <li className="flex items-center space-x-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                              </svg>
                              <span>Lumet consectetur adipisicing</span>
                            </li>
                          </ul>
                          <button className="px-8 py-3 mt-12 text-lg font-semibold uppercase border rounded dark:border-violet-600">Subscribe price $30</button>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* package end */}
                </div>
            </div>
            <div className="text-center">
              <Link to={`/payment/${_id}`}>
                <button className="btn bg-[#F23B3F] text-white mt-5"> Join Now</button>
              </Link>
              
            </div>
        </div>
    </>
  )
}

export default BookedTrainer