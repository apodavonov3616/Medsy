import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartMeds = (props) => {
    const handleUpdateQuantity = (cartMed) => {
        return (e) => props.updateCartMed({
            id: cartMed.id,
            product_id: cartMed.productId,
            total_cost: cartMed.price,
            quantity: e.target.value,
            photoUrl: cartMed.photoUrl
        })

    }

    const handleDeleteMed = (e) => {
        debugger
        e.preventDefault();
        //change here
        props.destroyCartMed(props.cartMed);
    }

    useEffect(() => {
        props.fetchCartMeds();
    }, [])

    const { cartMeds } = props;

    // if(!cartMeds) {
    //     return null;
    // }

    return (
        <div>
            <ul>
                {
                    cartMeds.map((cartMed) => {
                        return (
                            <div>
                                <Link to={`/products/${cartMed.productId}`}>
                                    {/* <img src={cartMed.photoUrl} className="direct-img" /> */}
                                </Link>
                                <h2 className="product-name">{cartMed.name}</h2>
                                <h2 className="product-price">${cartMed.price * cartMed.quantity}</h2>
                                <h2>{cartMed.quantity}</h2>

                                <select className="dropdown-content"
                                    value={cartMed.quantity}
                                    id="quanityId"
                                    onChange={handleUpdateQuantity(cartMed)}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>

                                </select>
                                <button onClick={handleDeleteMed}>Delete</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default CartMeds;
