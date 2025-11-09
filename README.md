🛍️ Pooja’s Collection — E-Commerce Frontend Application
📖 Overview

This project is a React-based front-end e-commerce application built as part of the Takeo QuantumLeap Bootcamp (Batch BFS78).
It simulates a small online store that allows users to browse products, add them to a shopping cart, adjust quantities, and proceed through a simple checkout flow.

✨ Features
🧩 Core Functionality

Product Listing Page – Displays a styled grid of sample products with “Add to Cart” buttons.

Cart Management –

View selected items

Increment (+) or decrement (–) quantities

Remove items completely (with confirmation alert)

Real-time total price calculation

Checkout Flow –

“Proceed to Checkout” freezes the current cart snapshot

Displays only the confirmed items at checkout

Allows going back to Products page

Header Navigation – Persistent header with navigation buttons (Products, Cart, Checkout) and dynamic cart item count badge.

🧠 React Concepts Used

useState Hook – To manage product list, cart, and page navigation.

Conditional Rendering – To switch views between product list, cart, and checkout without routing.

Props & Component Reusability – Data passed between parent (App.jsx) and child components (Header, Cart, Checkout, ProductList).

Event Handling – Button clicks for adding/removing items, quantity updates, and navigation.

⚙️ Technologies
Category	Tools / Libraries
Framework	React + Vite
Language	JavaScript (ES6)
Styling	Inline CSS / Modern UI colors
Version Control	Git & GitHub
Package Manager	npm / yarn
📂 Project Structure
my-react-app/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   └── Checkout.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md

🚀 How to Run Locally

Clone the repository

git clone https://github.com/pooja02082020/my-react-app.git
cd my-react-app


Install dependencies

npm install


Run the development server

npm run dev


Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173).

🧾 Key Code Highlights
🪄 App.jsx

Maintains three main states:

page → Controls which section to show (Products, Cart, Checkout)

cartItems → Holds items currently in cart

checkoutItems → Stores a frozen snapshot when proceeding to checkout

🛒 Cart.jsx

Provides item quantity control

Alerts before full removal

Confirms checkout before navigating

💳 Checkout.jsx

Displays summary of frozen items

Shows total price

Includes "Confirm Checkout" and "Go to Products" navigation buttons

🎨 UI Preview (describe your look)

🖤 Dark navy header with golden title text

🧺 White card-style product boxes with shadows

💰 Dynamic total calculation and responsive layout

📦 Future Enhancements

Integrate product images and categories

Add search and filter options

Connect to a backend API for real product data

Add authentication and order history

🧑‍💻 Author

Pooja Lohani
📧 lohanipooja77@gmail.com


