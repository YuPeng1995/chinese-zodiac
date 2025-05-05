// Import useRef hook for managing DOM references
import { useRef } from "react";

// Navigation component handles the hamburger menu and navigation links
// Props:
// - toggleHamburger: Function to toggle hamburger menu state
// - changePath: Function to handle client-side navigation
export default function Navigation({ toggleHamburger, changePath }) {
    // Reference to submenu element for toggling visibility
    const submenu = useRef();

    // Toggles the submenu visibility by adding/removing CSS classes
    function toggleHamburger() {
        const isExpanded = submenu.current.classList.contains('nav-submenu-show');
        const button = document.querySelector('.nav-button');
        button.setAttribute('aria-expanded', !isExpanded);
        
        if (submenu.current.className == 'nav-submenu' ||
            submenu.current.className == 'nav-submenu dark') {
            submenu.current.classList.add('nav-submenu-show');
        } else {
            submenu.current.classList.remove('nav-submenu-show');
        }
    }

    return (<>
        {/* Main navigation container with hamburger menu toggle */}
        <nav className="nav-menu" aria-label="Main" onClick={toggleHamburger}>
            {/* Hamburger menu button */}
            <button 
                className="nav-button" 
                aria-expanded="false"
                aria-controls="nav-submenu"
                aria-label="Toggle navigation menu"
            >☰</button>
            {/* Submenu containing navigation links */}
            <ul 
                className="nav-submenu" 
                ref={submenu}
                id="nav-submenu"
                role="menu"
                aria-hidden="true"
            >
                <li role="none"><a href="/" onClick={changePath} role="menuitem">Homepage</a></li>
                <li role="none"><a href="/about" onClick={changePath} role="menuitem">About Zodiac</a></li>
                <li role="none"><a href="/register" onClick={changePath} role="menuitem">Register to vote</a></li>
            </ul>
        </nav>
    </>);
}