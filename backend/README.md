# Backend API Documentation

## POST /users/register

### Description
This endpoint allows a new user to register by providing their first name, last name, email, and password. The password will be hashed before storing in the database.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname` (string, required): The user's first name (minimum 3 characters).
  - `lastname` (string, optional): The user's last name (minimum 3 characters).
- `email` (string, required): The user's email address (must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

### Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

##### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

##### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

##### Server Errors
- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "success": false,
    "message": "Error message here"
  }
  ```

## POST /users/login

### Description
This endpoint allows a user to log in by providing their email and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string, required): The user's email address (must be a valid email).
- `password` (string, required): The user's password (minimum 6 characters).

### Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

##### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

##### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message here",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

##### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

##### Server Errors
- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "success": false,
    "message": "Error message here"
  }
  ```
