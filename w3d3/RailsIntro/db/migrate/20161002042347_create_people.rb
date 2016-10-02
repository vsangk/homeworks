class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name, null: false
      t.integer :house_id

      t.timestamps null: false
    end

    add_index :people, :house_id
  end
end
