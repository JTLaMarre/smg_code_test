import React, { useState } from 'react'
import Axios from 'axios';
import { Col, Row } from 'react-bootstrap'


const File = () => {

    const [file, setFile] = useState('')

    // method of grabbing the file
    const handleFile = (e) => {

        // console display the selected file
        console.log(e.target.files[0])
        // setFile state to selected file 
        setFile(e.target.files[0])
    }
    // method of uploading the file
    const handleUpload = () => {
        Axios.post('')
    }

    return (
        <div>

            <Row className="justify-content-center">
                <Col>
                    <input type="file" onChange={handleFile} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <button className="btn btn-info">Submit</button>
                </Col>
            </Row>
            <Row className="justify-content-center">
        <Col>
            <input type="text" value={file}></input>
        </Col>
            </Row>
        </div>
    )
}

export default File