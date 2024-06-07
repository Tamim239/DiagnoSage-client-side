
export const AllTest = () => {
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
        <th>action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          name
        </th>
        <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">Update</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    </tbody>

    
  </table>
</div>
  )
}
