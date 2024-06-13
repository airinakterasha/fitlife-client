import { Helmet } from "react-helmet-async";
import { useLoaderData} from "react-router-dom"
import TitleSection from "../../../components/TitleSection/TitleSection";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";



const BookedTrainer = () => {
  const {user} = useAuth();
  const bookingTrainer = useLoaderData();
  //console.log(bookingTrainer);
  const {trainerName, slotName, trainerImage, slotTime, classes} = bookingTrainer;
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [, refetch] = useCart();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosPublic.get('/packages')
    .then(res =>{
      console.log(res.data);
      const packageData = res.data;
      setPackages(packageData);
    })
    .catch(error => {
      console.log(error);
    })
  }, [axiosPublic, setPackages])

  const handleSelect = (pkgName, pkgPrice, packageId) => {
    setSelectedPackage(pkgName, pkgPrice);
    setSelectedPackageId(packageId);
    console.log(pkgName, pkgPrice, packageId);
  };

  const handleJoinNow = () => {

    if (user && user?.email && selectedPackage) {
        console.log('package selected', selectedPackage, user)
        
        // send cart item to the database.
        const cartItem = {
          userName: user.displayName,
          email: user.email,
          trainerImage: trainerImage,
          trainerName: trainerName,
          slotName: slotName,
          pacageId: selectedPackage._id,
          packName: selectedPackage.pkgName,
          packPrice: selectedPackage.pkgPrice,
        }
        axiosSecure.post('/carts', cartItem)
          .then(res => {
              console.log(res.data)
              if(res.data.insertedId){
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${selectedPackage.pkgName} added to your cart`,
                      showConfirmButton: false,
                      timer: 1500
                  });
                  // refetch cart to update the cart items count
                  refetch()
              }
          })


    } else {
      Swal.fire({
        title: "You Did Not Select Any Package",
        text: "Please select a package to join!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Okay!"
      })
    }

  };

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
                        <p className="px-4 sm:px-8 lg:px-24">Choose any package from here.</p>
                      </div>
                      <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
                        {/* package start */}
                        {
                          packages.map(packagePrice => <div 
                          key={packagePrice._id} 
                          className={`relative z-0 flex flex-col items-center p-8 border rounded-md ${
                            selectedPackageId === packagePrice._id ? 'bg-green-500' : ''
                          }`}>
                            <span 
                            className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-600 dark:text-gray-50 capitalize mt-5">
                              {packagePrice.packageName} - {packagePrice.price}
                            </span>
                            <p className="my-6 text-4xl font-bold dark:text-violet-600 capitalize">{packagePrice.packageName}</p>
                            <div className="text-start">
                              <ul className="flex-1 space-y-2">
                                {
                                  packagePrice.details.map((detail, index) => <li key={index} className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <span>{detail}</span>
                                  </li>)
                                }
                                  
                              </ul>
                            </div>
                            <p className="my-6 text-4xl font-bold dark:text-violet-600">Classes Opportunity</p>

                            <ul className="flex-1 space-y-2">
                                {
                                  packagePrice.included_classes.map((incudeClass, index) => <li key={index} className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-violet-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <span>{incudeClass}</span>
                                  </li>)
                                }
                                
                            </ul>
                            
                            <button 
                            onClick={() => handleSelect(packagePrice.packageName, packagePrice.price, packagePrice._id)}
                            className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-violet-600"
                            >
                                Subscribe price {packagePrice.price}
                            </button>
                        </div>)
                        }
             
                        
                        {/* Basic package start */}     
                      </div>
                    </div>
                  </section>
                  {/* package end */}
                </div>
            </div>

            <div className="text-center">
              <div className="space-x-10">
                {/* <Link to={`/basic-package/${_id}`}>
                  <button className="btn bg-[#F23B3F] text-white mt-5 capitalize">Join Now for basic</button>
                </Link> */}
                <Link to='/payment'>
                  <button onClick={handleJoinNow} className="btn bg-[#F23B3F] text-white mt-5 capitalize">Join Now</button>
                </Link>

              </div>
            </div>
        </div>
    </>
  )
}

export default BookedTrainer