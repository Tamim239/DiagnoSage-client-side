import { FaBook, FaCartShopping, FaHouse, FaList, FaUsers, FaUtensils } from 'react-icons/fa6';

import { MdOutlineReviews } from "react-icons/md";
import {NavLink, Outlet} from 'react-router-dom'
import { useAdmin } from '../Hook/useAdmin';
export const Dashboard = () => {

 
    const [isAdmin] = useAdmin();
    console.log(isAdmin)

  return (
    <div className='flex'>
        {/* dashboard side option */}
        <div className="w-64 min-h-screen bg-orange-500">
            <ul className='menu p-4'>
                {
                    isAdmin ? 
                    <>
                    <li><NavLink to="/dashboard/adminHome"><FaHouse></FaHouse> Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/addItems"> <FaUtensils /> Add Items</NavLink></li>
                <li><NavLink to="/dashboard/manageItems"><FaList /> Manage Items</NavLink></li>
                <li><NavLink to="/dashboard/manageBookings"><FaBook />Manage Bookings</NavLink></li>
                <li><NavLink to="/dashboard/allUsers"><FaUsers /> All User</NavLink></li>
                    </>
                    :
                    <>
                    <li><NavLink to="/dashboard/myProfile"><FaHouse></FaHouse>My Profile</NavLink></li>
                <li><NavLink to="/dashboard/myUpcomingAppointments"><FaCartShopping></FaCartShopping> My Upcoming Appointments</NavLink></li>
                <li><NavLink to="/dashboard/testResult"><MdOutlineReviews />Test Results</NavLink></li>

                    </>
                }
              {/* shared link */}
                <div className='divider'></div>
                <li><NavLink to="/"><FaHouse></FaHouse>Home</NavLink></li>
            </ul>

        </div>
        {/* dashboard content */}
        <div className='flex-1 p-8'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}