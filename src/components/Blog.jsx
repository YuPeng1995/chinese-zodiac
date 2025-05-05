// Blog component displays individual blog post with title, author, date, and content
// Props:
// - item: Blog post object containing title, author, date, and content
// - toggleModal: Function to show/hide detailed blog post view
export default function Blog({ item, toggleModal }) {
    return (
        <div className="blog-content" role="article">
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
    );
}