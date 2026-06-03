import './listDescription.css';

function ListDescription({description, highlights}) {
    return (
        <div className="listing-description">
            <p className='main-description'>
               {description}
            </p>
            <div className="highlights">
                <h3>Highlights:</h3>
                {highlights.map((li, idx) => (<li key={idx}>{li}</li>))}
            </div>
        </div>
    );
}

export default ListDescription;