 -------------------------------------------------------------------
 This website is MERN Project.
 ------------------------------------------------------------------

1. Set Up

```js
//comment following commands
Npm i install
set up MongoDb env in your pc
```

2. create vercel.json file for configuring server

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js",
      "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }
  ]
}
```
 
 website name : DiagnoSage  (Diagnostic Center Management System )
 live link:  https://diagnosage.netlify.app/

* admin email : www@gmail.com
* admin password : 1234aA@

 ---------------------------------------------------------------------

* On entering the website there is a navbar banner promotion personalized recommendation customer review few footer. 

* On the navbar there is a Home Alltest and Dashboard banner, there is a button called Old Test where you can click on All Test to see everything. 

* All Tests have a Details button which, when clicked, will display that information in a dynamic route.

* There are two types of dashboard admin dashboard user dashboard. Admin dashboard contains Ad Banner All Banner Ad Test All Test All User Reservation Statistics page. 

* Admin can set banner dynamically in AdBanner via true false. 

* In add test admin can manually add test for test a user can book that test according to his/her own. 

* Admin will submit the test report PDF link in the reservation, a user can download it and see it. 

* The admin dashboard has a section called All Users. All user information can be viewed and downloaded there. 

* You can see and change the user profile on the user dashboard. There is Upcoming Test section where a user can see what they have booked in table form. 

* There is another test result where the user can view and download the test report if the admin submits it. An admin can make a user an admin if he wants.

-------------------------------------------------------------------------------
