import React , {useContext , useReducer} from 'react';
import { useDispatch } from "react-redux";
import sweetalert from "sweetalert2";

import articlesListContext from '../../contexts/articlesListContext';

//import Reducers
import AppReducer from '../../reducers/appReducer';

export default function ArticleItem({  article , index }) {

    const articlesContext = useContext(articlesListContext);

    const editArticle =  (id) => {
        articlesContext.editArticle(id)
    }

    
    let deleteArticle = (id)=>{
        sweetalert.fire({
            title: 'آیا از حذف این مقاله اطمینان دارید؟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    articlesContext.deleteArticle(id)
                } catch (err) {
                    sweetalert.fire({
                        icon: 'error',
                        title: '',
                        text: err,
                    })
                }
            }
        })
    }

    return (
        <>
            <tr key={article.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {index + 1}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{article.title}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{article.auter}</td>
                <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500">{article.create_date}</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button
                        type="button"
                        onClick={()=>editArticle(article.id)}
                        className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ml-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={()=>deleteArticle(article.id)}
                        className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </td>
            </tr>    
        </>
        
    )
}