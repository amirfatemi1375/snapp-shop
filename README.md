# 🛒 SnappShop - E-commerce Mini Task

SnappShop is a small but powerful e-commerce demo project built with **Next.js 14 App Router**, demonstrating clean architecture, state management, responsive UI, and data fetching strategies. This project was created as part of a task to showcase best practices in modern frontend development.

---

## Folder Structure

src/
├── app/
│ ├── routes/
│ │ ├── page.tsx (Home page)
│ │ └── product/[id]/page.tsx (Product detail page)
│ └── layout.tsx (Root Layout)
├── components/
│ ├── cart/
│ │ ├── CartModal.tsx
│ │ ├── components/CartItem.tsx
│ │ └── AddToCartBtn.tsx
│ ├── product/
│ │ └── ProductCard.tsx
│ ├── ui/
│ │ └── button/Button.tsx
├── hooks/
│ └── useOutsideClick.ts
├── store/
│ └── useCartStore.ts
├── utils/
│ └── seprator.ts (Number formatting)
├── data/
│ └── product.json (Static product data)
└── styles/
└── globals.scss

## ⚙️ Data Fetching Strategy

This project uses **static JSON data** for product listing and product details. Here's how data fetching is handled:

| Page                              | Data Fetching Type                                     | Method                                               |
| --------------------------------- | ------------------------------------------------------ | ---------------------------------------------------- |
| Product Listing (`/products`)     | Static Site Generation (SSG)                           | `fetch()` from JSON file at build time               |
| Product Detail (`/products/[id]`) | Server-Side Rendering (SSR-like with Server Component) | Data is resolved in Server Component from local JSON |
| Cart Modal                        | Client Side (Zustand)                                  | Cart is managed locally in state                     |

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
