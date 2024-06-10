import { useAllUser } from "../../../Hook/useAllUser";
import { useAxiosSecure } from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { jsPDF } from "jspdf";
import axios from "axios";
import toast from "react-hot-toast";

export const AllUser = () => {
  const { data, refetch } = useAllUser();
  const axiosSecure = useAxiosSecure();
  const doc = new jsPDF();

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      console.log(res.data);
      if (res.data?.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user?.name} is Admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDownload = (item) => {
    doc.addFont("MyFont.ttf", "MyFont", "normal");
    doc.setFont("MyFont");
    doc.text(
      `  
    name: ${item.name}      
    email: ${item.email}  
    bloodGroup: ${item.bloodGroup}     
    district: ${item.district}
    upazila: ${item.upazila}            
    status: ${item?.status}
    image: ${item?.image}
    role: ${item?.role}    
    `,
      10,
      10
    );
    doc.save("a4.pdf");
  };

  const handleSeeDetails = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const handleStatus = (item) =>{
    console.log("yes")
    axios.put(`${import.meta.env.VITE_API_URL}/usersStatus/${item?.email}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            toast.success("changed status in user")
            refetch()
        }
    })
  }

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Customer
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Role
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      District
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Upazila
                    </th>
                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {data?.map((item) => (
                    <tr key={item?._id}>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="object-cover w-8 h-8 rounded-full"
                            src={item?.image}
                            alt=""
                          />
                          <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                              {item?.name}
                            </h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                              {item?.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <button onClick={()=>handleStatus(item)} className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                            {item?.status}
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {item.role === "admin" ? (
                          "Admin"
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(item)}
                            className="btn bg-orange-500 btn-xl text-white"
                          >
                            {item?.role}
                          </button>
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {item?.district}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {item?.upazila}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={handleSeeDetails}
                            className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
                          >
                            See Details
                          </button>
                          <dialog
                            id="my_modal_5"
                            className="modal modal-bottom sm:modal-middle"
                          >
                            <div className="modal-box">
                              <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                                <img
                                  src={item?.image}
                                  alt=""
                                  className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                />
                                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                                  <div className="my-2 space-y-1">
                                    <h2 className="text-xl font-semibold sm:text-2xl">
                                      {item?.name}
                                    </h2>
                                    <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                                      {item?.email}
                                    </p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-6 *:text-base ">
                                    <p>BloodGroup: {item?.bloodGroup}</p>
                                    <p> District: {item?.district}</p>
                                    <p> Upazila: {item?.upazila}</p>
                                    <p> Status: {item?.status}</p>
                                    <p>Role: {item?.role}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-action">
                                <form method="dialog">
                                  {/* if there is a button in form, it will close the modal */}
                                  <button className="btn">Close</button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                          <button
                            onClick={() => handleDownload(item)}
                            className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                          >
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* The button to open modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    </section>
  );
};
