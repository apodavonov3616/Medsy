import React from "react";

class MedicationShow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { medication } = this.props;
        debugger
        return (
            <div>
                <p>{medication.name}</p>
            </div>
        )
    }
}

export default MedicationShow;