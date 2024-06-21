import { useBookList } from "../../../Hook/useBookList"

export const TestResult = () => {

  const {data, isPending} = useBookList()
  console.log(data)
if(isPending){
  return <p>loading.....</p>
}
console.log(data)

  return (
    <div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead>
      <tr>
        <th className=" px-4 py-2 font-medium text-gray-900">Test Name</th>
        <th className="px-4 py-2 font-medium text-gray-900">Date</th>
        <th className="px-4 py-2 font-medium text-gray-900">Time</th>
        <th className="px-4 py-2">Status</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {
        data?.map(item=> <tr key={item?._id}>
          <td className="px-4 py-2 font-medium text-gray-900">{item?.name}</td>
          <td className="px-4 py-2 text-gray-700">{item?.testDate}</td>
          <td className="px-4 py-2 text-gray-700">{item?.time}</td>
          <td className="px-4 py-2 text-gray-700">
            <a href={item?.pdfLink} target="_blank" className="hover:text-red-500"> Download </a>
            </td>
        </tr>)
      }

    </tbody>
  </table>
</div>
  )
}
