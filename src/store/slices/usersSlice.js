import { createSlice } from '@reduxjs/toolkit'


const usersSlice = createSlice({
    name : 'users',
    initialState : {
        userslist : [],
        targetUser : {}
    },
    reducers : {
        setUsers : (state , { payload }) => {
            state.userslist = payload;
        },
        addUser : (state , action ) => {
            state.userslist.push(action.payload)
        },
        deleteUser: (state , action) => {
            state.userslist = state.userslist.filter(user => user.id !== action.payload )
        },
        editUser : (state , { payload }) => {
            state.userslist = state.userslist.map((user) => {
                return user.id === payload.id  
                        ? {
                            ...user,
                            name : payload.name,
                            family : payload.family,
                            email : payload.email,
                            isAmidn : payload.isAmidn,
                            membershipDate : payload.membershipDate,
                        }
                        : user
            })
        },
        setTargetUser : (state , { payload }) => {
            state.targetUser = payload;
        },
    }
})


export const { addUser , deleteUser , editUser , setUsers , setTargetUser } = usersSlice.actions;

export default usersSlice.reducer;