class UsersController < ApplicationController

  def my_portfolio
    @user_stocks = current_user.stocks
    @user = current_user
  end

  def my_friends
    @friendships = current_user.friends
  end

  def serach
    @users = User.search(params[:search_param])
    if @users
      @users = current_user.except_current_user(@users)
      render partial: "friends/lookup"
    else
      render status: :not_found, nothing: true
    end
  end

  def add_friend
    @friend =User.find(params[:friend])
    current_user.friendships.build(friend_id: @friend.id)

    if current_user.save
      redirect_to my_friends_path, notice: "Friend was successful added"

    else
      redirect_to my_friend_path, flash[:error] = "There is an error"
    end

  end
end