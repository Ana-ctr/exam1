import Header from "./header";
import Footer from "./footer";
import CartPage from "./cart";
import React, { useState } from "react";


const drinksData = [
  { id: "1", name: "Shirt", price: "25$", description: "T-shirt day in Leipzig, Germany.", image: "https://avatars.mds.yandex.net/i?id=8808813b692aaed41ed16881deff72b509dccb4b-5233076-images-thumbs&n=13" },
  { id: "2", name: "T-shirt", price: "16$", description: "A woman wearing a pink V-neck T-shirt.", image: "https://avatars.mds.yandex.net/i?id=fb82b6f4be3e91bff809df2e35c9afd8e28e6728-8495831-images-thumbs&n=13" },
  { id: "3", name: "Dress", price: "20$", description: "A woman wearing a pink V-neck T-shirt.", image: "https://avatars.mds.yandex.net/i?id=f4d8662f082b12fd5a6bd2233c8d22bc5546c022-10240716-images-thumbs&n=13" },
  { id: "4", name: "Bag", price: "20$", description: "T-shirt day in Leipzig, Germany.", image: "https://avatars.mds.yandex.net/i?id=5dc2c2107c90a8e7af581fe2b70909dc630a81c8-7679814-images-thumbs&n=13" },
  { id: "5", name: "Dress", price: "20$", description: "A woman wearing a pink V-neck T-shirt.", image: "https://avatars.mds.yandex.net/i?id=02f9984364c0caac6b667b3635c3c107b0047144-9244694-images-thumbs&n=13" },
  { id: "6", name: "Dress", price: "20$", description: "A woman wearing a pink V-neck T-shirt.", image: "https://avatars.mds.yandex.net/i?id=6d708acd0061e384e7dfbb21484f11c5325a0246-4592024-images-thumbs&n=13" },
  { id: "2", name: "Costume", price: "20$", description: "A man wearing a pink V-neck T-shirt.", image: "https://avatars.mds.yandex.net/i?id=e4ac853e1d65f8c834b7b8a8cbce56a4ba6dfef8-4502909-images-thumbs&n=13" },
  { id: "2", name: "Jacket", price: "20$", description: "A man wearing a pink V-neck T-shirt.", image: "https://avatars.mds.yandex.net/i?id=aa02b1dd2b0bd38828f6d848158bfc29e827eda1-4219934-images-thumbs&n=13" },
  { id: "1", name: "Shirt", price: "25$", description: "T-shirt day in Leipzig, Germany.", image: "https://avatars.mds.yandex.net/i?id=dcd13397b95fcfe051efab4ec9204b198a6aa5e6-4821174-images-thumbs&n=13" },
  { id: "3", name: "Jeans", price: "15$", description: "T-shirt day in Leipzig, Germany.", image: "https://avatars.mds.yandex.net/i?id=59172b8052a0c0aefc0417f63b69faa5-5235802-images-thumbs&n=13" },

];

function One() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const filterAndSortDrinks = () => {
    let filteredDrinks = drinksData.filter(({ name }) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy) {
      const [key, order] = sortBy.split("-");
      filteredDrinks.sort((a, b) => {
        if (key === "price") {

          const priceA = parseFloat(a.price.replace("$", ""));
          const priceB = parseFloat(b.price.replace("$", ""));
          return priceA - priceB;
        } else if (key === "id") {
          return a[key].localeCompare(b[key]);
        }
        return 0;
      });
      if (order === "desc") filteredDrinks.reverse();
    }

    return filteredDrinks;
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    alert(`Added ${item.name} to cart!`);
  };


  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <header>
        <Header />
        <button onClick={() => setShowCart(!showCart)}>
          {showCart ? "Back to Products" : "View Cart"}
        </button>
      </header>

      { }
      <nav>


        {!showCart && (
          <>
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select onChange={(e) => setSortBy(e.target.value)}>
              <option value="">Sort By</option>
              <option value="id-asc">Category: Man</option>
              <option value="id-desc">Category: Women</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </>
        )}
      </nav>

      { }
      {showCart ? (
        <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filterAndSortDrinks().map(({ name, price, description, image, id }, index) => (
            <div key={index} style={{ margin: "10px", textAlign: "center", }}>
              <img
                src={image}
                alt={name}
                style={{ width: "150px", height: "auto" }}
              />
              <div
                onClick={() => alert(`You selected ${name} priced at ${price}`)}
                style={{ cursor: "pointer" }}
              >
                <strong>{name}</strong>
              </div>
              <div>{description}</div>
              <div>{price}</div>
              { }
              <button onClick={() => addToCart({ id, name, price, description, image })}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default One;



