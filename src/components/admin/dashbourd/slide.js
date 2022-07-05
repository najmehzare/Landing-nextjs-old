import { HomeIcon ,UsersIcon ,ArchiveIcon ,AdjustmentsIcon } from '@heroicons/react/solid'
import {NavLink} from 'react-router-dom';

export default function Slide(){
    return(
        <div className="w-60 h-full shadow-md bg-white absolute" id="sidenavSecExample">
        
        <ul className="relative px-1">
          <li className="relative">
            <NavLink to="/admin/dashboard">
              <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out">
                <HomeIcon className="h-5 w-5 text-blue-500"/><span>داشبورد</span>
              </div>
            </NavLink>
           
          </li>

          <li className="relative">
            <NavLink to="/admin/users">
                <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out">
                  <UsersIcon className="h-5 w-5 text-blue-500"/><span>کاربران</span>
                </div>
            </NavLink>
          </li>

          <li className="relative">
            <NavLink to="/admin/articles">
                <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out">
                  <ArchiveIcon className="h-5 w-5 text-blue-500"/><span>مقالات</span>
                </div>    
            </NavLink>
          </li>
         
          <li className="relative">
            <NavLink to="/admin/articles">
                <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out">
                  <AdjustmentsIcon className="h-5 w-5 text-blue-500"/><span>تنظیمات</span>
                </div>
            </NavLink>
          </li> 
          
        </ul>
        <hr className="my-2" />
        
        <div className="text-center bottom-0 absolute w-full">
          <hr className="m-0" />
          <p className="py-2 text-sm text-gray-700">Design By Zare</p>
        </div>
      </div>
    )
}