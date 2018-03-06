class Idea < ApplicationRecord
  validates :body, length: { maximum: 140 }
end
