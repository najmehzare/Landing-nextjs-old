
import { useDispatch , useSelector } from "react-redux";
import { openModal , setChild } from "../../store/slices/modalSlice"

import { Button } from "@material-tailwind/react";

import UsersList from "./usersList";
import Modal from "../../components/modal/modal";
import AddUser from "./addUser"
import EditUser from "./editUser";


export default function UsersSection() {
    const dispatch = useDispatch()

    const openModalHandler = () => {
        dispatch(openModal())
        dispatch(setChild('addUser'))
    }    

    const modalChildShow = useSelector(state => state.modal.child);

    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest">
            <div className="bg-white rounded shadow p-6 m-4 w-full  border">
                <div className="mb-4">

                    <div className="inset-0 flex items-center justify-center">
                        <Button className="text-black bg-slate-400 text-sm" onClick={openModalHandler}>
                                    اضافه کردن کاربر جدید
                        </Button>
                    </div>
                   
                </div>
                <div>
                    <UsersList />
                </div>

                <Modal>
                    {
                        modalChildShow==='addUser' 
                        ? <AddUser />
                        : <EditUser />
                    }
                </Modal>

            </div>
        </div>
    )
}