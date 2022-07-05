import { useState , useContext } from 'react';
import articlesListContext from '../../contexts/articlesListContext';

function EditArticle() {

    const ArticlesContext = useContext(articlesListContext);
    const  targetArticle = ArticlesContext.targetArticle;
      const [ article , setUser ] = useState({
            id : targetArticle.id ,
            title : targetArticle.title ,
            body : targetArticle.body ,
            auter: targetArticle.auter ,
            create_date : targetArticle.create_date.length>11 ? targetArticle.create_date.slice(0, 10) : targetArticle.create_date
      });

  
      let formHandler = async (e) => {
          e.preventDefault();
          ArticlesContext.saveArticle(article)
        }

      const inputHandler = (e) => {
          setUser({
              ...article,
              [e.target.name] : e.target.value
          })
      }
  
    return (
      <>
        <div className="m-4">
            <form className="form-inline" onSubmit={formHandler}>
            <label className="block text-right">
                <span className="block text-sm font-medium text-slate-700"> عنوان مقاله</span>
                <input type="text" name='title' value={article.title} onChange={inputHandler} className="text-right 
                mt-1 block w-full px-3 py-2 bg-white border 
                border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>
            <label className="block text-right">
                <span className="block text-sm font-medium text-slate-700"> متن</span>
                <textarea type="text"  name='body' onChange={inputHandler} value={article.body} className="text-right 
                mt-1 block w-full px-3 py-2 bg-white border 
                border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                " >
                </textarea>
            </label>
            <label className="block text-right">
                <span className="block text-sm font-medium text-slate-700">نویسنده</span>
                <input type="text"  name='auter' value={article.auter} onChange={inputHandler} className="text-right 
                mt-1 block w-full px-3 py-2 bg-white border 
                border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                "/>
            </label>

            <label className="block text-right">
                <span className="block text-sm font-medium text-slate-700">تاریخ ایجاد</span>
                <input type="date"  name='create_date' value={article.create_date} onChange={inputHandler} className="text-right 
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
                    ویرایش
                    </button>
                </div>
            </form>
        </div>                  
                  
      </>
    )
}


export default EditArticle;