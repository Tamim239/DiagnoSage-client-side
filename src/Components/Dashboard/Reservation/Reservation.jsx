import toast from "react-hot-toast";
import { useBookListAll } from "../../../Hook/useBookListAll";
import axios from "axios";
import { useState } from "react";

export const Reservation = () => {
  const { data, refetch } = useBookListAll();
  const [reservationData, setReservationData] = useState(data)

  const handleFile = (id, e) => {
    const pdfLink = e.target.parentNode.childNodes[0].value;
    if (pdfLink === "") {
      return toast.error("Fill in the input field");
    }
    console.log(id, pdfLink);
    axios
      .patch(`${import.meta.env.VITE_API_URL}/pdfLink/${id}`, { pdfLink })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success("report updated successfully");
        }
      });
  };

  const handleSearch = (e) =>{
    e.preventDefault();
    const email = e.target.search.value
    console.log(email);
    if(email === ""){
      return setReservationData(data)
    }
    axios.get(`${import.meta.env.VITE_API_URL}/searchEmail/${email}`)
    .then(res =>{
      console.log(res.data)
      setReservationData(res.data)
    })
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-wrap justify-center items-center my-5">
        <label htmlFor="search" className="input input-bordered flex items-center gap-2 ">
          <input type="text" name="search" className="grow" placeholder="Search email here" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button type="submit" className="btn btn-outline max-sm:mt-2 ml-2">Search</button>
      </form>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Date</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {reservationData?.map((item) => (
              <tr key={item?._id}>
                <th>
                  <h1> {item?.name}</h1>
                </th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.imageURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>${item?.email}</td>
                <td> {item?.testDate}</td>

                <th>
                  {item?.status === "cancel" ? (
                    <button
                      disabled
                      className="btn bg-green-500 btn-sm text-white"
                    >
                      Cancel
                    </button>
                  ) : (
                    <>
                      {item?.pdfLink ? (
                        "Done"
                      ) : (
                        <div>
                          <input
                            type="text"
                            name="pdfLink"
                            className="file-input file-input-bordered file-input-accent w-2/5 max-w-xs"
                          />
                          <button
                            onClick={(e) => handleFile(item?._id, e)}
                            className="btn btn-primary ml-2"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
