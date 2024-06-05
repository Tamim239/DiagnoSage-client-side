import { FaBook, FaCalendar, FaCartShopping, FaEnvelope, FaHouse, FaList, FaUsers, FaUtensils } from 'react-icons/fa6';
import { RiMenuSearchLine } from "react-icons/ri";
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
                    <li><NavLink to="/dashboard/userHome"><FaHouse></FaHouse> userHome</NavLink></li>
                <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                <li><NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping> My Cart</NavLink></li>
                <li><NavLink to="/dashboard/review"><MdOutlineReviews />Add Review</NavLink></li>
                <li><NavLink to="/dashboard/bookings"><FaList></FaList>My Bookings</NavLink></li>
                    </>
                }
              {/* shared link */}
                <div className='divider'></div>
                <li><NavLink to="/"><FaHouse></FaHouse>Home</NavLink></li>
                <li><NavLink to="/order/salad"><RiMenuSearchLine />Menu</NavLink></li>
                <li><NavLink to="/order/contact"><FaEnvelope/> Contact</NavLink></li>
            </ul>

        </div>
        {/* dashboard content */}
        <div className='flex-1 p-8'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}