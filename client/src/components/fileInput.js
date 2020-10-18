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
        const fd = new FormData();
        fd.append('image',file,file.name,fd)
        Axios.post('https://us-central1-smg-test-ad36e.cloudfunctions.net/fileUpload')
        .then(res=>{
            console.log(res)
        })
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
                    <button className="btn btn-info"onClick={handleUpload}>Upload</button>
                </Col>
            </Row>
            <Row className="justify-content-center">
        <Col>
            <input type="text" value={file.name}></input>
        </Col>
            </Row>
        </div>
    )
}

export default File