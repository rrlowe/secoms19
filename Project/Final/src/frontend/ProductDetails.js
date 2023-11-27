import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // console.log(productId);
  console.log(product);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/AmeroBakery/products/${productId}`);
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.error('Error fetching the API', error);
      }
    };
    
    fetchData();
  }, []);

  if (!product) {
    return <p>Loading...</p>; // Add a loading indicator
  }

  return (
    <div className="product-details" key={productId}>
      <div className="row main align-items-center">
          <img src={"."+product.image} alt={product.title} />
        <div className="col">
          <div className="title">{product.title}</div>
          <div className="info">{product.text}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;