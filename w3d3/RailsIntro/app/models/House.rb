# == Schema Information
#
# Table name: houses
#
#  id      :integer          not null, primary key
#  address :string           not null
#

class House < ActiveRecord::Base
  validates :address, presence: true, uniqueness: true

  has_many :residents,
    primary_key: :id,
    foreign_key: :house_id,
    class_name: :Person
end
