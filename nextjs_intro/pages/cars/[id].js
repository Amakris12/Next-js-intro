import {useRouter} from 'next/router'
import Head from 'next/head'

export default function Car({car}){
    const router = useRouter()
    const {id} = router.query
    console.log(car)
    return (<>
        <Head>
            <title>{car.color}{car.id}</title>
        </Head>
        <h1>Hello {id}</h1>
        <img src={car.image} width="300px"/>
        </>)
}

// export const getStaticPaths = async() =>{
//     // this method can also request information from an api after its job is to return a paths object that contains an array that with every route for the dynamic url
//     const req = await fetch('http://localhost:3000/cars.json')
//     const data= await req.json()

//     const paths = data.map((car) =>{
//         return {params: {id:car}}
//     })
//     return {paths, fallback: false}
// }

// export async function getStaticProps({params}){
//     const req = await fetch(`http://localhost:3000/${params.id}.json`)
//     const data = await req.json()
//     return {
//         props:{car:data}
//     }
// }

export const getServerSideProps= async({params})=>{
    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json()
    return {
        props:{car:data}
    }
}