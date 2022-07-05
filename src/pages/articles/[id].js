import { useRouter } from 'next/router';
import Link from 'next/link'
import Head from 'next/head';

const SignleArticle = props => {

    const router = useRouter();

    const { article } = props;
    return (
        <>
            <Head>
                <title>
                    {article.title} 
                </title>
             </Head>
            <Link href="/">
                <a>Home</a>
            </Link>
            <h2>Article Id : {router.query.id}</h2>
            <h6>auter : {article.auter}</h6>
            <h6>create date : {article.create_date}</h6>
            <p>article title : {article.title}</p>
            <p>article body : {article.body}</p>
        </>
    )
}

export async function getServerSideProps({ params }){
    let res = await fetch(`https://62938cc54e324aacf6dc89d4.endapi.io/articles/${params.id}`);
    let data = await res.json();
    let article = data.data;

    return {
        props : {
            article
        }
    }
}

export default SignleArticle;
