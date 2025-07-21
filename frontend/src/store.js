import { create } from 'zustand';
import api from './api';

const initialForm = {
  productName: '',
  description: '',
  price: '',
  imageUrl: '',
  category: '',
  _id: null, // for edit mode
};

export const useProductStore = create((set, get) => ({
  products: [],
  form: { ...initialForm },
  loading: false,
  error: null,
  // Helper actions
  setProducts: (products) => set({ products }),
  setForm: (form) => set({ form }),
  updateForm: (field, value) => set((state) => ({
    form: { ...state.form, [field]: value },
  })),
  resetForm: () => set({ form: { ...initialForm } }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  // CRUD actions with actual API calls using axios instance
  getProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get('/api/products');
      set({ products: res.data });
    } catch {
      set({ error: 'Failed to fetch products' });
    } finally {
      set({ loading: false });
    }
  },
  createProduct: async () => {
    const { form, getProducts, resetForm, setError, setLoading } = get();
    setLoading(true);
    setError(null);
    try {
      await api.post('/api/products', {
        productName: form.productName,
        description: form.description,
        price: parseFloat(form.price),
        imageUrl: form.imageUrl,
        category: form.category,
      });
      await getProducts();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  },
  updateProduct: async () => {
    const { form, getProducts, resetForm, setError, setLoading } = get();
    setLoading(true);
    setError(null);
    try {
      await api.put(`/api/products/${form._id}`, {
        productName: form.productName,
        description: form.description,
        price: parseFloat(form.price),
        imageUrl: form.imageUrl,
        category: form.category,
      });
      await getProducts();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  },
  deleteProduct: async (id) => {
    const { getProducts, setError, setLoading } = get();
    setLoading(true);
    setError(null);
    try {
      await api.delete(`/api/products/${id}`);
      await getProducts();
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  },
})); 