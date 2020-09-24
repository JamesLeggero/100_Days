class User < ApplicationRecord
    has_many :recipes
    has_many :cookies, through: :recipes, source: :cookie
end
