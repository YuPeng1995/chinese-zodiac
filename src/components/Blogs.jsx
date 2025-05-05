// Import required dependencies and components
import { useState } from "react";
import zodiacAnimalsLoversBlog from "../js/blogs";
import "./../styles/Blogs.css";
import { useRef } from "react";
import BlogList from "./BlogList";
import Blog from "./Blog";

// Blogs component displays blog posts with sorting and show/hide functionality
export default function Blogs() {
    // Refs and state management
    const dialogRef = useRef();
    const [currentBlog, setCurrentBlog] = useState('');
    const [currentSort, setCurrentSort] = useState('default');
    const [showAll, setshowAll] = useState(false);

    // Handle modal display
    function toggleModal(item) {
        if (dialogRef.current.open) {
            dialogRef.current.close();
        } else {
            dialogRef.current.showModal();
        }
        if (item != '') setCurrentBlog(prev => item);
    }

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
        {/* Blog post modal dialog */}
        <dialog
            ref={dialogRef}
            id="modal-blog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            role="dialog"
            aria-modal="true"
        >
            <div className="modal-content" role="document">
                {currentBlog !== '' && (
                    <>
                        <h3 id="modal-title" className="modal-title">{currentBlog.title}</h3>
                        <span className="modal-author" aria-label="Blog author and date">
                            {currentBlog.author} - {currentBlog.date}
                        </span>
                        <p id="modal-description" className="modal-description">{currentBlog.content}</p>
                    </>
                )}
                <div className="modal-close">
                    <button
                        className="modal-close-button"
                        onClick={() => toggleModal('')}
                        aria-label="Close blog post"
                    >
                        Close
                    </button>
                </div>
            </div>
        </dialog>

        {/* Blog section heading */}
        <h2 id="blogs-heading">Blogs</h2>

        {/* Sort controls */}
        <div id="sort-container-blogs" role="region" aria-labelledby="blogs-heading">
            <label htmlFor="select" className="sort-label">Sort by</label>
            <select 
                className="sort-select" 
                name="select" 
                id="select" 
                value={currentSort} 
                onChange={changeCurrentSort}
                aria-label="Sort blog posts"
            >
                <option value="default">Default</option>
                <option value="time">Newest-Oldest</option>
                <option value="timedsc">Oldest-Newest</option>
                <option value="name">Name (A-Z)</option>
                <option value="namedsc">Name (Z-A)</option>
            </select>
        </div>

        {/* Preview list showing first two blogs when collapsed */}
        {!showAll &&
            <ul className="blog-list" role="list" aria-label="Preview of blog posts">
                {zodiacAnimalsLoversBlog.map((item, index) => {
                    if (index < 2) {
                        return (
                            <li key={index} className="blog-item" role="listitem">
                                <Blog item={item} toggleModal={toggleModal} />
                            </li>
                        );
                    }
                })}
            </ul>}

        {/* Full list of blogs when expanded */}
        {showAll &&
            <BlogList toggleModal={toggleModal} sort={currentSort} />}

        {/* Show more/less toggle button */}
        {<button 
            className="show-more-button" 
            onClick={handleToggle}
            aria-expanded={showAll}
            aria-controls="blog-list"
        >
            {showAll ? 'Show Less ▲' : 'Show More ▼'}
        </button>}
    </>);
}