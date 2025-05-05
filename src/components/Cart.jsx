import { useState, useEffect, useRef } from "react";
import products from "../js/products";
import "./../styles/Cart.css";

// Cart component manages shopping cart functionality including product list and checkout modal
export default function Cart() {
    // Refs for managing dialog and focus
    const dialogRef = useRef();
    const closeButtonRef = useRef();
    
    // State for cart items (array of quantities) and modal visibility
    const [cart, setCart] = useState([0, 0, 0, 0, 0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle modal display and focus management
    useEffect(() => {
        if (isModalOpen && dialogRef.current) {
            dialogRef.current.showModal();
            closeButtonRef.current.focus();
        } else if (dialogRef.current) {
            dialogRef.current.close();
        }
    }, [isModalOpen]);

    // Toggle modal visibility
    function toggleModal() {
        setIsModalOpen((prev) => !prev);
    }

    // Increment item quantity in cart
    function handleAddItems(index) {
        setCart(prevCart => {
            const currentCart = [...prevCart];
            currentCart[index] += 1;
            return currentCart;
        })
    }

    // Decrement item quantity in cart if greater than zero
    function handleRemoveItems(index) {
        if (cart[index] > 0) {
            setCart(prevCart => {
                const currentCart = [...prevCart];
                currentCart[index] -= 1;
                return currentCart;
            })
        }
    }

    // Reset all cart quantities to zero
    function handleDeleteAll() {
        setCart(prevCart => [0, 0, 0, 0, 0]);
    }

    // Calculate total price of all items in cart
    let totalPrice = cart.reduce((prev, curr, index) => {
        let currPrice = curr * products[index].price;
        return prev + currPrice;
    }, 0).toFixed(2);

    return (<>
        {/* Checkout modal dialog */}
        <dialog ref={dialogRef} className="checkout-dialog" aria-labelledby="checkout-title" aria-modal="true">
            <div className="checkout-dialog-content" role="document">
                <h2 id="checkout-title" className="checkout-title">Your Cart</h2>
                {/* List of items in checkout modal */}
                <ul className="checkout-list" aria-label="Cart items">
                    {cart.map((counts, index) =>
                        <li key={index} className="checkout-item">
                            <div className="checkout-product">
                                <span className="checkout-item-name">{products[index].name}</span>
                                <span className="checkout-item-price">
                                    {/* Item quantity controls */}
                                    <button 
                                        className="checkout-item-plus" 
                                        onClick={() => handleRemoveItems(index)}
                                        aria-label={`Remove one ${products[index].name}`}
                                    >-</button>
                                    <span aria-label={`Quantity of ${products[index].name}`}>{counts}</span>
                                    <button 
                                        className="checkout-item-minus" 
                                        onClick={() => handleAddItems(index)}
                                        aria-label={`Add one ${products[index].name}`}
                                    >+</button>
                                    <span aria-label={`Total price for ${products[index].name}`}>${(products[index].price * counts).toFixed(2)}</span>
                                </span>
                            </div>
                        </li>
                    )}
                </ul>
                {/* Checkout total and action buttons */}
                <span className="checkout-total" aria-label="Cart total">{`Total: $${totalPrice}`}</span>
                <button className="modal-cart-pay-now" aria-label="Proceed to payment">Pay now</button>
                <button ref={closeButtonRef} className="modal-cart-close" onClick={toggleModal} aria-label="Close cart">Close</button>
            </div>
        </dialog>

        {/* Main shopping cart section */}
        <div id="shopping-cart" role="region" aria-label="Shopping cart">
            <h2 className="shop-title">Treat yourself wonderful gifts!</h2>
            {/* Product listing */}
            <ul className="product-list" aria-label="Product list">
                {products.map((item, index) => (
                    <li key={index} className="product-item">
                        <span className="product-name">{item.name} ${item.price}</span>
                        <p className="product-description">{item.description}</p>
                        {/* Product action buttons */}
                        <div className="cart-buttons">
                            <button
                                className="product-add-btn"
                                onClick={() => handleAddItems(index)}
                                aria-label={`Add ${item.name} to cart`}
                            >
                                Add to Cart
                            </button>
                            <span className="product-show-btn" aria-label={`${cart[index]} ${item.name} in cart`}>
                                {cart[index]} in cart
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Cart summary section with total and actions */}
            <div className="cart-summary" role="status" aria-live="polite">
                <span className="cart-info">
                    {cart.reduce((prev, curr, index) => (prev + curr))} items in your cart: $
                    {totalPrice}
                </span>
                <button className="checkout-btn" onClick={toggleModal} aria-label="Open checkout">Checkout</button>
                <button className="clear-btn" onClick={handleDeleteAll} aria-label="Remove all items">Delete all</button>
            </div>
        </div>
    </>);

}