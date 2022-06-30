import React, { useEffect } from 'react';

const MedicationShow = (props) => {

    useEffect(() => {
        props.fetchMedication(props.match.params.medicationId)
    }, [])

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // const dateFunction = () => {
    //     const d = new Date();
    //     let year = d.getFullYear();
    //     let month = d.getMonth();
    //     let day = d.getDate();
    //     return month
    //     // .toString() + "/" + (day).toString() + "/" +year.toString()
    // }

    const { medication } = props
    if (!medication) return null
    return (
        <div className="medication-show-page">
            <div className="medication-show-info">
                <div className="medication-image-container">
                    <img src={medication.photoUrl} className="medication-show-image" />
                </div>
                <div className="medication-show-text">
                    <div className="medication-show-seller">{medication.seller.username}</div>
                    <div className="medication-show-name">{medication.name}</div>
                    <div className="medication-show-price-container">
                    <div className="medication-show-price">{medication.price}</div>
                    </div>
                    <div className="medication-show-description">{medication.description}</div>
                    <br />
                    <br />
                    <button className="add-cart-button">Add to cart</button>
                    <div selling-fast>
                        <img src="https://medsy-seed.s3.amazonaws.com/hourglass.png" alt="hourglass" className="hourglass-image"/>
                        <div>Selling fast! Only {randomNumber(2,10)} left, and {randomNumber(10,20)} people have it in their carts.</div>
                    </div>
                    <div delivery>
                        <img src="https://medsy-seed.s3.amazonaws.com/truck_2.jpg" alt="truck" className="truck-image"/>
                        <div>Get it today with our same-day delivery</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicationShow;