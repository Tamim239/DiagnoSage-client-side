import { useLoaderData  } from "react-router-dom"

export const TestDetails = () => {
    const data = useLoaderData()
    console.log( data)
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
    <div className="w-full h-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${data?.imageURL})`}}></div>

    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-1/2 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{data?.name}</h3>
        <p className="p-1">{data?.description}</p>
        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-200">${data?.price}</span>
           
            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Book Now</button>
        </div>
    </div>
</div>
  )
}
