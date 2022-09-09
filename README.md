# Node Express Sequilize
This is a simple boilerplate for creating APIs with NodeJs express framework.
Here API access token encapsulated/encrypted with JWT token based system.
 - Sample API ready for login 
 - API middlewares for normal user and Admin user
 - ES6 import/export available to the user with spread operators
 - Deploy your app with cluster (cluster implementation is integrated)
 - jest test configured
 - add test case for mock database model/functions to test controllers functions
## Getting Started
You can download this repo or clone using below command. (folder-name will be project folder in which you want to start your project).
```
git clone https://github.com/sainani8897/node-sequilze-test <folder-name>
```
### Project Setup
 - cd folder-name
 - now copy **.env.local** file to **.env** file

### Installing
```
> npm install or yarn install  (this will install all dependent libraries)
```



### Migration and Seeders run
After creating database and updating .env file run below commands
```
> npm run db:migrate
> npm run db:seed:all
```
Migration will create table users and seed some default users
* **users** - this is normal user table with some required fields like (firstName, lastName, email, password, and isAdmin)
Seeders will create one new client entry in application and 2 users entry one admin and one normal user.

`npm start` to run your project 
>Everythig is setup and you are good to go now. Happy Coding :)



# Other Information about setup/commands
## Useful terminal commands
```
> npm run model:generate User --attributes firstName:string,lastName:string,email:string
> npm run db:migrate
> npm run db:migrate:undo
> npm run db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
> npm run seed:generate demo-user
```

## Git/Bitbucket Setup
```
> rm -rf .git  (Remove git folder so you can use your own git/bitbucket)
```
## Middlewares
```
> ApiAuth this will check user access token that we have return in login response.
> AdminAuth this will check admin auth and it's access.
```

## Routing files
> Currently we have added 3 routing files 
```
> pub.js   # public routing access everyone can access this APIs
> api.js   # only logged in user/ with vaild token user can access this routes
> admin.js # only admin can access with valid token
```
## Example APIs
>here attached link of postman collection you can download and check in local
>https://www.getpostman.com/collections/4d415740f37a864d9afc

### Login
```
> POST : http:localhost:8000/pub/login   
> Payload: email, password
> Response : 
{
    "code": 200,
    "data": {
        "user": {
            "id": 1,
            "firstName": "Admin",
            "lastName": "User",
            "email": "admin@gmail.com",
            "profilePic": null,
            "isAdmin": true,
            "verifyToken": null,
            "isVerified": true,
            "createdAt": "2019-05-27T07:15:12.000Z",
            "updatedAt": "2019-05-27T07:15:12.000Z"
        },
        "token": "secret token"
    },
    "success": true
}
```
### Get user
```
> GET : http:localhost:8000/api/me   
> Headers : 
        x-token (access token)
> Response : 
{
    "code": 200,
    "data": {
        "user": {
            "id": 1,
            "firstName": "Admin",
            "lastName": "User",
            "email": "admin@gmail.com",
            "profilePic": null,
            "isVerified": true,
            "createdAt": "2019-05-27T07:15:12.000Z",
            "updatedAt": "2019-05-27T07:15:12.000Z"
        }
    },
    "success": true
}
```
### Success Response
```
{
    "success": true,
    "code": 200,
    "data": "object or array"
}
```
### Error Response
```
{
    "success": false,
    "code": 500,
    "errorMessage": "Incorrect Email Id/Password",
    "error": {},
    "data": null
}
```


### Get Vechile
```
> GET : http://localhost:3000/api/vechile   
> Headers : 
        x-token (access token)
> Query:
       vechileNo: NUMXXX

> Response : 
{
    "code": 200,
    "data": {
        "vechiles": {
            "count": 8,
            "rows": [
                {
                    "id": 8,
                    "vechileNo": "123AP1211",
                    "currentLocation": "12 12312 12312 ",
                    "currentLatitude": "123123",
                    "currentLongitude": "1231231",
                    "createdAt": "2022-09-09T11:53:06.000Z",
                    "updatedAt": "2022-09-09T11:53:06.000Z",
                    "history": [
                        {
                            "id": 11,
                            "location": "12 12312 12312 ",
                            "latitude": "123123",
                            "logitude": "1231231",
                            "vechileId": 8,
                            "createdAt": "2022-09-09T11:53:06.000Z",
                            "updatedAt": "2022-09-09T11:53:06.000Z",
                            "VechileId": 8
                        }
                    ]
                },
                
            ]
        }
    },
    "success": true
}
```
### Create/Register Vechile
```
> POST : http://localhost:3000/api/vechile   
> Headers : 
        x-token (access token)
> BODY:
       
    "vechile_no":"123AP1211",
    "location":"12 12312 12312 ",
    "latitude":"123123",
    "longitude":"1231231",
    "id":"1",
    "email":"user@gmail.com",
    "password":"Admin@123"

> Response : 
{
    "code": 200,
    "data": {
        "vechile": {
            "id": 8,
            "vechileNo": "123AP1211",
            "currentLocation": "12 12312 12312 ",
            "currentLatitude": "123123",
            "currentLongitude": "1231231",
            "updatedAt": "2022-09-09T11:53:06.896Z",
            "createdAt": "2022-09-09T11:53:06.896Z"
        }
    },
    "success": true
}
```
