import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

export const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setSelectedFile(file);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const uploadFile = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            setUploading(true);

            setTimeout(() => {
                axios
                    .post('http://localhost:4000/upload', formData, {
                        onUploadProgress: (progressEvent) => {
                            const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                            setUploadProgress(progress);
                        },
                    })
                    .then((response) => {
                        // Process the response if needed
                        console.log(response.data);
                        setSelectedFile(null);
                        setUploading(false);
                        setUploadProgress(0);
                    })
                    .catch((error) => {
                        // Handle errors from the API call
                        console.error(error);
                        setSelectedFile(null);
                        setUploading(false);
                        setUploadProgress(0);
                    });
            }, 2000)
        }
    }

    useEffect(() => {
        if (!uploading && uploadProgress === 100) {
            // Reset the progress after completion
            setUploadProgress(0);
        }
    }, [uploading, uploadProgress]);

    const selectedFileName = selectedFile ? selectedFile.name : '';

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-700" onDrop={handleDrop} onDragOver={handleDragOver}>
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-1/2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                {selectedFile && !uploading
                    ?
                    (<div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faFileExcel} size="3x" className="mb-4 text-gray-500" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">{selectedFileName}</p>
                        <button
                            onClick={uploadFile}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Upload
                        </button>
                    </div>)
                    :
                    uploading
                        ?
                        (<div className="flex flex-col items-center">
                            <div className="w-48 h-4 bg-gray-300 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-500 transition-all duration-200"
                                    style={{ width: `${uploadProgress}%` }}
                                ></div>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">Uploading...</p>
                        </div>)
                        :
                        (<div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click para subir</span> o arrastra y suelta</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SUBE TU ARCHIVO EXCEL</p>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                        </div>)
                }
            </label >
        </div >
    )
}
