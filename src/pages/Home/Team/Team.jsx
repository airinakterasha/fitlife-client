import TeamSingle from './teamSingle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import useTrainer from '../../../hooks/useTrainer';

const Team = () => {
    const [betrainer] = useTrainer()
    //console.log(betrainer);
    const trainersAll = betrainer.filter(trainer => trainer.status === 'approved' && trainer.role === 'trainer');
    //console.log(trainersAll);
    // 
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    trainersAll.map(team =><SwiperSlide key={team._id} team={team}>
                        <TeamSingle team={team}></TeamSingle>
                    </SwiperSlide>)
                }
  
            </Swiper>
        </>
    )
}

export default Team