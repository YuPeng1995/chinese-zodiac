// Import Navigation component for header menu
import Navigation from "./Navigation";

// Header component displays the site header with logo, title, and navigation
// Props:
// - changePath: Function to handle client-side navigation
export default function Header({ changePath }) {

    return (<>
        <header role="banner" aria-label="Site header">
            {/* Skip link for keyboard accessibility */}
            <a id="skiplink" href="#main-content" aria-label="Skip to main content">Skip to content</a>
            {/* Site logo with link to homepage */}
            <a href="/" aria-label="Home">
                <img id="logo" src="images/logo.png"
                    alt="Symbolic Chinese dragon for the Chinese Zodiac" />
            </a>
            {/* Site title */}
            <h1 aria-level="1">Your Favorite Chinese Zodiac</h1>
            {/* Navigation menu component */}
            <Navigation changePath={changePath} />
        </header>
    </>);
}