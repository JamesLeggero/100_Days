class CreateCookies < ActiveRecord::Migration[6.0]
  def change
    create_table :cookies do |t|
      t.string :name
      t.boolean :nuts

      t.timestamps
    end
  end
end
