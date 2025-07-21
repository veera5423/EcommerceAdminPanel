import React, { useEffect } from "react";
import { useProductStore } from "./store";
import { suggestCategory } from "./utils";
import toast from "react-hot-toast";

const ProductForm = () => {
  const {
    form,
    updateForm,
    resetForm,
    createProduct,
    updateProduct,
    loading,
    error,
    setError,
  } = useProductStore();

  // Smart categorization effect
  useEffect(() => {
    const suggested = suggestCategory(form.productName, form.description);
    if (suggested && form.category !== suggested) {
      updateForm("category", suggested);
    }
    // eslint-disable-next-line
  }, [form.productName, form.description]);

  // Show error toast if error changes
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (form._id) {
        await updateProduct();
        toast.success("Product updated!");
      } else {
        await createProduct();
        toast.success("Product added!");
      }
    } catch {
      // Error handled by store
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-emerald-50 to-orange-50 rounded-xl shadow p-6 mb-8 max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
        {form._id ? "Edit Product" : "Add Product"}
      </h2>
      <div className="mb-4">
        <label className="block text-emerald-700 font-semibold mb-1">
          Product Name
        </label>
        <input
          name="productName"
          value={form.productName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-emerald-200 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-emerald-700 font-semibold mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-emerald-200 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-emerald-700 font-semibold mb-1">
          Price
        </label>
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
          min={1}
          className="w-full px-3 py-2 border border-emerald-200 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-emerald-700 font-semibold mb-1">
          Image URL
        </label>
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-emerald-200 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-emerald-700 font-semibold mb-1">
          Category
        </label>
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-emerald-200 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
        />
        <small className="text-emerald-400">
          Auto-suggested based on product name/description
        </small>
      </div>
      <div className="flex gap-4 justify-center mt-6">
        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2 rounded shadow transition disabled:opacity-50"
        >
          {loading
            ? form._id
              ? "Updating..."
              : "Adding..."
            : form._id
            ? "Update Product"
            : "Add Product"}
        </button>
        {form._id && (
          <button
            type="button"
            onClick={resetForm}
            disabled={loading}
            className="bg-orange-200 hover:bg-orange-300 text-emerald-800 font-bold px-6 py-2 rounded shadow transition disabled:opacity-50"
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
