import { useRouter } from 'next/router'

const Articles = () => {
    const router = useRouter();

    return (
        <>
            <h2>Article Id : {router.query.id}</h2>
            <p>article title : {router.query.title}</p>
        </>
    )
}




export default Articles;
