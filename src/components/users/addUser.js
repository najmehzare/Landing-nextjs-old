import { useState } from "react";
import { addUser } from "../../store/slices/usersSlice";
import { closeModal } from "../../store/slices/modalSlice"
import { useDispatch } from "react-redux";
import usersApi from '../../api/usersApi';


export default function AddUser() {

    const dispatch = useDispatch();
    const [ user , setUser ] = useState({
        id : Date.now() , name : '' , family : '' , email : '' , isAdmin: 'کاربر' , membershipDate :''
    });

    let formHandler = async (e) => {
        e.preventDefault();

        try {
            let res = await usersApi.post("/" , user)
            dispatch(addUser(res.data.data));
            dispatch(closeModal());
            setUser({id : Date.now() , name : '' , family : '' , email : '' , isAdmin: 'کاربر' , membershipDate :''})

        } catch (e) {
            console.log(e);
        }
    }

    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }


    return (

    <>

        <div className="m-4">
        <form className="form-inline" onSubmit={formHandler}>
            <label className="block text-right">
                <span className="block text-sm font-medium text-slate-700">نام</span>
                <input type="text" name='name' value={user.name} onChange={inputHandler} className="text-right 
                mt-1 block w-full px-3 py-2 bg-white border 
                border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block text-right">
                <span className="block text-sm font-medium text-slate-700"> نام خانوادگی</span>
                <input type="text"  name='family' value={user.family} onChange={inputHandler} className="text-right 
                mt-1 block w-full px-3 py-2 bg-white border 
                border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block text-right">
                <span className="block text-sm font-medium text-slate-700">ایمیل</span>
                <input type="email"  name='email' value={user.email} onChange={inputHandler} className="text-right 
                mt-1 block w-full px-3 py-2 bg-white border 
                border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block text-right">
                <span className="block text-sm font-medium text-slate-700">نوع</span>
                <select
                    name="isAdmin"
                    onChange={inputHandler}
                    className="text-right mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option>کاربر</option>
                    <option>ادمین</option>
                </select>
                
            </label>
            <label className="block text-right">
                <span className="block text-sm font-medium text-slate-700">تاریخ عضویت</span>
                <input type="date"  name='membershipDate' value={user.membershipDate} onChange={inputHandler} className="text-right 
                mt-1 block w-full px-3 py-2 bg-white border 
                border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <div className="mt-4">
                <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                اضافه
                </button>
            </div>
        </form>
        </div>                  
                
    </>
    )
}