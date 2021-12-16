import React, { useState } from 'react'
import ProgressBar from './../progressBar/ProgressBar'
import './uploadForm.css'
function UploadForm() {
    const [file, setFile] = useState(null)
    const [err, setErr] = useState(null)
    const types = ['image/png','image/jpeg']
    const handleChangeText  = (e) => {
        let selected = e.target.files[0]
        if(selected && types.includes(selected.type)) {
            setFile(selected)
            setErr('')
        } else {
            setFile(null)
            setErr('Please select  an image file (png or jpeg)')
        }

    }
    console.log(file);
    return (
        <form action="">
            <label>
                <input type="file" name="" id="" onChange={handleChangeText} />
                <span>+</span>
            </label>
            
            <div className="output">
                {err && <div className="err">{err}</div> }
                { file && <div>{ file.name }</div> }
                {file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm
