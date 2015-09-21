class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format|
      format.json {render json: @pins}
      format.html {render status: 204}
    end
  end
end
