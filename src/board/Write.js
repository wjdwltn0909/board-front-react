import {useState} from "react";
import {Container, FormControl, Table} from "react-bootstrap";

let Write = () => {
    let [inputs, setIndex] = useState({
        title: '',
        content: ''
    });
}
// 여기다시
    return (
        <Container>
            <Table striped Over>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td><FormControl type={'text'} value={inputs.title} name={'title'}/></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><textarea name={'content'} value={inputs.content}  className={'form-control'}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type={'submit'}>
                                작성하기
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )

export default  Write