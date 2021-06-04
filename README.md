# Restful Banking API Documentation 
----
### Collection Structure

| Column 1       | Column 2     | 
| :------------- | :----------: | 
| _id |  Unique account ID, auto-generated  | String |
| name   | Name of account holder | String |
| balance   | Amount of money held in the account | Integer |

### Get

Access existing accounts data.

`GET /accounts`

This endpoint sends a JSON of all accounts within the accounts collection. No authentication currently required (it's a terrible bank).

##### Success Response

        {
            "success": true,
            "message": "It worked",
            "status": 200,
            "data": [
                {
                    "_id": "60b79a22d1b03155ae920111",
                    "name": "imy",
                    "balance": 2802
                },
                {
                    "_id": "60b79d07d1b03155ae920112",
                    "name": "kate",
                    "balance": 99940
                }
            ]
        }
        
 ##### Error Response
 
        not found

`GET /accounts/:id`

This endpoint sends a JSON of a specific account accessed by the document ID.


##### Sample Call

        /accounts/60b79a22d1b03155ae920111
        

##### Success Message

    {
        "success": true,
        "message": "It worked",
        "status": 200,
        "data": {
                "_id": "60b79a22d1b03155ae920111",
                "name": "imy",
                "balance": 2802
    }


### POST

`POST /accounts`

This endpoint allows you to add a new account to the bank collection.

**Required:**

`name=[string]`
`balance=[positive integer]`

##### Data Params

        {
            "name": "Sally Smith",
            "balance": 42000
        }

##### Success Response

        {
            "success": true,
            "message": "It worked",
            "status": 200,
            "data": [
                {
                    "name": "Sally Smith",
                    "balance": 42000,
                    "_id": "60ba2977e130b761dfc0b697"
                }
            ]
        }
        
 ##### Error Response
 
 If a name is not given || initial balance is negative
 
         {
            "success": false,
            "message": "Must have name and positive balance",
            "status": 404
        }

##### Error Response

If the wrong datatypes are submitted

        Not Found

### DELETE

`DELETE /accounts`

This endpoint allows you to permanently remove an account from the bank.

##### Data Params

        {
            "accountId": "60ba2977e130b761dfc0b697"
        }

##### Success Response

    {
        "success": true,
        "message": "Account permanently deleted",
        "status": 200
    }
        
 ##### Error Response
 
         Not Found

### PUT

`PUT/balanceChange`

This endpoint allows you to add and withdraw money from a user's account.

##### Data Params

        {
            "id": "60b79a22d1b03155ae920111",
            "sum": 40
        }

##### Success Response

        {
            "success": true,
            "message": "It worked",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }

##### Error Response

        Not Found
        
        
`PUT /accounts/balanceTransfer`

This endpoint allows you to transfer money from one account to another 

##### Data Params

        {
            "cardholderId": "60b79d07d1b03155ae920112",
            "transferSum": 100,
            "recipientId": "60b79a22d1b03155ae920111"
        }

##### Success Response

        {
            "success": true,
            "message": "Transfer successful",
            "status": 200
        }
        
##### Error Response

If there is an issue connecting to the DB

        Not Found

##### Error Response

        "Please ensure you have all three required fields correctly typed"
