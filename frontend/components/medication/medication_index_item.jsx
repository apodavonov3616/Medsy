import React from 'react';
import { Link } from 'react-router-dom';

const MedicationIndexItem = (props) => {

    const { medication } = props

    return (
        <div className="medication-container">
            <Link to={`/medications/${medication.id}`} className="medication-show-link">
                <div>{medication.name}</div>            
            </Link>
        </div>
    )
}

export default MedicationIndexItem;