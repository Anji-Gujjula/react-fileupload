import React, { useState } from 'react';
import axios from 'axios';

const FileDownload = () => {
    const [filename, setFilename] = useState('');

    const onFileDownload = () => {
        axios({
            url: `http://localhost:8080/download/${filename}`,
            method: 'GET',
            responseType: 'blob', // Important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename); // Set the file name
            document.body.appendChild(link);
            link.click();
        }).catch(() => {
            alert('File download failed.');
        });
    };

    return (
        <div>
            <h2>File Download</h2>
            <input
                type="text"
                placeholder="Enter filename"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
            />
            <button onClick={onFileDownload}>Download</button>
        </div>
    );
};

export default FileDownload;
