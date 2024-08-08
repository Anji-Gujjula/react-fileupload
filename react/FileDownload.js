import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    // State to hold the selected file
    const [file, setFile] = useState(null);

    // State to hold the message displayed after the upload attempt
    const [message, setMessage] = useState('');

    // Function to handle file selection
    const onFileChange = (e) => {
        // Set the selected file in the state
        setFile(e.target.files[0]);
    };

    // Function to handle file upload
    const onFileUpload = () => {
        // Create a FormData object to hold the file data
        const formData = new FormData();
        formData.append('file', file); // Append the selected file to the FormData object

        // Make a POST request to upload the file to the server
        axios.post('http://localhost:8080/upload', formData)
            .then((response) => {
                // Set the success message from the server response
                setMessage(response.data);
            })
            .catch((error) => {
                // Set an error message if the upload fails
                setMessage('Failed to upload file.');
            });
    };

    return (
        <div>
            <h2>File Upload</h2>
            {/* File input for selecting the file to upload */}
            <input type="file" onChange={onFileChange} />
            {/* Button to trigger the file upload */}
            <button onClick={onFileUpload}>Upload</button>
            {/* Display the message after upload attempt */}
            <p>{message}</p>
        </div>
    );
};

export default FileUpload;
