import { useEffect, useState } from 'react';
import TitleSection from '../../../components/TitleSection/TitleSection'
import useCartAll from '../../../hooks/useCartAll'
import useClass from '../../../hooks/useClass';
import { axiosPublic } from '../../../hooks/useAxiosPublic';


const FeaturedClass = () => {
    const [featuredClass, setFeaturedClass] = useState([]);

    useEffect(() => {
        axiosPublic.get('/fatured-class')
        .then(res => {
            console.log(res.data);
            setFeaturedClass(res.data)
        })
    }, [])
    console.log(featuredClass);



    return (
        <>
            <div className="">
                <div className="">
                    <TitleSection heading={'Featured Classes'} subHeading={'Our most demandable classes'}></TitleSection>
                </div> 
                <div className=""></div>
            </div>
        </>
    )
}

export default FeaturedClass