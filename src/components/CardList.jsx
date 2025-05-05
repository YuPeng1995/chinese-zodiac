// Import required data and components
import zodiacAnimals from '../js/zodiac';
import Animal from './Animal';

// CardList component displays grid of zodiac animals with different sorting options
// Props:
// - sort: String indicating sort method ('default', 'votes', 'votesdsc', or 'element')
export default function CardList({ sort }) {
    return (
        <>
            {sort === "default" && <div className="zodiac-grid" role="list" aria-label="Grid of zodiac animals in default order">
                {zodiacAnimals.map((item, index) => (
                    <section className="animal-card" key={index} role="listitem">
                        <Animal
                            animal={item}
                            noDescription={true}
                        />
                    </section>
                ))}
            </div>}
            {sort === "votes" && <div className="zodiac-grid" role="list" aria-label="Grid of zodiac animals sorted by votes, highest first">
                {structuredClone(zodiacAnimals).sort((a, b) => b.votes - a.votes).map((item, index) => (
                    <section className="animal-card" key={index} role="listitem">
                        <Animal
                            animal={item}
                            noDescription={true}
                        />
                    </section>
                ))}
            </div>}
            {sort === "votesdsc" && <div className="zodiac-grid" role="list" aria-label="Grid of zodiac animals sorted by votes, lowest first">
                {structuredClone(zodiacAnimals).sort((a, b) => a.votes - b.votes).map((item, index) => (
                    <section className="animal-card" key={index} role="listitem">
                        <Animal
                            animal={item}
                            noDescription={true}
                        />
                    </section>
                ))}
            </div>}
            {sort === "element" && <div className="zodiac-grid" role="list" aria-label="Grid of zodiac animals sorted by element">
                {structuredClone(zodiacAnimals).sort((a, b) => a.element.localeCompare(b.element)).map((item, index) => (
                    <section className="animal-card" key={index} role="listitem">
                        <Animal
                            animal={item}
                            noDescription={true}
                        />
                    </section>
                ))}
            </div>}
        </>
    );
}