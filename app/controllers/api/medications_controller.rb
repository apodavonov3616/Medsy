class Api::MedicationsController < ApplicationController

    def index 
        if params[:search]
            @medications = Medication.all.select {|medication| medication.title.downcase.include?(params[:search].downcase)}
        else 
            @medications = Medication.all 
        end
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
