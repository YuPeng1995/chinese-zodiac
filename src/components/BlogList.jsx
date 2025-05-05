import zodiacAnimalsLoversBlog from "../js/blogs";
import Blog from "./Blog";

// BlogList component displays list of blog posts with different sorting options
// Props:
// - toggleModal: Function to show/hide blog post modal
// - sort: String indicating sort method ('default', 'time', 'timedsc', 'name', or 'namedsc')
export default function BlogList({ toggleModal, sort }) {
    return (
        <>
            {sort === "default" &&
                <ul className="blog-list" role="list" aria-label="List of blog posts in default order">
                    {zodiacAnimalsLoversBlog.map((item, index) => (
                        <li key={index} className="blog-item" role="listitem">
                            <Blog item={item} toggleModal={toggleModal} />
                        </li>
                    ))}
                </ul>
            }
            {sort === "time" &&
                <ul className="blog-list" role="list" aria-label="List of blog posts sorted by date, newest first">
                    {zodiacAnimalsLoversBlog.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item, index) => (
                        <li key={index} className="blog-item" role="listitem">
                            <div className="blog-content">
                                <h3 className="blog-title">{item.title}</h3>
                                <span className="blog-meta" aria-label={`Written by ${item.author} on ${item.date}`}>
                                    {item.author} - {item.date}
                                </span>
                                <p className="blog-text">{item.content}</p>
                                <button 
                                    className="blog-read-more" 
                                    onClick={() => toggleModal(item)}
                                    aria-label={`Read more about ${item.title}`}
                                >
                                    Read More
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            }
            {sort === "timedsc" &&
                <ul className="blog-list" role="list" aria-label="List of blog posts sorted by date, oldest first">
                    {zodiacAnimalsLoversBlog.sort((a, b) => new Date(a.date) - new Date(b.date)).map((item, index) => (
                        <li key={index} className="blog-item" role="listitem">
                            <Blog item={item} toggleModal={toggleModal} />
                        </li>
                    ))}
                </ul>
            }
            {sort === "name" &&
                <ul className="blog-list" role="list" aria-label="List of blog posts sorted by author name, A to Z">
                    {zodiacAnimalsLoversBlog.sort((a, b) => {
                        return a.author.localeCompare(b.author);
                    }).map((item, index) => (
                        <li key={index} className="blog-item" role="listitem">
                            <Blog item={item} toggleModal={toggleModal} />
                        </li>
                    ))}
                </ul>
            }
            {sort === "namedsc" &&
                <ul className="blog-list" role="list" aria-label="List of blog posts sorted by author name, Z to A">
                    {zodiacAnimalsLoversBlog.sort((a, b) => b.author.localeCompare(a.author)).map((item, index) => (
                        <li key={index} className="blog-item" role="listitem">
                            <Blog item={item} toggleModal={toggleModal} />
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}