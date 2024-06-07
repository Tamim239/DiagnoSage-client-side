import axios from "axios";
import { useEffect, useState } from "react";
import { useUserInfo } from "../../../Hook/useUserInfo";

export const MyProfile = () => {
  const {data, isPending} = useUserInfo()
    const [district, setDistrict] = useState([]);
    const [upazila, setUpazila] = useState([]);
    useEffect(() => {
        axios.get("/district.json").then((res) => {
          setDistrict(res.data);
        });
      }, []);
    
      useEffect(() => {
        axios.get("/upazila.json").then((res) => {
          setUpazila(res.data);
        });
      }, []);
      if(isPending){
        return <p>loading.....</p>
      }
console.log(data)

  return (
    <div className="flex flex-col justify-center border-x-2 border-gray-300 rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src={data?.image} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{data?.name}</h2>
		</div>
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Name</dt>
      <input defaultValue={data?.name} type="text" className="text-gray-700 sm:col-span-2 py-2 border border-gray-400 px-2"/>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Email</dt>
      <input disabled value={data?.email} type="text" className="text-gray-700 px-2 sm:col-span-2 py-2 border border-gray-400"/>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">ImageURL</dt>
      <input type="text" defaultValue={data?.image} className="text-gray-700 px-2 sm:col-span-2 py-2 border border-gray-400"/>
    </div>  

    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">District</dt>
      <select
                  defaultValue={data?.district}
                  className="text-gray-700 sm:col-span-2 py-2 border-gray-400"
                >
                  <option disabled value="default">
                    select a District?
                  </option>
                  {district.map((item) => (
                    <option key={item?.id} value={item?.name}>
                      {item?.name}
                    </option>
                  ))}
                </select>
    </div>
    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Upazila</dt>
      <select
                  defaultValue="default"
                 
                  className="text-gray-700 sm:col-span-2 py-2 border-gray-400"
                >
                  <option disabled value="default">
                    select a Upazila?
                  </option>
                  {upazila.map((item) => (
                    <option key={item?.id} value={item?.name}>
                      {item?.name}
                    </option>
                  ))}
                </select>
    </div>
    <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Blood Group</dt>
      <select
                  defaultValue="default"
                  className="text-gray-700 sm:col-span-2 py-2 border-gray-400"
                >
                  <option disabled value="default">
                    select a blood?
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
    </div>
  </dl>
</div>
	</div>
</div>
  )
}
