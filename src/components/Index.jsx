import Blogs from "./Blogs";
import Cards from "./Cards";
import Cart from "./Cart";
import "./../styles/Index.css";

export default function Index() {
    return (
        <div id="index-page">
            <div id="cards">
                <Cards />
            </div>
            <div id="blogs"><Blogs /></div>
            <div id="shopping-carts"><Cart /></div>
        </div>
    );
}