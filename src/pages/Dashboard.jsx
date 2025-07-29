import React, { useState } from 'react'
import Cards from '../components/Cards.jsx';

const Dashboard = ({ products }) => {
  const [productState, setProductStatre] = useState(products);
  return (
    <>
      <div className="d-flex flex-wrap">
        {products.map((product, index) => (
          <div key={index}>
            <div className="badge bg-secondary">
              {product.category}
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row">
          {productState.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3"
               key = {index}>       
                        <Cards product={product} />
              </div>
            
          ))};

        </div>
      </div>

    </>
  );
};

export default Dashboard;