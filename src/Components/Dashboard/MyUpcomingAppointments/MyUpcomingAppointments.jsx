
export const MyUpcomingAppointments = () => {
  return (
<div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Test Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Time</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2">
          <button
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Cancel
          </button>
        </td>
      </tr>

     
    </tbody>
  </table>
</div>
  )
}
