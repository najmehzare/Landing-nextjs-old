import { createSlice } from '@reduxjs/toolkit'


const modalSlice = createSlice({
    name : 'modal',
    initialState : {
        showModal : false,
        child : ""
    },
    reducers : {
        openModal : (state , { payload } ) => {
            state.showModal = true
        },
        closeModal : (state , { payload } ) => {
            state.showModal = false
        },
        setChild : (state , { payload } ) => {
            state.child = payload
        },
    }
})

export const { openModal , closeModal , setChild } = modalSlice.actions;

export default modalSlice.reducer;