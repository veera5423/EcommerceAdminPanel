import React, { useEffect } from "react";
import { useProductStore } from "./store";

const ProductList = () => {
  const {
    products,
    setProducts,
    setForm,
    setLoading,
    setError,
    loading,
    getProducts,
  } = useProductStore();

  // Fetch products on mount
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const handleEdit = (product) => {
    setForm({ ...product });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setProducts(products.filter((p) => p._id !== id));
    } catch {
      setError("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <p className="text-center text-emerald-600 font-semibold">Loading...</p>
    );

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
        Product List
      </h2>
      <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gradient-to-r from-emerald-600 to-orange-400 text-white">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-slate-400">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-emerald-50 transition"
                >
                  <td className="py-2 px-4">
                    <img
                      src={product.imageUrl}
                      alt={product.productName}
                      className="w-16 h-16 object-cover rounded shadow border border-orange-200"
                    />
                  </td>
                  <td className="py-2 px-4 font-semibold text-emerald-900">
                    {product.productName}
                  </td>
                  <td className="py-2 px-4 text-orange-700">
                    {product.category}
                  </td>
                  <td className="py-2 px-4 text-orange-600 font-bold">
                    ₹{product.price}
                  </td>
                  <td className="py-2 px-4 flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-emerald-500 hover:bg-emerald-700 text-white px-3 py-1 rounded shadow text-xs font-bold transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-orange-400 hover:bg-orange-600 text-white px-3 py-1 rounded shadow text-xs font-bold transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
