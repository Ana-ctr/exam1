

import React, { useEffect, useState } from "react";

function Header() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };


  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "white" : "black";
    document.body.style.color = theme === "light" ? "black" : "white";
  }, [theme]);

  return (


    <header
    
      style={{
        padding: "5px",
        textAlign: "center",
        backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
        color: theme === "light" ? "black" : "white",
      }}
    >
       <h1>U N I  s  H O P</h1>
      <button onClick={switchTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>

    </header>
    
  );
}

export default Header;
