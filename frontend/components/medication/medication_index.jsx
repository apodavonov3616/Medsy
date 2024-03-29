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
        return medications.slice(4, 7)
    }

    const thirdMeds = (medications) => {
        return medications.slice(8, 10)
    }

    const fourthMeds = (medications) => {
        return medications.slice(10, 12)
    }
    const fifthMeds = (medications) => {
        return medications.slice(18, 20)
    }
    const sixthMeds = (medications) => {
        return medications.slice(14, 16)
    }
    const seventhMeds = (medications) => {
        return medications.slice(20, 22)
    }
    const eighthMeds = (medications) => {
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
                        The Healing Remedies
                        <br />
                    </b>
                    <h2>
                        Shop for your perfect medicine
                        {/* <br />
                        mi proin sed libero enim sed. */}
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
                        Treatment a click away
                        <br />
                    </b>
                    <h2>
                        Discover unique meds that fight your symptoms
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
            <div className="vertical-index-page-items-container">
                <div className="vertical-index-page-items">
                    <div className="text-2">
                        Medications as gifts!
                    </div>
                    {
                        thirdMeds(medications).map(medication => {
                            return (
                                <MedicationIndexItem
                                    medication={medication}
                                    key={medication.id}
                                />
                            )
                        })
                    }
                </div>
                <div className="vertical-index-page-items">
                    {
                        fourthMeds(medications).map(medication => {
                            return (
                                <MedicationIndexItem
                                    medication={medication}
                                    key={medication.id}
                                />
                            )
                        })
                    }
                    <div className="text-2">
                        Lower blood glucose!
                    </div>
                </div>
                <div className="vertical-index-page-items">
                    <div className="text-2">
                        Acid Reflux? No problem!
                    </div>
                    {
                        fifthMeds(medications).map(medication => {
                            return (
                                <MedicationIndexItem
                                    medication={medication}
                                    key={medication.id}
                                />
                            )
                        })
                    }
                </div>
                <div className="vertical-index-page-items">
                    {
                        sixthMeds(medications).map(medication => {
                            return (
                                <MedicationIndexItem
                                    medication={medication}
                                    key={medication.id}
                                />
                            )
                        })
                    }
                    <div className="text-2">
                        Creating Change Together!
                    </div>
                </div><div className="vertical-index-page-items">
                    <div className="text-2">
                        Fresh from the factory!
                    </div>
                    {
                        seventhMeds(medications).map(medication => {
                            return (
                                <MedicationIndexItem
                                    medication={medication}
                                    key={medication.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MedicationIndex;