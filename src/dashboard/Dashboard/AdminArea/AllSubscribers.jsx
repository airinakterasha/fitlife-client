import { Helmet } from "react-helmet-async"
import TitleSection from "../../../components/TitleSection/TitleSection"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllSubscribers = () => {
    const [subscribers, setSubscribers] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('subscribe')
        .then(res => {
            const subscriber = res.data;
            setSubscribers(subscriber);
        })
    }, [axiosSecure])

    return (
        <>
            <Helmet>
                <title>FitLife | Subscribers</title>
            </Helmet>
            <div className="">
                <div className="mb-10">
                <TitleSection heading={'subscribers'} subHeading={'All newsletter subscribers'}></TitleSection>
                </div>
                <div className="">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border border-separate rounded border-slate-200">
                            <tbody>
                            <tr>
                                <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"></th>
                                <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Subscriber email</th>
                                <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Subscriber email</th>
                            </tr>
                            {
                                subscribers.map((subscribe, index) => <tr key={subscribe._id} className="odd:bg-slate-50">
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                        {index + 1}
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                        {subscribe.subsName}
                                    </td>
                                    <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                                        {subscribe.subsEmail}
                                    </td>
                                </tr>)
                            }
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllSubscribers