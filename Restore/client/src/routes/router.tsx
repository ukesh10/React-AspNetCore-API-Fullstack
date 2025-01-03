import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../features/home/HomePage";
import ProductPage from "../features/product/ProductPage";
import ProductDetailPage from "../features/product/ProductDetailPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'products', element: <ProductPage />},
            {path: 'product/:id', element: <ProductDetailPage />},
        ]
    }
])