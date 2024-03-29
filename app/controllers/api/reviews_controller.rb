class Api::ReviewsController < ApplicationController
    before_action only: [:create, :edit, :delete]

    def index 
        medication = Medication.find(params[:medication_id])
        @reviews = medication.reviews
        render :index 
    end
    
    def create
        medication = Medication.find(params[:medication_id])
        medication_id = medication.id

        @review = Review.new(review_params)
        @review.medication_id = medication_id
        # debugger
        @review.buyer_id = current_user.id
        @review.buyer_name = current_user.username
        
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages
        end
    end

    def update 
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review
            @review.destroy
            render :show
        else
            render ['Could not find review']
        end
    end

    private
    def review_params
        params.require(:review).permit(:rating, :body, :id, :buyer_id)
    end
end
