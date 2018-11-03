# MoST - Server

## Quickstart

+ Clone source code
+ Create file `.env` at top source code
+ In file `.env`, add environment variables such as file `.env.example`, leave blank for useless variables.


## API

### Login
#### Request
+ POST /api/login
+ Body: username, password
#### Response
+ Body:
```json
{
    "user": {
        "displayName": {
            "firstName": "Rosa",
            "lastName": "Lemke"
        },
        "photoUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/cloudstudio/128.jpg",
        "company": "Zieme-Walker Corp.",
        "position": "Quality control, safety, environmental manager.",
        "password": null,
        "active": true,
        "contacts": [],
        "_id": "5bdbeb3c148cde1779c4e6b5",
        "username": "rosa.lemke1816",
        "email": "rosa.lemke19@hotmail.com",
        "tel": "086-861-6152 x5056",
        "id": "5bdbeb3c148cde1779c4e6b5",
        "createdAt": "2018-11-02T06:14:20.524Z",
        "updatedAt": "2018-11-02T06:14:20.524Z",
        "salt": null,
        "__v": 0,
        "tokenExpire": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZGJlYjNjMTQ4Y2RlMTc3OWM0ZTZiNSIsInVzZXJuYW1lIjoicm9zYS5sZW1rZTE4MTYiLCJpYXQiOjE1NDEyMDQ3NzIsImV4cCI6MTU0MTIxMTk3Mn0.uCo0pblPa6lqdAEJgPeTTT_lZJWjshgEXSDU328mhKw"
}
```


### Sign Up
#### Request
+ POST /api/create
+ Body: username, email, tel, password
#### Response
+ Body:

```json
{ "message": "Create Successfully" }
```




### Logout
#### Request
+ GET /api/logout
+ Headers: Authorization: contains token
#### Response
+ Body:

```json
{ "message": "Logout successfully" }
```


### Get User by username
#### Request
+ GET /api/user/:username
+ Headers: Authorization: contains token
#### Response
+ Body:
```json
{
    "displayName": {
        "firstName": "Rosa",
        "lastName": "Lemke"
    },
    "photoUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/cloudstudio/128.jpg",
    "company": "Zieme-Walker Corp.",
    "position": "Quality control, safety, environmental manager.",
    "active": true,
    "_id": "5bdbeb3c148cde1779c4e6b5",
    "username": "rosa.lemke1816",
    "email": "rosa.lemke19@hotmail.com",
    "tel": "086-861-6152 x5056",
    "id": "5bdbeb3c148cde1779c4e6b5",
    "createdAt": "2018-11-02T06:14:20.524Z",
    "updatedAt": "2018-11-03T00:41:55.781Z",
    "__v": 1
}
```



### Get contacts
#### Request
+ GET /api/user/contacts
+ Headers: Authorization: contains token
#### Response
+ Body:

```json
{
    "contacts": [
        {
            "time": "2018-11-03T00:41:51.735Z",
            "note": "Hello You",
            "_id": "5bdceed3d4402e079939a3db",
            "uid": {
                "displayName": {
                    "firstName": "Lila",
                    "lastName": "Wilkinson"
                },
                "photoUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/msveet/128.jpg",
                "company": "Simonis-Schowalter Group",
                "position": "Office manager.",
                "active": true,
                "_id": "5bdbeb3c148cde1779c4e6b6",
                "username": "lila94",
                "email": "lila.wilkinson95@hotmail.com",
                "tel": "648-960-5762",
                "id": "5bdbeb3c148cde1779c4e6b6",
                "createdAt": "2018-11-02T06:14:20.540Z",
                "updatedAt": "2018-11-02T06:16:57.127Z",
                "__v": 0
            }
        },
        {
            "time": "2018-11-03T00:41:51.735Z",
            "note": "Xin Chao",
            "_id": "5bdceed3d4402e079939a3da",
            "uid": {
                "displayName": {
                    "firstName": "Myrtle",
                    "lastName": "Bins"
                },
                "photoUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/aeon56/128.jpg",
                "company": "McDermott-Parker Corp.",
                "position": "Quality control, safety, environmental manager.",
                "active": true,
                "_id": "5bdbeb3c148cde1779c4e6c7",
                "username": "myrtle_bins",
                "email": "myrtle.bins@yahoo.com",
                "tel": "(617) 674-9294 x06320",
                "id": "5bdbeb3c148cde1779c4e6c7",
                "createdAt": "2018-11-02T06:14:20.631Z",
                "updatedAt": "2018-11-02T06:14:20.631Z",
                "__v": 0
            }
        }
    ]
}
```



### Add contacts
#### Request
+ POST /api/user/contacts
+ Headers: Authorization: contains token
+ Body: contacts: [{ uid: String, note: String }]
#### Response
+ Body:
```json
{ "message": "Update successfully" }
```



## My Notes (Don't care)

### Installation
```
npm install -g truffle
npm install -g ganache-cli
npm install -g solium
```

### Compile smart contract
```
truffle compile
```

### Start EVM with Ganache CLI
```
ganache-cli
```

### Deploy smart contract
```
truffle migrate
```

### Document Web3 version 1.0
+ https://web3js.readthedocs.io/en/1.0
+ ETH Methods: https://web3js.readthedocs.io/en/1.0/web3-eth.html
+ Contract Methods: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html
+ Utils: https://web3js.readthedocs.io/en/1.0/web3-utils.html
