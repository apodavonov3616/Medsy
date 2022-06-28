import React from 'react';
import { Link } from 'react-router-dom';

const MedicationIndexItem = (props) => {

    const { medication } = props

    const deals = ["Limited Time Offer!", "Best Deal Today!", "Promotional Sale!", "High Quality Product!"]

    return (
        <div className="medication-container">
            {/* <Link to={`/medications/${medication.id}`} className="medication-show-link">
                <div>{medication.name}</div>            
            </Link> */}
            <li className='medication-index-item' key={`medication-${medication.id}`}>
                <Link to={`/medications/${medication.id}`}>
                    <div>
                        <img className='medication-index-photo' src={medication.photoUrl} />
                    </div>
                    <div className="medication-index-item-info">
                        <div className="medication-index-price">${medication.price}</div>
                        <div className="limited-time-offer">{deals[Math.floor(Math.random() * deals.length)]}</div>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default MedicationIndexItem;