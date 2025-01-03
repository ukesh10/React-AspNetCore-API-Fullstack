import { useEffect, useState } from 'react'
import Catalog from '../catalog/Catalog'
import { Product } from '../../models/product';

export default function ProductPage() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
      fetch("https://localhost:7284/api/Products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  return (
    <div>
      <h3 className='text-center mt-4'> Our Products</h3>
      <Catalog products={products} />
    </div>
  )
}
