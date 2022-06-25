import * as MedicationApiUtil from "../util/medication_util";

export const RECEIVE_ALL_MEDICATIONS = "RECEIVE_ALL_MEDICATIONS";
export const RECEIVE_MEDICATION = "RECEIVE_MEDICATION";

export const receiveAllMedications = (medications) => ({
  type: RECEIVE_ALL_MEDICATIONS,
  medications,
});

export const receiveMedication = (medication) => ({
  type: RECEIVE_MEDICATION,
  medication,
});

export const fetchMedications = () => (dispatch) => {
  return MedicationApiUtil.fetchMedications().then((medications) =>
    dispatch(receiveAllMedications(medications))
  );
};

export const fetchMedication = (medicationId) => (dispatch) => {
  return MedicationApiUtil.fetchMedication(medicationId).then((medication) =>
    dispatch(receiveMedication(medication))
  );
};
