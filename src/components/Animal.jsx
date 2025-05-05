import "./../styles/Animal.css";

// Animal component displays individual animal with name, image, and details
// Props:
// - animal: Animal object containing name, element, years, traits, votes, and description
// - noDescription: Boolean indicating whether to hide the description
export default function Animal({ animal, noDescription }) {
    return (
        <>
            <h2 className="animal-name">{animal.name}</h2>
            <img
                className="animal-image"
                src={`${import.meta.env.BASE_URL}images/${animal.name.toLowerCase()}.png`}
                alt={`${animal.name} zodiac animal`}
            />
            <ul className="animal-details">
                <li className="animal-detail-item">
                    <span className="detail-label">Element:</span>
                    <span className="detail-value">{animal.element}</span>
                </li>
                <li className="animal-detail-item">
                    <span className="detail-label">Years:</span>
                    <span className="detail-value">{animal.years}</span>
                </li>
                <li className="animal-detail-item">
                    <span className="detail-label">Traits:</span>
                    <span className="detail-value">{animal.traits}</span>
                </li>
                <li className="animal-detail-item">
                    <span className="detail-label">Votes:</span>
                    <span className="detail-value">{animal.votes}</span>
                </li>
                {!noDescription && (
                    <li className="animal-detail-item">
                        <span className="detail-label">Description:</span>
                        <span className="detail-value">{animal.description}</span>
                    </li>
                )}
            </ul>
        </>
    );
}