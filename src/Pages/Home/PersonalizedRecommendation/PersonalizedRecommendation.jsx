import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from "axios";
import { useEffect, useState } from 'react';
import { FaUserDoctor } from "react-icons/fa6";

export const PersonalizedRecommendation = () => {
  const [recommend, setRecommend] = useState([])

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/recommand`)
    .then(res =>{
        setRecommend(res.data)
    })
  },[])
  return (
    <div className="my-8">
      <div>
        <h1 className="text-4xl text-center font-bold underline">
          Personalized Recommendation
        </h1>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
         {
          recommend.map(item=>  <SwiperSlide key={item?._id} className='px-5'>
            <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
              <div className="flex items-start sm:gap-8">
                <div
                  className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                  aria-hidden="true"
                >
                  <div className="flex items-center gap-1">
                    <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                    <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                    <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                    <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                    <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                  </div>
                </div>

                <div>
                  <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                    {item?.type}
                  </strong>

                  <h3 className="mt-4 text-lg font-medium sm:text-xl">
                    <a className="hover:underline">
                     {item?.title}
                    </a>
                  </h3>

                  <p className="mt-1 text-sm text-gray-700">
                    {item?.description}
                  </p>

                  <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                    <div className="flex items-center gap-1 text-gray-500">
                    <FaUserDoctor />
                      <p className="text-xs font-medium">{item?.suggested_by}</p>
                    </div>

                    <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                    Frequency: 
                      <a  className="underline hover:text-gray-700 ml-2">
                         {item?.frequency}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>)
         }

        </Swiper>
      </div>
    </div>
  );
};
