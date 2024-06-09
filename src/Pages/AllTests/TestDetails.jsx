
import toast from "react-hot-toast"
import { useLoaderData  } from "react-router-dom"

export const TestDetails = () => {
    const data = useLoaderData()

    const handleBookNow = () =>{
      if(data?.slots <= 0){
        return toast.error("you don't have book now")
      }
      document.getElementById('my_modal_3').showModal()
    //   const name = data?.name;
    // const imageURL = data?.imageURL;
    // const title = data?.title;
    // const couponCode = data?.couponCode;
    // const couponRate = data?.couponRate;
    // const isActive =data?.isActive;
    // const description = data?.description;

    //   const booking = {
    //     name,
    //     imageURL,
    //     title,
    //     couponCode,
    //     couponRate,
    //     isActive,
    //     description,
    //   }
      //  axios.post(`http://localhost:5000/bookList`,)
      //  .then((res)=>{
      //     console.log(res.data)
      //  })

    }

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
    <div className="w-full h-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${data?.imageURL})`}}></div>

    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-1/2 dark:bg-gray-800">
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
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Get 20% off </span>
    </h2>
    <input type="text" placeholder="coupon code here" className="input input-bordered w-full max-w-xs mt-2"/>
    <button
      className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
    >
      Get Discount
    </button>
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
