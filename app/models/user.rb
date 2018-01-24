class User < ApplicationRecord
  validates :session_token, :username, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  before_validation :ensure_session_token

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.session_token).is_password?(password)
  end

  def password=(password)
    @password = password
    self.session_token = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user ||= User.find_by_username(username)
    return nil unless user && user.is_password?(password)
    user
  end
end
