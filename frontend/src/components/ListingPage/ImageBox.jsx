import "./imageBox.css";

function ImageBox({image}) {
    return (
        <div className="image-box carousel">
            {image.map((imgObj, idx) => (
                <div key={idx} className="img-container"><img src={imgObj.imgURL} alt={imgObj.filename} /></div>
            ))}
        </div>
    );
}

export default ImageBox;