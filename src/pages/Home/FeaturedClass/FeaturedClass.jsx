import { useEffect, useState } from 'react';
import TitleSection from '../../../components/TitleSection/TitleSection'
import FeaturedClassComp from './FeaturedClassComp';

import { axiosPublic } from '../../../hooks/useAxiosPublic';


const FeaturedClass = () => {
    const [featuredClass, setFeaturedClass] = useState([]);

    useEffect(() => {
        axiosPublic.get('/featured-class')
        .then(res => {
            console.log(res.data);
            //setFeaturedClass(res.data);
            setFeaturedClass(res.data.slice(0,6));
        })
    }, [])

    return (
        <>
            <div className="container mx-auto">
                <div className="">
                    <TitleSection heading={'Featured Classes'} subHeading={'Our most demandable classes'}></TitleSection>
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        featuredClass.map(featurClass => <FeaturedClassComp key={featurClass._id} featurClass={featurClass}></FeaturedClassComp>)
                    }
                </div>
            </div>
        </>
    )
}

export default FeaturedClass