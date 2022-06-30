import React, { useEffect } from 'react';
import MedicationIndexItem from './medication_index_item';
import { Link } from 'react-router-dom';

const MedicationIndex = (props) => {
    useEffect(() => {
        fetchMedications();
    }, [])

    const { medications, fetchMedications } = props

    return (
        <>
            <div className="index-quota">When you're out of sick days, we got you covered!</div>
            <div className="medication-index">
                <br />
                <br />
                {
                    medications.map(medication => {
                        return (
                            <MedicationIndexItem
                                medication={medication}
                                key={medication.id}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default MedicationIndex;