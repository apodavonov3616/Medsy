import React, { useEffect } from 'react';

const MedicationShow = (props) => {

    useEffect(() => {
        props.fetchMedication(props.match.params.medicationId)
    }, [])

    const { medication } = props
    if (!medication) return null
    return (
        <div>
            <div>{medication.name}</div>
            <div>{medication.category_name}</div>
            <div>{medication.description}</div>
            <div>{medication.price}</div>
            <img src={medication.photoUrl} className="product-show-image" />
        </div>
    )
}

export default MedicationShow;