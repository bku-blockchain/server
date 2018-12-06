# Document

Postman: https://documenter.getpostman.com/view/2583401/RzZ9FK8g#d4ab59eb-1621-c05f-7482-d6d506c19988

API URL is: http://api.lab.bkchain.tk/

## APIs

APIs with error format:

```json
{
    "message": "[Error message]"
}
```

### Not Authenticated

#### POST /login - DONE

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

#### POST /forgot
TODO

#### POST /create - DONE

+ Body: `{ username, email, password, tel, ?firstName, ?lastName, ?photoUrl, ?company, ?position }`

+ Response: 
```json
{
    "message": "Logout successfully"
}
```


#### Test APIs
Only support with enable environment secret key, add `secret-key` to headers

##### POST /test/fake/user - DONE
+ Body: `Object`
+ Response: `{ user }`

##### POST /test/fake/contact
+ Body: `{ userID, contacts: [userID] }`
+ Use scripts to fake

##### POST /test/fake/record
+ Body: `{ userID, partnerID, note, time }`
+ Response: `{ record }`
+ Use scripts to fake

### Authenticated

To use the following APIs, should add token in body, query or headers to use. To add token:

+ Use `headers['authorization']`
+ Use `headers['x-access-token']`
+ Use `query (?token=)`
+ Use `body [token=]`

#### GET /authenticated - DONE
Test user is authenticated.

```json
{
    "message": "Valid token. You are authenticated."
}
```

#### POST /reset - DONE
Reset password

+ Body: `{ oldPassword, newPassword }`
+ Response:

Success:
```json
{
    "message": "Password is changed successfully"
}
```

Error:
```json
{
    "message": "Old password is not correct"
}
```

#### GET /logout - DONE
```json
{
    "message": "Logout successfully"
}
```

#### GET /user - DONE
Get users list

`[ {user1}, {user2} ]`

#### GET /user/id/:id - DONE
Get user by id

`{ user }`

#### GET /user/:username - DONE
Get user by username

`{ user }`

#### PUT /user - DONE
Update user

+ Body: `{ firstName, lastName, company, position }`

+ Response:
```json
{
    "message": "Update successfully"
}
```

#### GET /contact - DONE
Get contacts

`[ {user1}, {user2} ]`

#### POST /contact - DONE
Add a contact

+ Body: `{ partnerID: String }`
+ Response:
```json
{
    "message": "Update successfully"
}
```


#### GET /record - DONE
Get records of current user

`[ {record1}, {record2} ]`

#### GET /record/:partnerID - DONE
Get records of current user with other partner by ID

`[ {record1}, {record2} ]`

Example:


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

#### POST /record - DONE
Add a record

+ Body: `{ partnerID: String, note: String }`
+ Response: 

```json
{
    "message": "Create successfully"
}
```






#### GET /poll - DONE
Get list of current polls, recently start

#### GET /poll/past - DONE
Get list of past polls, recently end

#### GET /poll/future - DONE
Get list of future polls, coming soon

`[ { poll_1 }, { poll_2 }, { poll_3 } ]`

Examples

```json
[
    {
        "eth": {
            "ownerAddress": "0x9338063cd5c8f069334925345FaDc94a8E45742f",
            "contractSecretKey": "0x846578b171e13f9b318decfc7c818ac7f4fc53fc1b91b62fed3750456ad3c76f",
            "txHash": "0xbd48cae052e0480ec2f1109343e72196593392604e6af69e1f9cf87d14046763",
            "contractAddress": "0x460b2ACcbe6fC8a43467c48Cd75258b5c86feBe5"
        },
        "photoUrl": "",
        "_id": "5be5b2528b0aca2070e839db",
        "eventID": "VTV_AWARDS_2018",
        "ownerID": "VTV_ADMIN",
        "title": "Bình chọn VTV Awards 2018. Hạng mục Hình ảnh thời sự ấn tượng",
        "description": "Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.\n\n  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.\n\n  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.",
        "startDate": "2018-11-08T16:02:24.307Z",
        "endDate": "2018-12-29T16:02:24.307Z",
        "candidates": [
            {
                "_id": "5be5b2528b0aca2070e839e0",
                "name": "Chiến sĩ phòng cháy chữa cháy tay bị bỏng trong vụ cháy chung cư Carina - SBD 136",
                "description": "",
                "photoUrl": "",
                "id": "5be5b2528b0aca2070e839e0"
            },
            {
                "_id": "5be5b2528b0aca2070e839df",
                "name": "Công chức đi lễ chùa trong giờ hành chính - SBD 62",
                "description": "",
                "photoUrl": "",
                "id": "5be5b2528b0aca2070e839df"
            },
            {
                "_id": "5be5b2528b0aca2070e839de",
                "name": "Người dân cả nước ăn mừng chiến thắng của đội tuyển U23 Việt Nam và hình ảnh đội tuyển VN tại SVĐ Thường Châu trong trận đấu với Uzberkistan - SBD 24",
                "description": "",
                "photoUrl": "",
                "id": "5be5b2528b0aca2070e839de"
            },
            {
                "_id": "5be5b2528b0aca2070e839dd",
                "name": "Khai thác titan tan phá môi trường - SBD 198",
                "description": "",
                "photoUrl": "",
                "id": "5be5b2528b0aca2070e839dd"
            },
            {
                "_id": "5be5b2528b0aca2070e839dc",
                "name": "Thủ đoạn rút ruột xăng dầu - SBD 31",
                "description": "",
                "photoUrl": "",
                "id": "5be5b2528b0aca2070e839dc"
            }
        ],
        "id": "5be5b2528b0aca2070e839db",
        "createdAt": "2018-11-09T16:14:14.190Z",
        "updatedAt": "2018-11-09T16:14:22.012Z",
        "__v": 0
		},
		{
			"...": "..."
		}
]
```

#### GET /poll/:id - DONE
Get poll by ID

`{ poll }` poll such as above example


#### POST /poll
Create new poll, deploy new smart contract

+ Body: `{ eventID, ownerID, title, description, startDate, endDate, candidates }`

+ Response:

`{ poll }` poll such as above example



#### GET /vote
Get votes list

`[ { vote1 }, { vote2 } ]`

#### GET /vote/:pollID
Get votes in a poll

`[ { vote1 }, { vote2 } ]`

#### GET /vote/:pollID/:userID
Get vote of a user in a poll

`{ vote2 }`


#### POST /vote
Create new vote, send transaction to smart contract

+ Body: `{ pollID, ballots }` with `ballots: [ { id: String }, ... ]`

+ Response:

`{ vote }`
