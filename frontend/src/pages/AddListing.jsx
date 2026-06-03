import React, { useState } from 'react';
import './addListing.css';
import ImageUpload from '../components/ImageUpload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialFormData = {
    title: '',
    description: '',
    highlights: [
        '',
        '',
        '',
        ''
    ],
    price: '',
    images: []
};

const highlights = [
    'Spacious room with natural light',
    'Modern interiors & comfy bedding',
    'Close to markets, cafes & transport',
    'Safe, quiet neighborhood'
]

function AddListing() {

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData, [e.target.id]: e.target.type === 'number' ? Number(e.target.value) : e.target.value
        }))
    }

    const handleHighlight = (idx, value) => {
        let updatedHighlights = [...formData.highlights]

        updatedHighlights[idx] = value

        setFormData((prevData) => ({
            ...prevData, highlights: updatedHighlights
        }))

    }

    const handleFileChange = (e) => {

        const selectedFile = Array.from(e.target.files);

        if (selectedFile.length + formData.images.length > 5) return alert('you can only upload 5 images');

        setFormData((prevData) => (
            { ...prevData, images: [...prevData.images, ...selectedFile] }
        ))
    }

    const handleRemoveFile = (idx) => {
        setFormData((prevData) => (
            { ...prevData, images: prevData.images.filter((_, i) => i !== idx) }
        ))
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        const { title, description, highlights, price, images } = formData;

        if (
            !title.trim() ||
            !description.trim() ||
            !price ||
            !highlights[0].trim() ||
            images.length === 0
        ) {
            toast.error("All fields are required");
            return;
        }

        setFormData(initialFormData)
    }
    return (
        <>
            <div className="add-listing-container">
                <h2>Add New Property Listing</h2>

                <form className="listing-form" onSubmit={handleSubmit}>
                    {/* Title */}
                    <div className="form-group">
                        <label htmlFor="title">Property Title</label>
                        <input
                            type="text"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder='e.g., Casa One – Premium Cozy Retreat, Rajajipuram'
                        />
                    </div>

                    {/* Price and Rating Row */}
                    <div className="form-group">
                        <label htmlFor="price">Price (per night in ₹)</label>
                        <input
                            value={formData.price}
                            onChange={handleChange}
                            type="number"
                            id="price"
                            placeholder='e.g., 2000'
                        />
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            value={formData.description}
                            onChange={handleChange}
                            id="description"
                            placeholder='e.g., Welcome...'
                        ></textarea>
                    </div>

                    {/* Highlights Section */}
                    <div className="section-title">Highlights</div>
                    <div className="highlights-grid">
                        {formData.highlights.map((highlight, idx) => (
                            <div key={idx} className="form-group">
                                <label htmlFor={`highlight${idx}`}>Highlight {idx + 1} {idx > 0 ? '(optional)' : '*'}</label>
                                <input value={highlight} type="text" id={`highlight${idx}`} placeholder={`e.g.,${highlights[idx]}`} onChange={(e) => handleHighlight(idx, e.target.value)} />
                            </div>
                        ))}
                    </div>

                    {/* Images Section */}
                    <div className="section-title">Images</div>
                    <ImageUpload images={formData.images} handleFileChange={handleFileChange} handleRemoveFile={handleRemoveFile} />

                    {/* Submit Button */}
                    <button type="submit" className="submit-btn">
                        Create Listing
                    </button>
                </form>

            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}

export default AddListing;