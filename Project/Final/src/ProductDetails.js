import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId
    axios.get(`/AmeroBakery/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>; // Add a loading indicator
  }

  return (
    <div className="row border-top border-bottom" key={productId}>
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={product.image} alt={product.title} />
        </div>
        <div className="col">
          <div className="row text-muted">{product.title}</div>
          <div className="row">{product.text}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;