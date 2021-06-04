# Restful Banking API Documentation 
----
### Get

Access existing accounts data.

| Column 1       | Column 2     | 
| :------------- | :----------: | 
| _id |  Unique account ID, auto-generated  | 
| name   | Name of account holder |
| balance   | Amount of money held in the account |

`GET /accounts`

This endpoint sends a JSON of all accounts within the accounts collection. No authentication currently required.

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

`GET /accounts/:id`

This endpoint sends a JSON of a specific account accessed by the document ID.

        {
    "success": true,
    "message": "It worked",
    "status": 200,
    "data": {
        "_id": "60b79a22d1b03155ae920111",
        "name": "imy",
        "balance": 2802
    }
}

### POST

| Column 1       | Column 2     | 
| :------------- | :----------: | 
| _id |  Unique account ID, auto-generated  | 
| name   | Name of account holder |
| balance   | Amount of money held in the account |


`POST /accounts`

This endpoint allows you to add a new account to the bank collection.





* **URL**

  <_The URL Structure (path only, no root url)_>

* **Method:**
  
  <_The request type_>

  `GET` | `POST` | `DELETE` | `PUT`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   `id=[integer]`

   **Optional:**
 
   `photo_id=[alphanumeric]`

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 
