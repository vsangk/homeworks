class UserMailer < ActionMailer::Base
  default from: "everybody@appacademy.io"

  def welcome_email(user)
    @user = user
    @url  = 'http://localhost:3000/session/new'
    mail(to: "user@email.com", subject: 'Welcome to 99 Cats')
  end
end
