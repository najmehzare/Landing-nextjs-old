
function AppReducer(state , action){
    switch (action.type) {
        case 'fetch_articles':
            return fetchArticles(state , action);
        case 'add_article':
            return addArticles(state , action);
        case 'target_article':
            return setTargetArticle(state , action);    
        case 'delete_article':
            return deleteArticle(state , action);
        default:
            return state;
    }
}

export default AppReducer;

let fetchArticles = (state , action) =>{
    let data = action.payload.data;
        return {
            articles : data  
        }
}

let setTargetArticle = (state , action) =>{
    let id = action.payload.id;
        return {
            ...state,
            targetArticle : state.articles.find(item => item.id === id) 
        }
}

let addArticles = (state , action) =>{
    let {article} = action.payload;
        return {
            articles : [
                ...state.articles,
                article
            ]   
        }
}

let deleteArticle = (state , action) =>{
    let {id} = action.payload;
    return {
        articles : state.articles.filter(item => item.id !== id)
    }
}
