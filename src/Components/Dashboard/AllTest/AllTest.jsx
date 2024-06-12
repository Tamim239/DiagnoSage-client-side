import { FaDeleteLeft } from "react-icons/fa6";
import { useTests } from "../../../Hook/useTests"
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";


export const AllTest = () => {
const {data, isPending, refetch} = useTests();
if(isPending){
  return <progress className="progress w-56"></progress>
}

const handleDelete = (id)=>{
     Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                  axios.delete(`${import.meta.env.VITE_API_URL}/tests/${id}`)
                  .then(res =>{
                      console.log(res.data)
                      if(res.data?.deletedCount > 0){
                      Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success",
                        })
                         refetch()
                      }
                  })
              }
            });
  
   }

  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>price</th>
        <th>Date</th>
        <th>Slots</th>
        <th>action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data?.map(item=> <tr key={item?._id}>
          <th>
          <h1> {item?.name}</h1>  
          </th>
          <td>
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item?.imageURL} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
          </td>
          <td>
            ${item?.price}
          </td>
          <td> {item?.testDate}</td>
          <td> {item?.slots}</td>
          <th>
            <Link to={`/dashboard/updateTest/${item?._id}`}>
            <button className="btn bg-green-500 btn-sm text-white">Update</button>
            </Link>
          </th>
          <th>
          <button onClick={()=>handleDelete(item?._id)} className="btn "><FaDeleteLeft className="text-xl text-red-500"/></button>
        </th>
        </tr>)
      }
    </tbody>

    
  </table>
</div>
  )
}
