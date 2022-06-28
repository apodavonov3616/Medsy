class Api::MedicationsController < ApplicationController

    def index 
        @medications = Medication.with_attached_photo.all
        render :index
    end

    def show 
        @medication = Medication.find(params[:id])
        render :show
    end

    private

    def medication_params
        params.require(:medication).permit(:name)
    end

end
