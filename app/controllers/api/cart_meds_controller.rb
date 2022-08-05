class Api::CartMedsController < ApplicationController

    before_action only: [:index, :update, :delete]

    def index
        if logged_in?
            @cart_meds = CartMed.all 
        end
    end

    def show
        @cart_med = CartMed.find(params[:id])
    end

    def create
        @cart_med = current_user.cart_meds.new(cart_meds_params);
        if @cart_med.save
            render :show
        else
            render json: @cart_med.errors.full_messages, status: 422
        end
    end

    def update 
        if logged_in?
            @cart_med = CartMed.find(params[:id])
            if @cart_med.update(cart_meds_params)
                render :show
            else
                render json: @cart_med.errors.full_messages, status: 422
            end
        end
    end

    def destroy
        if logged_in?
            @cart_med = CartMed.find(params[:id])
            if @cart_med.destroy
                render :show
            end
        end
    end

    def cart_meds_params
        params.require(:cart_med).permit(:buyer_id, :med_id, :total_cost, :quantity, :id)
    end
end
