# Document

Postman: https://documenter.getpostman.com/view/2583401/RzZ9FK8g#d4ab59eb-1621-c05f-7482-d6d506c19988

## APIs

APIs with error format:

```json
{
    "message": "[Error message]"
}
```

### Not Authenticated

#### POST /api/login - DONE

+ Body: `{ username, password }`
+ Response: `{ user, token, tokenExpire, tokenIssuedAt }`

Example
```json
{
    "user": {
        "active": true,
        "firstName": "",
        "lastName": "",
        "photoUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/carlosm/128.jpg",
        "company": "Bogan LLC",
        "position": "Shipping and receiving person or manager",
        "password": null,
        "_id": "5be27c8fba7346230a2a0dcf",
        "username": "duane15",
        "email": "duane.quitzon56@gmail.com",
        "tel": "978-374-1216 x005",
        "id": "5be27c8fba7346230a2a0dcf",
        "createdAt": "2018-11-07T05:47:59.831Z",
        "updatedAt": "2018-11-07T05:48:43.387Z",
        "salt": null,
        "__v": 0,
        "tokenExpire": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTI3YzhmYmE3MzQ2MjMwYTJhMGRjZiIsInVzZXJuYW1lIjoiZHVhbmUxNSIsImlhdCI6MTU0MTc2NTg0OSwiZXhwIjoxNTQyMTU0NjQ5fQ.zhi2JDEfYTbqCliJKqf_ZokP4e5E0UCHpdUuCHXgTE4",
    "tokenExpire": 1542154649,
    "tokenIssuedAt": 1541765849
}
```

#### POST /api/forgot
TODO

#### POST /api/create - DONE

+ Body: `{ username, email, password, tel, ?firstName, ?lastName, ?photoUrl, ?company, ?position }`

+ Response: 
```json
{
    "message": "Logout successfully"
}
```


#### Test APIs
Only support with enable environment secret key, add `secret-key` to headers

##### POST /api/test/fake/user - DONE
+ Body: `Object`
+ Response: `{ user }`

##### POST /api/test/fake/contact
+ Body: `{ userID, contacts: [userID] }`
+ Use scripts to fake

##### POST /api/test/fake/record
+ Body: `{ userID, partnerID, note, time }`
+ Response: `{ record }`
+ Use scripts to fake

### Authenticated

To use the following APIs, should add token in body, query or headers to use. To add token:

+ Use `headers['authorization']`
+ Use `headers['x-access-token']`
+ Use `query (?token=)`
+ Use `body [token=]`

#### GET /api/authenticated - DONE
Test user is authenticated.

```json
{
    "message": "Valid token. You are authenticated."
}
```

#### POST /api/reset
Reset password

TODO

#### GET /api/logout - DONE
```json
{
    "message": "Logout successfully"
}
```

#### GET /api/user - DONE
Get users list

`[ {user1}, {user2} ]`

#### GET /api/user/id/:id - DONE
Get user by id

`{ user }`

#### GET /api/user/:username - DONE
Get user by username

`{ user }`

#### PUT /api/user - DONE
Update user

+ Body: `{ firstName, lastName, company, position }`

+ Response:
```json
{
    "message": "Update successfully"
}
```

#### GET /api/contact - DONE
Get contacts

`[ {user1}, {user2} ]`

#### POST /api/contact - DONE
Add a contact

+ Body: `{ partnerID: String }`
+ Response:
```json
{
    "message": "Update successfully"
}
```


#### GET /api/record - DONE
Get contacts

`[ {record1}, {record2} ]`

Example:

```json
[
    {
        "time": "2018-11-09T13:00:06.968Z",
        "note": "hello you",
        "_id": "5be585ee50750f4e586fd62a",
        "userID": "5be27c8fba7346230a2a0dcf",
        "partner": {
            "active": true,
            "firstName": "",
            "lastName": "",
            "photoUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg",
            "company": "Walsh-Beatty Ltd.",
            "position": "Purchasing manager",
            "_id": "5be27c8fba7346230a2a0dcc",
            "username": "lucia.legros",
            "email": "lucia.legros29@yahoo.com",
            "tel": "327.473.9186",
            "id": "5be27c8fba7346230a2a0dcc",
            "createdAt": "2018-11-07T05:47:59.816Z",
            "updatedAt": "2018-11-07T05:47:59.816Z",
            "__v": 0
        },
        "id": "5be585ee50750f4e586fd62a",
        "createdAt": "2018-11-09T13:04:46.301Z",
        "updatedAt": "2018-11-09T13:04:46.301Z",
        "__v": 0
		},
		{
			"...": "..."
		}
]
```

#### POST /api/record - DONE
Add a record

+ Body: `{ partnerID: String, note: String }`
+ Response: 

```json
{
    "message": "Create successfully"
}
```
