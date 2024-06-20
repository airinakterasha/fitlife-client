import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import TitleSection from "../../../components/TitleSection/TitleSection"

const MemberHome = () => {
  return (
    <>
        <Helmet>
              <title>FitLife | Member Home</title>
        </Helmet>
        <div className="">
            <div className="">
                <TitleSection heading={'DashBoard'} subHeading={'Welcome Dashboard Home'}></TitleSection>
            </div>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center ">
                    <p className="text-3xl">Welcome to Member Dashboard Home</p>
                    <Link to='/' className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 btn bg-[#F23B3F] text-white capitalize">
                        Go to homepage
                    </Link>
                </div>
            </section>
        </div>
        <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                
            </div>
        </section>
    </>
  )
}

export default MemberHome