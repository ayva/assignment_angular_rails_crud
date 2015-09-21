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

end
