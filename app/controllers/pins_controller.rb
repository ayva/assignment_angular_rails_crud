class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format|
      format.json {render json: @pins}
      format.html {render status: 204}
    end
  end

  def create
    @pin = Pin.new(pin_params)
    respond_to do |format|
      if @pin.save()
        format.json { render json: @pin.to_json{ include :user } }
      else

      end
    end
  end


  private
  def pin_params
    params.require(:pin).permit(:item_name, :description, :buy_sell, :user_id)
  end
end
