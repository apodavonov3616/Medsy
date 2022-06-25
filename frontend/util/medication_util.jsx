export const fetchMedications = () => {
    return $.ajax({
      method: "GET",
      url: "/api/medications",
    });
};

export const fetchMedication = (medicationId) => {
    return $.ajax({
        method: "GET",
        url: `/api/medications/${medicationId}`,
    });
};


  