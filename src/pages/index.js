import Link from 'next/link'
import Head from 'next/head'
import Error from 'next/error';

const Home = props => {
    if(props.errorCode){
        return <Error statusCode={props.errorCode} title='چنین پستی وجود ندارد'/>
    }
    return (
        <>
        <div>
            <Head><title>وب سایت</title></Head>
            
            <h2>Hello Roocket</h2>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/articles">
                        <a>Articles</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about-us">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact-us">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
            <h2>Blog articlesList</h2>
            <ul>
                {
                    props.articlesList.map(article => {
                        return (
                            <li key={article.id}>
                                <Link href="/articles/[id]" as={`/articles/${article.id}`} >
                                    <a>{article.title}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
};

export async function getServerSideProps() {
    let res = await fetch('https://62938cc54e324aacf6dc89d4.endapi.io/articles');
    let errorCode = res.ok ? false : res.status;
    let data = await res.json();
    let articlesList = data.data;
    return {
        props : {
            errorCode,
            articlesList
        }
    }
}

export default Home;