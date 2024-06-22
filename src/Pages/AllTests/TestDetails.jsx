import toast from "react-hot-toast"
import { useLoaderData  } from "react-router-dom"
import { Payment } from "../Payment/Payment"
import { useBannerActive } from "../../Hook/useBannerActive"
import { useAuth } from "../../Hook/useAuth"
import axios from "axios"

export const TestDetails = () => {
  const {data: banner} = useBannerActive()
    const data = useLoaderData()
   const {setCouponData} = useAuth()
   const {user, setBookData} = useAuth()
   
    const handleBookNow = () =>{
      if(data?.slots <= 0){
        return toast.error("you don't have book now")
      }
      document.getElementById('my_modal_3').showModal()
      const bookingData = {
        email: user?.email,
        name: data?.name,
        imageURL: data?.imageURL,
        title: data?.title,
        description: data?.description,
        totalPrice: data?.totalPrice,
        testDate: data?.testDate,
        time: new Date().toLocaleTimeString,
        status: 'pending'
      }
      axios.post(`https://diagno-sage-server.vercel.app/bookList`,bookingData)
       .then((res)=>{
        setBookData(res.data)
       })
    };


  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
    <div className="w-full h-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${data?.imageURL})`}}></div>
    <div className="-mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-1/2 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{data?.name}</h3>
        <p className="p-1">{data?.description}</p>
        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">${data?.price}</span>
            <button onClick={handleBookNow} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Book Now</button>
        </div>
    </div>
    {/* modal */}
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <section className="overflow-hidden w-full rounded-lg shadow-2xl">

  <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
    <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Get <span>{banner?.couponRate}</span>% off </span>
    </h2>
   <input onBlur={(e)=>setCouponData(e.target.value)} type="text" placeholder="coupon code here" name="matchCoupon" className="input input-bordered w-full max-w-xs my-4"/>
    <Payment singleData={data}/>
    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
      Offer valid until {new Date().toLocaleDateString()} *
    </p> 
  </div>
</section>
  </div>
</dialog>
</div>
  )
}
