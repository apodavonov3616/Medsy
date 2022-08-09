import React, { useEffect } from 'react';
import MedicationIndexItem from './medication_index_item';
import { Link } from 'react-router-dom';

const MedicationIndex = (props) => {
    useEffect(() => {
        fetchMedications();
    }, [])

    const { medications, fetchMedications } = props

    const firstMeds = (medications) => {
        return medications.slice(0, 3)
    }

    const secondMeds = (medications) => {
        return medications.slice(3, 6)
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
                <div className="medication-container" id="medication-text-1">
                    Discover a plethora of medications that treat any symptoms
                    <br />
                    &lArr;
                </div>
            </div>
            <div className="medication-index-first-meds">
                <div className="medication-container" id="medication-text-2">
                    Discover a plethora of medications that treat any symptoms
                    <br />
                    &rArr;
                </div>
                {
                    secondMeds(medications).map(medication => {
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