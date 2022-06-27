import React, { useEffect } from 'react';

const MedicationShow = (props) => {

    useEffect(() => {
        props.fetchMedication(props.match.params.medicationId)
    }, [])

    const { medication } = props
    if (!medication) return null
    return (
        <div className="medication-show-page">
            <div className="medication-show-info">
                <div className="medication-image-container">
                    <img src={medication.photoUrl} className="medication-show-image" />
                </div>
                <div className="medication-show-text">
                    <div className="medication-show-name">{medication.name}</div>
                    <div className="medication-show-price-container">
                    <div className="medication-show-price">{medication.price}</div>
                    </div>
                    <div className="medication-show-description">{medication.description}</div>
                </div>
            </div>
        </div>
    )
}

export default MedicationShow;