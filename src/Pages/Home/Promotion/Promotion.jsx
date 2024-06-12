import axios from "axios";
import { useEffect, useState } from "react";

export const Promotion = () => {
const [promotionData, setPromotionData] = useState([]);
useEffect(()=>{
axios.get(`${import.meta.env.VITE_API_URL}/promotion`)
.then(res =>{
    console.log(res.data)
    setPromotionData(res.data)
})
},[])

  return (
    <div className="my-5">
      <div>
        <h1 className="text-4xl text-center font-bold underline">Promotions</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
        promotionData?.map(item =>  <div key={item?._id} className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
             {item?.title}
            </h3>
            <p>
                {item?.applies_to || item?.type}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-pretty text-sm text-gray-500">
           {item?.description}
          </p>
        </div>
        <div className=" mt-2 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <h3 className="text-sm font-medium text-gray-600">Discount: {item?.discount || item?.discount_percentage || 0}%</h3>
          </div>
          <div className="flex flex-col-reverse">
            <h3 className="text-sm font-medium text-gray-600">
              {item?.code}
            </h3>
          </div>
        </div>
      </div>)
       }
      </div>
    </div>
  );
};
