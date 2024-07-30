import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';
import {Button, Col, Container, Row, Table} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

let ShowOne = () => {
    let [data, setData] = useState({})
    let params = useParams()
    let id = parseInt(params.id)
    let navigate = useNavigate();
    let goBack = () => {
        navigate(-1)
    }

    useEffect(()=>{
        let selectOne = async () => {
            try {
                // json형태로 데이터를 받아오기 때문에 그대로 setData(자바스크립트에서 이용하는 형태)에 사용할 수 있다.
                let resp = await axios.get('http://localhost:8080/board/showOne/' + id, {})

                if (resp.status === 200) {
                    setData(resp.data)
                }
            } catch (e) {
                console.log(e)
            }

        }

        selectOne()
    }, [])

    return (
        <Container className={"mt-3"}>
            <Table striped bordered hover>
                <tbody>
                <tr>
                    <td colSpan={2}>제목: {data.title}</td>
                </tr>
                <tr>
                    <td colSpan={2}>글번호: {data.id}</td>
                </tr>
                <tr>
                    <td colSpan={2}>작성자: {data.nickname}</td>
                </tr>
                <tr>
                    <td>작성일: {data.entryDate}</td>
                    <td>수정일: {data.modifyDate}</td>
                </tr>
                <tr>
                    <td colSpan={2}>내용</td>
                </tr>
                <tr>
                    <td colSpan={2}>{data.content}</td>
                </tr>
                <tr>
                    <td colSpan={2} className={"text-center"}>
                        <Button onClick={goBack} className={"btn btn-outline-=danger"}>뒤로가기</Button>
                    </td>
                </tr>
                </tbody>
            </Table>
        </Container>

    )
}

export default ShowOne;