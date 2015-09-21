require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let!(:pin){ FactoryGirl.create(:pin) }
  let(:json){ JSON.parse(response.body) }

  describe "GET #index" do
    before do
      get :index, format: :json
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "returns a format error if html is requested" do
      get :index, format: :html
      expect(response).to have_http_status(204)
    end

    it "returns all pins" do
      expect(json.map{|item| item["id"]}).to include(pin.id)
    end

    it "doesn't contain non-existant pins" do
      expect(json.map{|item| item["id"]}).not_to include(2)
    end
  end

  describe "POST #create" do
    let!(:pin){ FactoryGirl.create(:pin) }

    it 'should create a pin' do

      expect{post :create, format: :json, pin: {item_name: "Item Name", description: "Describe", user_id: 1, buy_sell: true}}.to change{Pin.count}.by(1)
    end

    xit 'should not create a pin if required field is missing' do

      expect{post :create, format: :json, pin: {description: "Describe", user_id: 1, buy_sell: true}}.to change{Pin.count}.by(0)
    end



  end

end
