import Swal from "sweetalert2";
import { useBanner } from "../../../Hook/useBanner"
import { FaDeleteLeft } from "react-icons/fa6";
import axios from "axios";
export const AllBanner = () => {
  const {data, isLoading, refetch} = useBanner();
  if(isLoading){
    return <progress className="progress w-56"></progress>
  }

  const handleDelete = (id)=>{
console.log(id)
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
                axios.delete(`http://localhost:5000/banners/${id}`)
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
        <th>Title</th>
        <th>Coupon Rate</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {data?.map(item=>  <tr key={item?._id}>
        <th>
          {item?.name}
        </th>
        <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item?.imageURL} alt="ban"/>
              </div>
            </div>
        </td>
        <td>
         {item?.title}
        </td>
        <td>{item?.couponRate}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{item?.isActive}</button>
        </th>
        <th>
          <button onClick={()=>handleDelete(item?._id)} className="btn "><FaDeleteLeft className="text-xl text-red-500"/></button>
        </th>
      </tr>)}
    </tbody>

    
  </table>
</div>
  )
}
