import React from "react";

class MedicationShow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { medication } = this.props;
        return (
            <div>
                <p>{medication.id}</p>
            </div>
        )
    }
}