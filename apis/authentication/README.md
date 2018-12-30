# Authentication

{% api-method method="post" host="http://api.lab.bkchain.tk" path="/login" %}
{% api-method-summary %}
Login
{% endapi-method-summary %}

{% api-method-description %}
Login
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-form-data-parameters %}
{% api-method-parameter name="password" type="string" required=true %}
Password
{% endapi-method-parameter %}

{% api-method-parameter name="username" type="string" required=true %}
Username 
{% endapi-method-parameter %}
{% endapi-method-form-data-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```javascript
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
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```javascript
{
    "message": "[Error message]"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



