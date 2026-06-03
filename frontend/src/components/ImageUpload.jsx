import React, { useState } from 'react';
import './imageUpload.css';

function ImageUpload({images, handleFileChange, handleRemoveFile}) {

    return (
        <div className="images-box">
            <label htmlFor="images" className="upload-container">
                <div className="upload-icon-wrapper">
                    <i className="fa-regular fa-image upload-icon"></i>
                </div>
                <div className="upload-text">
                    <span className="browse-text">Browse</span>
                </div>
                <div className="upload-subtext">
                    Supports: JPG, JPEG2000, PNG
                </div>
                <input
                    type="file"
                    name="images"
                    multiple
                    id="images"
                    accept="image/*"
                    className="file-input"
                    onChange={handleFileChange}
                />
            </label>

            {images?.map((file, idx) => (
                <div key={idx} className="fileInfo">
                    <div className="fileIcon">
                        <i className="fa-solid fa-image"></i>
                    </div>
                    <div className="fileMeta">
                        <h3 title={file.name}>{file.name}</h3>
                        <p>{file.type} · {file.size/1024 > 1024 ? `${Math.round(file.size / (1024 * 1024))} MB` : `${Math.round(file.size / 1024)} KB`}</p>
                    </div>
                    <div className='circleCross' onClick={() => handleRemoveFile(idx)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            ))}

        </div >
    );
}

export default ImageUpload;
