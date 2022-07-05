import React from "react";

const ArticlesListContext = React.createContext({
    articles : [],
    targetArticle : {},
    addArticle : () =>{},
    deleteArticle : () =>{},
    editArticle : () =>{},
    saveArticle : () =>{},
});

export default ArticlesListContext;