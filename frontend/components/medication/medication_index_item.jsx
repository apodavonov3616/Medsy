import React from 'react';
import { Link } from 'react-router-dom';

const MedicationIndexItem = (props) => {

    const { medication } = props

    return (
        <div className="medication-container">
            <Link to={`/medications/${medication.id}`} className="medication-show-link">
                <div>{medication.name}</div>            
            </Link>
            {/* <li className='product-index-item' key={`product-${product.id}`}>
                    <Link to={`/products/${medication.id}`}>
                        <div className='product-index-image'>
                            <img src={product.image_url} />
                        </div>
                        <div className="product-index-item-info">
                            <div className="product-index-price">${product.price.toFixed(2)}</div>
                            <div className="limited-time-offer">Limited Time Offer!</div>
                        </div>
                    </Link>
                </li> */}
        </div>
    )
}

export default MedicationIndexItem;