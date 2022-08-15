import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartMeds = (props) => {
    const handleUpdateQuantity = (cartMed) => {
        return (e) => props.updateCartMed({
            id: cartMed.id,
            medication_id: cartMed.medicationId,
            total_cost: cartMed.price,
            quantity: e.target.value,
            photoUrl: cartMed.photoUrl
        })

    }

    const handleDeleteMed = (e) => {
        e.preventDefault();
        props.destroyCartMed(props.cartMedId);
        window.location.reload()
    }

    useEffect(() => {
        props.fetchCartMeds();
    }, [])

    const { cartMeds } = props;

    // if(!cartMeds) {
    //     return null;
    // }
    const totalPrice = () => {
        let total = 0;
        props.cartMeds.forEach((item) => total += (item.price * item.quantity))
        // return total.round(2)
        return (Math.round(total * 100) / 100)
    }

    return (
        <div className="cart-meds-page">
            <div className="number-items-cart">
                {cartMeds.length} items in your cart
            </div>
            <div className="cart-meds-contents">
                <div className="cart-meds-contents-left">
                    <ul className="cart-unordered-list">
                        {
                            cartMeds.map((cartMed) => {
                                return (
                                    <div className="cart-med">
                                        <Link to={`/medications/${cartMed.medicationId}`}>
                                            <img src={cartMed.photoUrl} className="cart-photo" />
                                        </Link>
                                        <div className='cart-med-info'>
                                            <h2 className="medication-name">{cartMed.name}</h2>
                                            Total Price:
                                            <h2 className="medication-price">${cartMed.price * cartMed.quantity}</h2>
                                            {/* <h2>{cartMed.quantity}</h2> */}
                                            <span className="number-items">
                                                Number of items:&nbsp;
                                            </span>
                                            <select className="cart-dropdown-content"
                                                value={cartMed.quantity}
                                                id="quanityId"
                                                onChange={handleUpdateQuantity(cartMed)}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                            <br />
                                            <br />
                                            <button className="cart-delete-content" onClick={handleDeleteMed}>Remove</button>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <div>
                                                <input type="checkbox" name="gift" value="Gift" />
                                                <label for="gift">This medication is a gift</label>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="cart-meds-contents-right">
                    <div className="cart-right-content-internal">
                        <div className="cart-right-content-internal-2">
                            <h2>How you'll pay</h2>
                            <label class="payment-type"><input type="radio" name="payment" />Credit Card</label>
                            <br />
                            <br />
                            <label class="payment-type"><input type="radio" name="payment" />PayPal</label>
                            <br />
                            <br />
                            <div>
                                Item(s) total Cost:&nbsp;
                                {totalPrice()}
                            </div>
                            <br />
                            <button className="checkout-button">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CartMeds;
