import axios from "axios"
import { useBookList } from "../../../Hook/useBookList"

export const MyUpcomingAppointments = () => {

  const {data, isPending, refetch} = useBookList()
if(isPending){
  return <p>loading.....</p>
}
console.log(data)

const handleCancel = (id)=> {
console.log(id, 'cancelled')

axios.put(`${import.meta.env.VITE_API_URL}/bookList/${id}`)
.then(res =>{
  if(res.data.modifiedCount > 0){
    refetch()
  }
})

}

  return (
<div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead>
      <tr>
        <th className=" px-4 py-2 font-medium text-gray-900">Test Name</th>
        <th className="px-4 py-2 font-medium text-gray-900">Date</th>
        <th className="px-4 py-2 font-medium text-gray-900">Time</th>
        <th className="px-4 py-2">Action</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {
        data?.map(item=> <tr key={item?._id}>
          <td className="px-4 py-2 font-medium text-gray-900">{item?.name}</td>
          <td className="px-4 py-2 text-gray-700">{item?.testDate}</td>
          <td className="px-4 py-2 text-gray-700">{item?.time}</td>
          <td className="px-4 py-2">
           <div className="text-center">
           <button
           disabled={item?.status === 'cancel'}
           onClick={()=>handleCancel(item?._id)}
              className={`${item?.status === 'cancel'? 'cursor-not-allowed' : 'cursor-pointer'} rounded bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700`}
            >
              Cancel
            </button>
           </div>
          </td>
        </tr>)
      }

    </tbody>
  </table>
</div>
  )
}
