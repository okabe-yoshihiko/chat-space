
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :group_users
- has_many :massages

## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|uer_id|integer|null: false, foreing_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|null: false|
|image|string|

### Association
- belongs_to :users
- belongs_to :groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|uer_id|integer|null: false, foreing_key: true|
|massage_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group_users
- has_many :massages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user