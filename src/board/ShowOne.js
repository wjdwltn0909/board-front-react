import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';
import {Col, Container, Row, Table} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

let ShowOne = () => {
    let [data, setData] = useState({})
    let params = useParams()
    let id = parseInt(params.id)

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
        <Container>
            <Row className="justify-content-center">
                {/*작은창, 중간창, 큰창 일 때, 동일하게 열 길이=6으로 설정한 것*/}
                <Col xs md lg={6} style={{backgroundColor:'lightblue'}}>
                    <Table striped bordered hover>
                        <tr>
                            <td>제목: {data.title}</td>
                        </tr>
                        <tr>
                            <td>글번호: {data.id}</td>
                        </tr>
                        <tr>
                            <td>작성자: {data.nickname}</td>
                        </tr>
                        <tr>
                            <td>작성일: {data.entryDate}</td>
                            <td>수정일: {data.modifyDate}</td>
                        </tr>
                        <tr>
                            <td>내용</td>
                        </tr>
                        <tr>
                            <td>{data.content}</td>
                        </tr>
                    </Table>
                </Col>
            </Row>
        </Container>

    )
}

export default ShowOne;