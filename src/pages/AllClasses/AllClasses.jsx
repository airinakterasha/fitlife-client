import { Helmet } from "react-helmet-async";
import useClass from "../../hooks/useClass";
import AllClassComp from "./AllClassComp";
import TitleSection from "../../components/TitleSection/TitleSection";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const AllClasses = () => {
  const [classes] = useClass();
  //const [classes, setClasses] = useState('');
  //const [search, setSearch] = useState('');
  const axiosPublic = useAxiosPublic();

  // useEffect(() => {
  //   axiosPublic('/class')
  //     .then(res => {
  //       setClasses(res.data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }, [axiosPublic, setClasses]);

  // useEffect(() => {
  //   axiosPublic(`/class&search=${search}`)
  //   .then(res => {
  //     setSearch(res.data);
  //   })

  // }, [axiosPublic, search])

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   const searchText = e.target.search.value;
  
  //   try {
  //     const res = await axiosPublic(`/class?search=${searchText}`);
  //     setClasses(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
  }
  return (
    <>
      <Helmet>
            <title>FitLife | All Classes</title>
      </Helmet>
      <div className="">
          <div className="py-10">
            <TitleSection heading={`All Class`} subHeading={`Classes we are providing`}></TitleSection>
          </div>
          {/* search */}
          <div className="container mx-auto">
            <form onSubmit={handleSearch}  className="p-10">
              <div className="w-full flex">
                <div className="relative my-6">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search here by class title"
                    className="relative w-full h-12 px-4 pr-12 transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  
                </div>
                <input type="submit" value="Search" className="btn bg-[#F23B3F] text-white mt-5" />
                
              </div>
            </form>
          </div>
          {/* search */}
          
          <div className="grid grid-col-1 md:grid-cols-3">
            {
              classes.map(singleClass => <AllClassComp key={singleClass._id} singleClass={singleClass}></AllClassComp>)
            }
          </div>

      </div>
    </>
  )
}

export default AllClasses