
# 🛒 SnappShop - E-commerce Mini Task

SnappShop is a small but powerful e-commerce demo project built with **Next.js 14 App Router**, demonstrating clean architecture, state management, responsive UI, and data fetching strategies. This project was created as part of a task to showcase best practices in modern frontend development.

---

## Folder Structure

```plaintext
SnappShop/
│
├── routes/                     # Application pages (routing)
│   ├── index.tsx               # Home page
│   ├── products/               # Product listing and product details
│   │   ├── index.tsx           # Product listing page (SSG)
│   │   ├── [id].tsx            # Product detail page (SSG)
│   ├── cart/                   # Cart-related pages and modal
│   └── _app.tsx                # Root app component (global settings)
│
├── components/                 # Reusable components
│   ├── cart/                   # Cart-specific components (e.g., CartModal, AddToCartButton)
│   ├── product/                # Product-related components (e.g., ProductCard, ProductList)
│   └── ui/                     # UI elements (buttons, etc.)
│
├── data/                       # Static data files
│   └── product.json            # Example product data for the shop
│
├── hooks/                      # Custom hooks
│   ├── useCartStore.ts         # Cart management and state store
│   └── useOutsideClick.ts      # Hook to close modal on outside click
│
├── public/                     # Static assets (images, fonts, etc.)
├── styles/                     # Global and component-specific styles
│   ├── globals.scss            # Global styles (e.g., reset, typography)
│   ├── productCard.module.scss # Product card styles
│   └── cart.module.scss        # Cart modal and cart item styles
├── utils/                      # Utility functions
│   └── seprator.ts             # Helper function to format numbers (e.g., for currency)
├── next.config.js              # Next.js configuration
└── package.json  

## ⚙️ Data Fetching Strategy

This project uses **static JSON data** for product listing and product details. Here's how data fetching is handled:

| Page                  | Data Fetching Type | Method                                    |
|-----------------------|--------------------|-------------------------------------------|
| Product Listing (`/products`) | Static Site Generation (SSG) | `fetch()` from JSON file at build time |
| Product Detail (`/products/[id]`) | Server-Side Rendering (SSR-like with Server Component) | Data is resolved in Server Component from local JSON |
| Cart Modal           | Client Side (Zustand) | Cart is managed locally in state |

✅ All data is loaded without using client hooks like `useEffect`, following **Next.js App Router's best practices**.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/snappshop.git
cd snappshop
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ Features

- ✅ **App Router** based architecture (Next.js 13+)
- ✅ **Zustand** for global state management (cart)
- ✅ Fully **responsive** and clean UI (mobile-first)
- ✅ Modern **SCSS** with variables and modular styles
- ✅ Custom **hooks** (e.g. `useOutsideClick`)
- ✅ Product detail page with dynamic routing
- ✅ Reusable and clean components
- ✅ Accessible and RTL-friendly

---

## 🧪 How to Build for Production

```bash
npm run build
npm start
```

This will generate a static optimized version of the site and serve it.

---

## 📦 Future Improvements

- Add dynamic API (`/api/products`)
- Connect to a backend or CMS
- Add authentication with NextAuth
- Add product filtering / searching

---

## 💡 Notes

- This project uses `"use client"` only when absolutely needed (e.g., stateful components like Cart).
- The JSON file (`/data/product.json`) is read in server components during build/render, ensuring clean separation between UI and data.

---

## 📬 Contact

For any questions or feedback, feel free to reach out via email or GitHub.

---

