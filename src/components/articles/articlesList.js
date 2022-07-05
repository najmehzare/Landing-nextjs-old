import React , {useContext} from 'react';
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

//import components
import ArticleItem from "./articleItem";

//import context
import ArticlesListContext from '../../contexts/articlesListContext';

function ArticlesList() {

    const ArticlesContext = useContext(ArticlesListContext);
    const articlesList = ArticlesContext;
       
    return (
        <>
            <div className='grid justify-items-center '>
            <Card className="">
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                    لیست مقالات
                    </Typography>
                        <table className="text-right min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        ردیف
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        عنوان
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        نویسنده
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                                        تاریخ ایجاد
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">ویرایش</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                               
                                     {
                                    ! articlesList.articles
                                            ? <tr><td>
                                                    <p>there isn`t any article</p>
                                            </td></tr>
                                            : 
                                            articlesList.articles.map((item,index) => <ArticleItem 
                                                key = {item.id}
                                                article={item} 
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


export default ArticlesList;