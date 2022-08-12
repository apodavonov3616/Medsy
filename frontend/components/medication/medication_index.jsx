import React, { useEffect } from 'react';
import MedicationIndexItem from './medication_index_item';
import { Link } from 'react-router-dom';

const MedicationIndex = (props) => {
    useEffect(() => {
        fetchMedications();
    }, [])

    const { medications, fetchMedications } = props

    const firstMeds = (medications) => {
        return medications.slice(0, 7)
    }

    const secondMeds = (medications) => {
        return medications.slice(7, 10)
    }

    const thirdMeds = (medications) => {
        return medications.slice(20, 30)
    }

    const fourthMeds = (medications) => {
        return medications.slice(30, medications.length)
    }

    return (
        <div className="index-page">
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
                <div className="medication-container" id="medication-text-container-1">
                    <p id="medication-text-1">
                        &lArr; Editor's Picks
                    </p>
                    <br />
                    <b>
                        Non sodales neque sodales proin
                        <br />
                    </b>
                    <h2>
                        Ut etiam sit. Dui sapien eget
                        <br />
                        mi proin sed libero enim sed.
                    </h2>
                </div>
            </div>
            <div className="medication-index-first-meds">
                <div className="medication-container" id="medication-text-container-1">
                    <p id="medication-text-1">
                        The Medication Shop
                    </p>
                    <br />
                    <b>
                        Sodales neque sodales proin
                        <br />
                    </b>
                    <h2>
                        Lit etiam sit. Dui sapien eget
                    </h2>
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
            <div class="vertical-index-page-items">

            </div>
        </div>
    )
}

export default MedicationIndex;