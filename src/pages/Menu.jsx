import { motion } from "framer-motion";
import Header from "./components/Header";
import "../css/pages/menu.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MenuItem({ name, description, price, image_url }) {
  return (
    <motion.div className="menu-item" whileHover={{ scale: 1.1 }}>
      <img src={image_url} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{price}</span>
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
    </>
  );
}

export default Menu;
