class Api::CartsController < ApplicationController

    before_action only: [:index, :update, :delete]

    def index
        if logged_in?
            @carts = Cart.all 
        end
    end

    def show
        @cart = Cart.find(params[:id])
    end

    def create
        @cart = current_user.carts.new(cart_meds_params);

        if @cart.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    def update 
        if logged_in?
            @cart = Cart.find(params[:id])
            if @cart.update(cart_meds_params)
                render :show
            else
                render json: @cart.errors.full_messages, status: 422
            end
        end
    end

    def destroy
        if logged_in?
            @cart = Cart.find(params[:id])
            if @cart.destroy
                render :show 
            end
        end
    end

    def cart_meds_params
        params.require(:cart_med).permit(:buyer_id, :med_id, :total_cost, :quantity, :id)
    end
end
