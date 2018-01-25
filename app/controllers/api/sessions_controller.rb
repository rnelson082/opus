
class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["error!"], status: 401
    end
  end

  def destroy
    if logged_in?
      logout
    end
    render json: ["No one logged in"]
  end

end
