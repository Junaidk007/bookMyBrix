import "./imageBox.css";

function ImageBox({image}) {
    return (
        <div className="image-box carousel">
            {image.map((imgObj, idx) => (
                <div key={idx} className="img-container"><img src={`${imgObj.imgURL}?w=1200&auto=format&fit=crop&q=85`} alt={imgObj.filename} /></div>
            ))}
        </div>
    );
}

export default ImageBox;