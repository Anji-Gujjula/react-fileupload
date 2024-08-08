import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import FileDownload from './components/FileDownload';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React File Upload & Download</h1>
                <FileUpload />
                <FileDownload />
            </header>
        </div>
    );
}

export default App;
