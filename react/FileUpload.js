import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:8080/upload', formData)
            .then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
                setMessage('Failed to upload file.');
            });
    };

    return (
        <div>
            <h2>File Upload</h2>
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>Upload</button>
            <p>{message}</p>
        </div>
    );
};

export default FileUpload;
