import React, { useEffect, useState } from 'react';

const MedicationShow = (props) => {

    const [quantity, setQuantity] = useState(1);

    const selectQuantity = (choice) => {
        setQuantity(choice.target.value)
    }

    useEffect(() => {
        props.fetchMedication(props.match.params.medicationId)
    }, [])

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const dateFunction = () => {
        const d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        return (month + 1).toString() + "/" + (day + 1).toString() + "/" + year.toString()
    }

    const handleSubmitToCart = (e) => {
        e.preventDefault();

        const cartMed = {
            med_id: props.medication.id,
            quantity: quantity,
            total_cost: props.medication.price
        }
        props.createCartMed(cartMed).then(() =>
            props.history.push('/cart_meds'))
    }

    const { medication, carts } = props
    if (!medication) return null
    return (
        <div className="medication-show-page">
            <div className="index-quota">Great Choice of Medication!</div>
            <div className="medication-show-info">
                <div className="medication-image-container">
                    <img src={medication.photoUrl} className="medication-show-image" />
                </div>
                <div className="medication-show-text">
                    <div className="medication-show-seller">{medication.seller.username}</div>
                    <div className="medication-show-name">{medication.name}</div>
                    <div className="medication-show-price-container">
                        <div className="medication-show-price">${medication.price}</div>
                    </div>
                    <div className="medication-show-description">{medication.description}</div>
                    <br />
                    <select className="dropdown-content"
                        onChange={selectQuantity}
                    >
                        <option value="1" defaultValue>1</option>
                        <option value="2">2</option>›
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </select>
                    <button className='cart-button'
                        onClick={handleSubmitToCart}
                    >Add to cart</button>
                    <br />
                    <form action="https://c.tenor.com/h5qs19y2WxMAAAAC/rickroll-lyrics.gif">
                        <button className="add-cart-button">Add to cart</button>
                    </form>
                    <div className="selling-fast">
                        <img src="https://medsy-seed.s3.amazonaws.com/hourglass.png" alt="hourglass" className="hourglass-image" />
                        <div>Selling fast! Only {randomNumber(2, 10)} left, and {randomNumber(10, 20)} people have it in their carts.</div>
                    </div>
                    <div className="delivery">
                        <img src="https://medsy-seed.s3.amazonaws.com/truck_2.jpg" alt="truck" className="truck-image" />
                        {/* <div>Get it today with our same-day delivery</div> */}
                        <div>Get it tomorrow on {dateFunction()} with our expedited service</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicationShow;