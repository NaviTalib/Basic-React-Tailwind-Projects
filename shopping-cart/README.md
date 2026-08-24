# 🛒 Shopping Cart App

A fully functional shopping cart interface built with **React** and **Tailwind CSS** — a common feature found in almost every e-commerce product.

## ✨ Features

- 🛍️ Product catalog with live "in cart" indicators
- ➕ Add items to cart
- ➖ Remove items from cart
- 🔼🔽 Increase / decrease item quantity
- 💰 Auto-calculated subtotal, shipping, and total
- 🗂️ Graceful empty-cart state

## 🛠️ Tech Stack

- **React** — `useState`, `useMemo`
- **Tailwind CSS** — styling
- **Lucide React** — icons

## 📸 Preview

*(Add a screenshot or GIF of the app here)*

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

```bash
# Clone the repository
git clone https://github.com/NaviTalib/shopping-cart-app.git

# Navigate into the project directory
cd shopping-cart-app

# Install dependencies
npm install

# Install icon library
npm install lucide-react

# Start the development server
npm run dev
```

## 📂 Project Structure

```
shopping-cart-app/
├── src/
│   ├── ShoppingCart.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🧠 What I Learned

- Managing cart logic (add, remove, update quantity) using clean, predictable state updates
- Using `useMemo` to avoid recalculating totals on every render
- Designing a UI that feels closer to a real product than a tutorial demo

## 📌 Part of

This project is part of my **#100DaysOfCode** challenge — Day 9.

## 🤝 Connect

Feel free to reach out or connect if you have suggestions or feedback!

- GitHub: [github.com/NaviTalib](https://github.com/NaviTalib)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).