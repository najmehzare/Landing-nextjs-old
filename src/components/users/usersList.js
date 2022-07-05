import React , { useEffect } from 'react';
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

import { useDispatch, useSelector } from 'react-redux';

//import components
import usersApi from '../../api/usersApi';
import { setUsers } from '../../store/slices/usersSlice';
import UserItem from "./userItem";

function UsersList(props) {


    const dispatch = useDispatch();

    useEffect(() => {
        getUsers();
    } , [])

    const getUsers = async () => {
        try {
            let res = await usersApi.get();
            dispatch(setUsers(res.data.data))
        } catch (e) {
            console.log(e);
        }
    }

    const users = useSelector(state => state.users.userslist);
    
    return (
        <>
            <div className='grid justify-items-center '>
            <Card className="">
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                    لیست کاربران
                    </Typography>
                        <table className="text-right min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        ردیف
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        نام
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        نام خانوادگی
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                        ایمیل
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                        نوع
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                                        تاریخ عضویت
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">ویرایش</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {
                               ! users
                                    ? <tr><td>
                                            <p>there isn`t any users</p>
                                       </td></tr>
                                    : users.map((item,index) => <UserItem 
                                        key = {item.id}
                                        user={item} 
                                        index={index}
                                    />)
                                }
                            </tbody>
                        </table>                   
                </CardBody>
            </Card>
            </div>
        </>
    )
}


export default UsersList;