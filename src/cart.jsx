// CartPage.jsx
import React from "react";

const Cartpage = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => {
    
    return acc + parseFloat(item.price.replace("$", ""));
  }, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {item.name} - {item.price}
                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cartpage;
