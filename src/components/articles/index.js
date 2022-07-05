import { useContext , useEffect ,useReducer } from "react";
import { Button } from "@material-tailwind/react";
import { useDispatch , useSelector } from "react-redux";
import { openModal , closeModal , setChild } from "../../store/slices/modalSlice"

//import context
import ArticlesListContext from '../../contexts/articlesListContext';

//import Reducers
import AppReducer from '../../reducers/appReducer';

import ArticlesList from "./articlesList";
import AddArticle from "./addArticle"
import EditArticle from "./editArticle";
import Modal from "../../components/modal/modal";

import articleApi from '../../api/articlesApi';

export default function ArticlesSection() {
    const dispatch = useDispatch()

    const ArticlesContext = useContext(ArticlesListContext);
    const [articlesList , dispatchArticles] = useReducer(AppReducer,ArticlesContext);

    const showModal = useSelector((state) => state.modal.showModal)
    const modalChildShow = useSelector(state => state.modal.child);

    const openAddModalHandler = () => {
        dispatch(openModal())
        dispatch(setChild('addarticle'))
    }    

    useEffect(() => {
        getArticles();
    } , [])

    const getArticles = async () => {
        try {
            let response = await articleApi.get();
            dispatchArticles({ type: 'fetch_articles' , payload :{data : response.data.data} });
        } catch (e) {
            console.log(e);
        }
    }

    let addArticle = async (article) =>{
        try {
            let res = await articleApi.post("/" , article)
            article.id = res.data.data.id;
            dispatchArticles({ type: 'add_article' , payload :{article} });
            dispatch(closeModal());
        } catch (e) {
            console.log(e);
        }
       
    };

    let deleteArticle = async (id) =>{
        try {
            await articleApi.delete(`/${id}`)
            dispatchArticles({ type: 'delete_article' , payload :{id} });
        } catch (e) {
            console.log(e);
        }
    };


    let editArticle = async (id) =>{
        dispatchArticles({ type: 'target_article' , payload :{ id : id } });
        dispatch(setChild('editArticle'))
        dispatch(openModal())
    };


    let saveArticle = async (article) =>{
        try {
            await articleApi.put(`/${ article.id }`,article);
            getArticles();
            dispatch(closeModal());
        } catch (e) {
            console.log(e);
        }
    };
    
    return (
        <div className="flex items-center justify-center bg-teal-lightest">
            <div className="bg-white rounded shadow p-6 m-4 w-full border">
                <ArticlesListContext.Provider value={{
                        articles : articlesList.articles,
                        targetArticle: articlesList.targetArticle,
                        addArticle,
                        deleteArticle,
                        editArticle,
                        saveArticle
                    }}>

                    <div className="mb-4">
                        <div className="inset-0 flex items-center justify-center">
                            <Button className="text-black bg-slate-400 text-sm" onClick={openAddModalHandler}>
                                        اضافه کردن مقاله جدید
                            </Button>
                        </div>                    
                    </div>

                    <div>
                        <ArticlesList />
                    </div>
                    {
                         showModal && <Modal>
                            {
                                modalChildShow === 'addarticle' 
                                ? <AddArticle />
                                : <EditArticle />
                            }
                        </Modal>
                    }
                   
                </ArticlesListContext.Provider>
            </div>
        </div>
    )
}