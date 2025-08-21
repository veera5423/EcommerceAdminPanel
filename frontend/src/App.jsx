import React, { useEffect, useState } from "react";
import AdminPanel from "./AdminPanel";
import Footer from "./Footer";
import { useProductStore } from "./store";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 to-orange-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-emerald-600 to-orange-500 shadow-lg px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            V<span className="text-orange-200">Kart</span>
          </span>
        </div>
        <div className="flex gap-4">
          <button
            className={`text-white px-3 py-1 rounded hover:bg-emerald-700 transition ${
              page === "home" ? "bg-emerald-900" : ""
            }`}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            className={`text-white px-3 py-1 rounded hover:bg-emerald-700 transition ${
              page === "admin" ? "bg-emerald-900" : ""
            }`}
            onClick={() => setPage("admin")}
          >
            Admin
          </button>
        </div>
      </nav>
      {/* Marquee Banner */}
      <div className="bg-yellow-300 text-yellow-800 font-bold text-center py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee">
          <span> <marquee behavior="" direction="">This project is for the admin operations.</marquee> </span>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto py-8 px-2 w-full">
        {page === "home" ? <HomePage /> : <AdminPanel />}
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  const { products, getProducts } = useProductStore();
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-emerald-600 to-orange-400 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to <span className="text-orange-200">VKart</span>
          </h1>
          <p className="text-lg mb-6">
            Discover the best deals on electronics, apparel, books, and more.
            Enjoy a seamless shopping experience with exclusive offers and a
            modern, fast interface!
          </p>
          <button className="bg-orange-300 text-emerald-900 font-bold px-6 py-2 rounded shadow hover:bg-orange-200 transition">
            Shop Now
          </button>
        </div>
        <img
          src="https://img.freepik.com/free-vector/shopping-cart-supermarket_1284-6266.jpg"
          alt="Shopping"
          className="w-64 h-48 object-contain mt-6 md:mt-0"
        />
      </div>
      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <FeatureCard
          title="Electronics"
          color="from-emerald-400 to-emerald-600"
          icon="💻"
        />
        <FeatureCard
          title="Apparel"
          color="from-orange-300 to-orange-500"
          icon="👗"
        />
        <FeatureCard
          title="Books"
          color="from-slate-400 to-slate-600"
          icon="📚"
        />
      </div>
      {/* Product Grid */}
      <div className="w-full mt-8">
        <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
          Latest Products
        </h2>
        {products.length === 0 ? (
          <div className="text-center text-slate-400">
            No products added yet. Admins can add products from the Admin panel.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id || product.productName}
                className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col items-center border border-emerald-100"
              >
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className="w-32 h-32 object-cover rounded mb-3 border border-orange-200"
                />
                <div className="font-bold text-emerald-900 text-lg mb-1 text-center">
                  {product.productName}
                </div>
                <div className="text-orange-700 text-sm mb-1">
                  {product.category}
                </div>
                <div className="text-orange-600 font-bold text-lg mb-2">
                  ₹{product.price}
                </div>
                <div className="text-slate-500 text-xs text-center mb-2 line-clamp-2">
                  {product.description}
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1 rounded font-semibold mt-auto">
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FeatureCard({ title, color, icon }) {
  return (
    <div
      className={`rounded-xl shadow-lg p-6 bg-gradient-to-br ${color} flex flex-col items-center justify-center min-h-[160px]`}
    >
      <span className="text-4xl mb-2">{icon}</span>
      <span className="text-xl font-semibold text-white">{title}</span>
    </div>
  );
}

export default App;
