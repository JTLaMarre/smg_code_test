import React, {useState} from 'react'


const File = ()=>{

const [file,setFile]=useState('')

const handleFile =(e)=>{

    // console display the selected file
    console.log(e.target.files[0])
    // setFile state to selected file 
    setFile(e.target.files[0])
}

    return(
        <input type="file" onChange={handleFile}/>
    )
}

export default File