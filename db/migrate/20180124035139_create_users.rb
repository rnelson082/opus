class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :password
      t.string :username
      t.string :session_token

      t.timestamps
    end
  end
end
