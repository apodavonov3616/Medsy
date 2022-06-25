import React, { useEffect } from 'react';

const MedicationShow = (props) => {

    useEffect(() => {
        props.fetchMedication(props.match.params.medicationId)
    }, [])

    const { medication } = props
    if (!medication) return null
    return (
        <div>
            {medication.name}
        </div>
    )
}

export default MedicationShow;