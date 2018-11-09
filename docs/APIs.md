# Document

## APIs

APIs with error format:

{ message: '[Error message]' }

### Not Authenticated

#### POST /api/login

+ Body: { username, password }
+ Response: { user: Object, token: String, tokenExpire: timestamp, tokenIssuedAt: timestamp }

#### POST /api/forgot
TODO

#### POST /api/create

+ Body: { username, email, password, tel, ?firstName, ?lastName, ?photoUrl, ?company, ?position }
+ Response: { message: 'Created successfully' }


#### Test APIs
Only support with enable environment secret key
##### POST /api/test/fake/user
+ Body: Object
+ Response: { user }

##### POST /api/test/fake/contact
+ Body: { userID, contacts: [userID] }
+ Response: { message: 'Update successfully' }

### Authenticated

To use the following APIs, should add token in body, query or headers to use. To add token:

+ Use headers[authorization]
+ Use headers[x-access-token]
+ Use query (?token)
+ Use body ({token})

#### GET /api/authenticated
Test user is authenticated.

{ message: Valid token. You are authenticated. }


#### POST /api/reset
Reset password

TODO

#### GET /api/logout

{ message: 'Logout successfully' }


#### GET /api/user
Get users list

[{user1}, {user2}, {user3}]

#### GET /api/user/:id
Get user by id

{ user }

#### GET /api/user/:id
Get user by username

{ user }

#### PUT /api/user
Update user

+ Body: { firstName, lastName, company, position }

+ Response: { message: 'Update successfully' }

#### GET /api/contact
Get contacts

[ {user1}, {user2} ]

#### POST /api/contact
Add a contact

+ Body: partnerID: String
+ Response: { message: 'Update successfully' }


#### GET /api/record
Get contacts

[ {record1}, {record2} ]

record: {
	id,
	userID,
	partner: {user profile},
	time,
	note
}

#### POST /api/record
Add a record

+ Body: { partnerID: String, note: String }
+ Response: { message: 'Create successfully' }


