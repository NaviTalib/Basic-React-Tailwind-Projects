# 🛒 TempStore - React E-Commerce Cart App

A modern, responsive e-commerce shopping cart application built with **React**, **Tailwind CSS**, and **FakeStoreAPI**. 

This project demonstrates clean React architecture by combining `useState`, `useEffect`, and `useContext` to build a complete, production-like state management flow without relying on external libraries like Redux or Zustand.

---

## ✨ Features

- **🌐 Live API Integration:** Dynamically fetches product data, categories, and images from [FakeStoreAPI](https://fakestoreapi.com/).
- **⚡ Global State Management:** Centralized cart management powered by React Context API.
- **💾 LocalStorage Persistence:** Cart contents automatically sync with browser storage to persist across page reloads.
- **⏳ Loading Skeleton UI:** Smooth pulse animation placeholders while fetching product data.
- **🎨 Modern Tailwind UI:** Clean design featuring a sticky header, interactive quantity controls, and a responsive grid layout.
- **🛡️ Clean Async Handling:** Network request aborts (`AbortController`) to prevent memory leaks on component unmounting.

---

## 🛠️ Built With

* **React** (Hooks: `useState`, `useEffect`, `useContext`)
* **Tailwind CSS** (Utility-first styling)
* **Vite** (Next-generation frontend tooling)
* **FakeStoreAPI** (REST API for e-commerce data)

---

## 📁 Project Structure

```text
src/
├── context/
│   └── CartContext.jsx       # Global cart state, actions, and localStorage sync
├── components/
│   ├── ProductList.jsx       # Fetches products from API and renders product cards
│   └── CartSummary.jsx       # Displays order summary, item list, and controls
├── App.jsx                   # Main layout and navbar with dynamic badge
└── main.jsx                  # React application entry point

```

---

## 💡 Key Architectural Concepts

### 1. `useContext` (Global State)

Acts as a central data bus for the application. Wrapping the application in `<CartProvider>` exposes cart items, quantity modifiers, and total price calculations directly to `Navbar`, `ProductList`, and `CartSummary` without prop-drilling.

### 2. `useEffect` (Side Effects)

* **Data Fetching:** Automatically runs on component mount in `ProductList.jsx` to fetch products from the REST API.
* **Data Persistence:** Subscribes to changes in the `cart` state inside `CartContext.jsx` to synchronize data with `localStorage`.

### 3. `useState` (Local State)

* Holds product list data, loading boolean states, and error messages during API calls.
* Drives array manipulations (adding items, incrementing/decrementing quantities, removing items) inside the cart provider.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have **Node.js** (version 16 or higher) installed.

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/techstore-react-cart.git](https://github.com/your-username/techstore-react-cart.git)
cd techstore-react-cart

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm run dev

```


4. **Open in browser:**
Navigate to `http://localhost:5173` in your browser.

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

```

***

<ElicitationsGroup message="What would you like to do next with your repository?">

  <Elicitation label="Generate step-by-step instructions to deploy this project live on Vercel or Netlify" query="Give me step-by-step instructions on how to deploy this React Vite project live using Vercel or Netlify."/>

  <Elicitation label="Add interactive search and category filter features to the project" query="Show me how to add a search input and category filter dropdown to ProductList using useState."/>

</ElicitationsGroup>

```