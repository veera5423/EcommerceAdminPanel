# ShopEase E-Commerce Admin Panel

A modern, full-stack E-Commerce Admin Panel for product management, built with React (Vite, Zustand, Tailwind CSS) and Node.js/Express/MongoDB.

## Features

- Product CRUD (Create, Read, Update, Delete)
- Smart category suggestion
- Modern UI with Tailwind CSS
- Dashboard stats (total products, categories)
- Sidebar navigation (future-proofed for users/orders)
- Toast notifications for actions
- Responsive and clean design

## Project Structure

```
EcommercePLatform/
├── backend/           # Node.js/Express/MongoDB API
├── frontend/          # React (Vite) Admin Panel
```

---

## Backend Setup

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```
2. **Create a `.env` file:**
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=8080
   ```
3. **Start the backend:**
   ```sh
   npm start
   ```
   The backend will run on [http://localhost:8080](http://localhost:8080)

---

## Frontend Setup

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```
2. **Start the frontend:**
   ```sh
   npm run dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173)

---

## API Endpoints

- `POST   /api/products` - Create a new product
- `GET    /api/products` - Get all products
- `GET    /api/products/:id` - Get a product by ID
- `PUT    /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

---

## Environment Variables

- **Backend:** `.env` file with `MONGO_URI` and `PORT`
- **Frontend:** (Optional) You can set up a `.env` file for the API base URL if deploying

---

## Customization & Future Features

- Add user/order management in the sidebar
- Add more dashboard stats
- Add advanced filtering, pagination, and bulk actions
- Add authentication and role-based access

---

## License

MIT
