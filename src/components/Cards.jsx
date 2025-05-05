// Import required styles, components and data
import "./../styles/Cards.css";
import { useState } from "react";
import CardList from "./CardList";
import Animal from "./Animal";
import zodiacAnimals from "../js/zodiac";

// Cards component displays Chinese zodiac animals with sorting and show/hide functionality
export default function Cards() {
    // State for sorting method and display toggle
    const [currentSort, setCurrentSort] = useState('default');
    const [showAll, setshowAll] = useState(false);

    // Handle sort selection change
    function changeCurrentSort(e) {
        setCurrentSort(prev => e.target.value);
        setshowAll(prev => true);
    }

    // Toggle between showing all or partial list
    function handleToggle() {
        setshowAll(prev => !prev);
    }

    return (<>
        <h2 id="zodiac-heading">Chinese Zodiac Animals</h2>
        <div id="sort-container-cards" role="region" aria-labelledby="zodiac-heading">
            <label className="sort-label" htmlFor="select">Sort by</label>
            <select
                className="sort-select"
                id="select"
                value={currentSort}
                onChange={changeCurrentSort}
                aria-label="Sort zodiac animals"
            >
                <option value="default">Default</option>
                <option value="votes">Votes (high-low)</option>
                <option value="votesdsc">Votes (low-high)</option>
                <option value="element">Element</option>
            </select>
        </div>

        {/* Preview grid showing first two animals when collapsed */}
        {!showAll &&
            <div className="zodiac-grid" role="list" aria-label="Preview of zodiac animals">
                {zodiacAnimals.map((item, index) => {
                    if (index < 2) {
                        return (<section className="animal-card" key={index} role="listitem">
                            <Animal
                                animal={item}
                                noDescription={true}
                            />
                        </section>);
                    }
                    else return;
                })}
            </div>
        }
        {/* Full list of animals when expanded */}
        {showAll &&
            <CardList handleToggle={handleToggle} sort={currentSort} />
        }
        {<button 
            className="show-more-button" 
            onClick={handleToggle}
            aria-expanded={showAll}
            aria-controls="zodiac-grid"
        >
                {showAll ? 'Show Less ▲' : 'Show More ▼'}
        </button>}
    </>);
}