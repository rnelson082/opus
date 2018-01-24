class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
  end

  def user_params
    params.require(:user).permit(:password, :username)
  end
end
