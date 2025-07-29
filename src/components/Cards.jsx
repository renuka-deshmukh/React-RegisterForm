import React from 'react'


const Cards = ({ product }) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>

                    {product.discount > 0 ? (
                        <p>price: ₹ <del>{product.price}</del>
                        <span>price: ₹ {product.discountedPrice}</span>
                        </p>

                    ) : (
                        <p>price: ₹{product.price}</p>

                    )}
                    <a href="#" className="btn btn-primary">View More</a>
                    <button className='btn btn-secondery'>ADD TO CART</button>
                </div>
            </div>




        </>
    )
}

export default Cards