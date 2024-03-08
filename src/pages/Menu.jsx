import Header from "./components/Header";
import "../css/menu.css";

function MenuItem({ name, description, price }) {
  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
}

function Menu() {
  const menuData = {
    pizzas: [
      {
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
        price: "$10.99",
      },
      {
        name: "Pepperoni Pizza",
        description:
          "Pizza topped with pepperoni, tomato sauce, and mozzarella cheese",
        price: "$12.99",
      },
      {
        name: "Vegetarian Pizza",
        description: "Pizza loaded with fresh vegetables and mozzarella cheese",
        price: "$11.99",
      },
      {
        name: "Supreme Pizza",
        description:
          "Loaded with pepperoni, sausage, bell peppers, onions, mushrooms, and olives",
        price: "$14.99",
      },
      {
        name: "BBQ Chicken Pizza",
        description:
          "Grilled chicken, red onions, BBQ sauce, and mozzarella cheese",
        price: "$13.99",
      },
      {
        name: "Hawaiian Pizza",
        description: "Ham, pineapple, and mozzarella cheese",
        price: "$12.99",
      },
    ],
    salads: [
      {
        name: "Caesar Salad",
        description:
          "Classic salad with romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
        price: "$8.99",
      },
      {
        name: "Greek Salad",
        description:
          "Refreshing salad with tomatoes, cucumbers, olives, feta cheese, and red onion with Greek dressing",
        price: "$9.99",
      },
      {
        name: "Caprese Salad",
        description:
          "Fresh tomatoes, mozzarella cheese, basil, olive oil, and balsamic glaze",
        price: "$10.99",
      },
      {
        name: "Cobb Salad",
        description:
          "Mixed greens topped with grilled chicken, avocado, tomatoes, bacon, eggs, and blue cheese dressing",
        price: "$11.99",
      },
      {
        name: "Spinach Salad",
        description:
          "Baby spinach with strawberries, almonds, feta cheese, and balsamic vinaigrette",
        price: "$10.99",
      },
      {
        name: "Chef's Salad",
        description:
          "Ham, turkey, Swiss and American cheese, boiled eggs, tomatoes, cucumbers, and choice of dressing",
        price: "$12.99",
      },
    ],
    drinks: [
      { name: "Coke", description: "Carbonated soft drink", price: "$1.99" },
      {
        name: "Iced Tea",
        description: "Refreshing tea served over ice",
        price: "$2.49",
      },
      {
        name: "Lemonade",
        description: "Refreshing lemon-flavored drink",
        price: "$2.29",
      },
      {
        name: "Mango Smoothie",
        description: "Smoothie made with fresh mangoes and yogurt",
        price: "$4.99",
      },
      {
        name: "Orange Juice",
        description: "Freshly squeezed orange juice",
        price: "$3.49",
      },
      { name: "Water", description: "Bottled water", price: "$1.00" },
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
