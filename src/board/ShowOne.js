import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios'

let ShowOne = () => {
    let [data, setData] = useState({
        id: '',
        title: '',
        content: '',
        nickname: ''
    })
    let params = useParams()
    let id = parseInt(params.id)

    useEffect(( )=>{
        let test = async () => {
            let resp = await axios.get('http://localhost:8080/', {})

            if (resp.status === 200) {
                setData(resp.data)
            }
        }

        test()
        console.log(data)
    }, [])

    return (
        <div>
            <h1>{data.id}</h1>
            <h1>{data.title}</h1>
            <h1>{data.nickname}</h1>
            <h1>{data.entryDate}</h1>
            <h1>{data.modifyDate}</h1>
            <hr/>
            <h1>{data.content}</h1>

        </div>

    )
}

export default ShowOne;