import { motion } from "framer-motion"; // Import motion from framer-motion
import Header from "./components/Header";
import "../css/pages/menu.css";

function MenuItem({ name, description, price, image }) {
  return (
      // The image animation for the menu items
      <motion.div className="menu-item" whileHover={{ scale: 1.1 }}>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <span>{price}</span>
        </div>
      </motion.div>
  );
}


/* Hard coded images for now: */
function Menu() {
  const menuData = {
    pizzas: [
      {
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
        price: "$10.99",
        image: "https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FVegan%20Margherita.webp?alt=media&token=8132d071-079f-47ac-960a-545484fe3f26",
      },
      {
        name: "Pepperoni Pizza",
        description:
          "Pizza topped with pepperoni, tomato sauce, and mozzarella cheese",
        price: "$12.99",
        image:"https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FPepperoni.webp?alt=media&token=774a2934-f1e1-4805-92ed-cbe58e09d05b"
      },
      {
        name: "Vegetarian Pizza",
        description: "Pizza loaded with fresh vegetables and mozzarella cheese",
        price: "$11.99",
        image:"https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FGarden%20Fresh.webp?alt=media&token=a99f3b4e-3eeb-4e2e-ab1e-0252256a6123"
      },
      {
        name: "Supreme Pizza",
        description:
          "Loaded with pepperoni, sausage, bell peppers, onions, mushrooms, and olives",
        price: "$14.99",
        image:"https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FSupreme.webp?alt=media&token=2d5ce236-8cfa-4cf6-a8c5-fdf68cfef659"
      },
      {
        name: "BBQ Chicken Pizza",
        description:
          "Grilled chicken, red onions, BBQ sauce, and mozzarella cheese",
        price: "$13.99",
        image:"https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FBBQ%20Chicken.webp?alt=media&token=be415615-ba00-42d4-8ac9-0d55ed6bf5c1"
      },
      {
        name: "Hawaiian Pizza",
        description: "Ham, pineapple, and mozzarella cheese",
        price: "$12.99",
        image:"https://firebasestorage.googleapis.com/v0/b/image-storage-90392.appspot.com/o/pizza%2FHawaiian.webp?alt=media&token=72cda294-5f9f-4f90-9dca-8151a89e8c6e"
      },
    ],
    salads: [
      {
        name: "Caesar Salad",
        description:
          "Classic salad with romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
        price: "$8.99",
        image:""
      },
      {
        name: "Greek Salad",
        description:
          "Refreshing salad with tomatoes, cucumbers, olives, feta cheese, and red onion with Greek dressing",
        price: "$9.99",
        image:""
      },
      {
        name: "Caprese Salad",
        description:
          "Fresh tomatoes, mozzarella cheese, basil, olive oil, and balsamic glaze",
        price: "$10.99",
        image:""
      },
      {
        name: "Cobb Salad",
        description:
          "Mixed greens topped with grilled chicken, avocado, tomatoes, bacon, eggs, and blue cheese dressing",
        price: "$11.99",
        image:""
      },
      {
        name: "Spinach Salad",
        description:
          "Baby spinach with strawberries, almonds, feta cheese, and balsamic vinaigrette",
        price: "$10.99",
        image:""
      },
      {
        name: "Mom's Salad",
        description:
          "Ham, turkey, Swiss and American cheese, boiled eggs, tomatoes, cucumbers, and choice of dressing",
        price: "$12.99",
        image:""
      },
    ],
    drinks: [
      { name: "Coke", description: "Carbonated soft drink", price: "$1.99", image:"" },
      {
        name: "Iced Tea",
        description: "Refreshing tea served over ice",
        price: "$2.49",
        image:""
      },
      {
        name: "Lemonade",
        description: "Refreshing lemon-flavored drink",
        price: "$2.29",
        image:""
      },
      {
        name: "Mango Smoothie",
        description: "Smoothie made with fresh mangoes and yogurt",
        price: "$4.99",
        image:""
      },
      {
        name: "Orange Juice",
        description: "Freshly squeezed orange juice",
        price: "$3.49",
        image:""
      },
      { name: "Water", description: "Bottled water", price: "$1.00", image:"" },
    ],
  };



  return (
      <>
        <Header />
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
                </div>
            ))}
          </div>
        </section>
      </>
  );
}

export default Menu;
