## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
  has_many :groups_users
- has_many :groups,through: groups_users
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreing_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|
|image|string|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
  has_many :groups_users
- has_many :users,through: groups_users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user