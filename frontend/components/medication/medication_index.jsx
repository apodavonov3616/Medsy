import React, { useEffect } from 'react';
import MedicationIndexItem from './medication_index_item';
import { Link } from 'react-router-dom';

const MedicationIndex = (props) => {
    useEffect(() => {
        fetchMedications();
    }, [])

    const { medications, fetchMedications } = props

    const firstMeds = (medications) => {
        return medications.slice(0, 10)
    }

    const secondMeds = (medications) => {
        return medications.slice(10, 20)
    }

    const thirdMeds = (medications) => {
        return medications.slice(20, 30)
    }

    const fourthMeds = (medications) => {
        return medications.slice(30, medications.length)
    }

    return (
        <>
            <div className="index-quota">When you're out of sick days, we got you covered!</div>
            <br />
            <br />
            <div className="medication-index-first-meds">
                {
                    firstMeds(medications).map(medication => {
                        return (
                            <MedicationIndexItem
                                medication={medication}
                                key={medication.id}
                            />
                        )
                    })
                }
                <div>
                    Discover a plethora of medications that treat any symptoms
                </div>
            </div>
        </>
    )
}

export default MedicationIndex;