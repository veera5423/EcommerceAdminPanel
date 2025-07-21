import React from "react";
import { useProductStore } from "./store";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function Sidebar() {
  return (
    <aside className="w-56 bg-gradient-to-b from-emerald-600 to-orange-400 text-white min-h-screen p-6 flex flex-col gap-6 shadow-xl rounded-r-2xl">
      <div className="text-2xl font-bold mb-8 tracking-tight">Admin</div>
      <nav className="flex flex-col gap-4">
        <a href="#" className="font-semibold hover:text-orange-100">
          Dashboard
        </a>
        <a href="#" className="font-semibold text-orange-100">
          Products
        </a>
        <a href="#" className="font-semibold opacity-60 cursor-not-allowed">
          Users
        </a>
        <a href="#" className="font-semibold opacity-60 cursor-not-allowed">
          Orders
        </a>
      </nav>
    </aside>
  );
}

function DashboardStats() {
  const { products } = useProductStore();
  const totalProducts = products.length;
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return (
    <div className="flex gap-6 mb-8">
      <div className="bg-emerald-100 text-emerald-900 rounded-xl px-6 py-4 shadow flex flex-col items-center min-w-[120px]">
        <span className="text-2xl font-bold">{totalProducts}</span>
        <span className="text-xs font-semibold uppercase tracking-wider">
          Products
        </span>
      </div>
      <div className="bg-orange-100 text-orange-900 rounded-xl px-6 py-4 shadow flex flex-col items-center min-w-[120px]">
        <span className="text-2xl font-bold">{categories.length}</span>
        <span className="text-xs font-semibold uppercase tracking-wider">
          Categories
        </span>
      </div>
    </div>
  );
}

const AdminPanel = () => {
  return (
    <div className="flex min-h-[80vh] mx-[-8%]">
      <Sidebar />
      <main className="flex-1 p-8 bg-white rounded-l-2xl shadow-xl">
        <DashboardStats />
        <ProductForm />
        <ProductList />
      </main>
    </div>
  );
};

export default AdminPanel;
