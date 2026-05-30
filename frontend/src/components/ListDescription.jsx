import './listDescription.css';

function ListDescription() {
    return (
        <div className="listing-description">
            <p className='main-description'>
                Welcome to a bright, comfortable space located in the heart of Rajajipuram, Lucknow
                This property is designed to give you a relaxed and stylish experience. Perfect for short getaways or business travelers looking for convenience.
            </p>
            <div className="highlights">
                <h3>Highlights:</h3>
                <li>Spacious room with natural light</li>
                <li>Modern interiors & comfy bedding</li>
                <li>Close to markets, cafes & transport</li>
                <li>Safe, quiet neighborhood</li>
            </div>
        </div>
    );
}

export default ListDescription;