import React, { useEffect } from 'react';
import MedicationIndexItem from '../medication/medication_index_item';

const CategoryShow = (props) => {

    useEffect(() => {
        fetchMedications();
    }, []);

    const { medications, fetchMedications } = props

    const filterFunction = () => {
        return props.medications.filter((medication) => {
            return (medication.category_name.toLowerCase().includes(props.category))
        })
    };

    return (
        <div className="category-result-container">
            <div className="index-quota">Knowing where to look is half the battle.</div>

            <ul className="category-result">
                {
                    filterFunction().map(medication => <MedicationIndexItem
                        medication={medication}
                        key={medication.id}
                    />)
                }
            </ul>
        </div>
    )
}

export default CategoryShow;