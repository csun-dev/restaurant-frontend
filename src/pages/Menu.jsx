import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../css/pages/menu.css";
import { useEffect, useState } from "react";
import axios from "axios";


function MenuItem({ name, description, price, image }) {
function MenuItem({ name, description, price, image_url }) {
  return (
    <motion.div className="menu-item" whileHover={{ scale: 1.1 }}>
      <img className="menu-image" src={image_url} alt={name} />
      <div>
        <div className="menu-name">{name}</div>
        <div className="menu-detail__format">
          <div className="menu-description">{description}</div>
          <div className="menu-price">${price}</div>
        </div>
      </div>
    </motion.div>
  );
}

function Menu() {
  const [menus, setMenu] = useState([]);

  const fetchMenuData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/menus");
      setMenu(response.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <>
      <Header />
      {/* <div className="menus">
        <h1>Pizza Menu</h1>
        {menus.length ? (
          <div>
            {menus.map((item) => (
              <div key={item.id}>
                <div>
                  {item.name} ({item.type})
                </div>
                <div>{item.description}</div>
                <div>Price: ${item.price}</div>
                <img
                  src={item.image_url}
                  alt={item.name}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            ))}
          </div>
        </section>
        <Footer/>
      </>
        ) : (
          <p>Loading menu...</p>
        )}
      </div> */}
      <section id="menu">
        <div className="container">
          <h2>Our Menu</h2>
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} style={{ marginBottom: "20px" }}>
              <h3>{category}</h3>
              <div className="menu-items">
                {items.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>
      <div className="menu-page-title">Menus</div>
      {menus.length ? (
        <div className="menu-wrapper">
          {menus.map((item) => (
            <div className="menu-items">
              <MenuItem key={item.id} {...item} />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading menu...</p>
      )}
      <Footer />
    </>
  );
}

export default Menu;
