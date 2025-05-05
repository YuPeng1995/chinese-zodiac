// Import required components and data
import Animal from "./Animal";
import zodiacAnimals from '../js/zodiac';
import "./../styles/About.css";

// About component displays tabbed interface showing details for each zodiac animal
export default function About() {
    
    // Handle tab switching by updating active classes
    function switchTab(e) {
        const tabHeaders = document.querySelectorAll('.tab-header');
        const tabContents = document.querySelectorAll('.tab-content');

        tabHeaders.forEach(header => header.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        const clickedTab = e.target;
        clickedTab.classList.add('active');

        const tabId = clickedTab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    }

    return (<>
        <h2 id="zodiac-heading">Zodiac Animals</h2>
        <div id="tabs" role="tablist" aria-labelledby="zodiac-heading">
            <div className="tab-headers">
                {zodiacAnimals.map((item, index) => {
                    if (index === 0) {
                        return <button
                            className="tab-header active"
                            data-tab={`tab${index + 1}`}
                            key={index}
                            onClick={switchTab}
                            role="tab"
                            aria-selected="true"
                            aria-controls={`tab${index + 1}`}
                            id={`tab-btn-${index + 1}`}
                        >{item.name}
                        </button>
                    } else {
                        return <button
                            className="tab-header"
                            data-tab={`tab${index + 1}`}
                            key={index}
                            onClick={switchTab}
                            role="tab" 
                            aria-selected="false"
                            aria-controls={`tab${index + 1}`}
                            id={`tab-btn-${index + 1}`}
                        >{item.name}
                        </button>
                    }
                })}
            </div>
            {zodiacAnimals.map((item, index) => {
                if (index === 0) {
                    return <div 
                        key={index} 
                        className="tab-content active" 
                        id={`tab${index + 1}`}
                        role="tabpanel"
                        aria-labelledby={`tab-btn-${index + 1}`}
                    >
                        <Animal animal={zodiacAnimals[index]} noDescription={false} />
                    </div>
                } else {
                    return <div 
                        key={index} 
                        className="tab-content" 
                        id={`tab${index + 1}`}
                        role="tabpanel"
                        aria-labelledby={`tab-btn-${index + 1}`}
                    >
                        <Animal animal={zodiacAnimals[index]} noDescription={false} />
                    </div>
                }
            })}
        </div>
    </>);
}