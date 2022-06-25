import React from 'react';
import { Link } from 'react-router-dom';

const MedicationIndexItem = (props) => {

    const { medication } = props

    return (
        <div className="medication-container">
            <div>{medication.name}</div>
            <Link to={`/medication/${medication.id}`} className="medication-show-link">
                <div className="hidden-medication-layer">
                </div>
            </Link>
        </div>
    )
}

export default MedicationIndexItem;