import {useEffect, useState } from "react"

const useFetch=(url)=>{
    const [data,setData]=useState([])
    useEffect(()=>{
    fetch(url).then(response=>{
        response.json().then(output=>{
            setData(output)
        })
    })
    },[])
    return data

}
export default useFetch