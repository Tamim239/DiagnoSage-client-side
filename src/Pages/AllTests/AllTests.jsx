import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useTests } from "../../Hook/useTests";

export const AllTests = () => {
  const {data, isPending} = useTests();
  const [startDate, setStartDate] = useState(new Date());
  if(isPending){
    return <p>loading.......</p>
  }
  console.log(data)
  return (
    <div className="pt-20">
      <div className="flex justify-center items-center gap-6">
        <div className="flex items-center justify-center gap-2">
        <p>From:</p>
        <div>
          <input type="text"
            className="border p-2 rounded-md w-full"
            name="todayDate"
            disabled
            value={new Date().toLocaleDateString()}
          />
        </div>
        </div>
        <div className="flex items-center justify-center gap-2">
        <p>To :</p>
        <div>
          <DatePicker
            className="border p-2 rounded-md w-full"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        </div>
        <div>
          <button className="btn">Apply</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          data?.map(item=> <div key={item?._id} className="block rounded-lg p-4 shadow-sm shadow-indigo-100 relative">
          <div className="badge badge-secondary absolute top-5 ml-2">{item?.slots}</div>
          <img
            alt=""
            src={item?.imageURL}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="">${item?.price}</h3>

                <p className="text-sm text-gray-500">Date: {item?.testDate}</p>
              </div>

              <div>
               <h1 className="font-medium text-xl">{item?.name}</h1>
              </div>
            </div>
            <div>
              <p>{item?.description}</p>
            </div>
          </div>
          <div className="text-end">
            <Link to={`/testDetails/${item?._id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};
