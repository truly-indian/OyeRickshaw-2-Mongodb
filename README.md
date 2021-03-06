# OyeRickshaw-2

#     Brief Summary about the web app

      This is a todo list application web app built using nodejs, expressjs using mongodb as database.
      The user is able to perform all the CRUD functionalities easily.
      Apart from the CRUD functionalities the user is able to search a particular todo based on either title, Date, priority, state.
      The user is also able to prioritize the todos according to the schema itself.
      All the todos are listed based on the highest priority.

# 1.  Assumptions Made and System Requirements
 
 ###  a. NodeJs installed on system.
 ###  b. MongoDb atlas account.
 ###  c. Basic knowledge on MVC and writting apis.
 ###  d. Tools and Technologies Used
         ->Back-End: NodeJs ExpressJs MongoDb.
         ->Version Controll: git/github.
         ->Tool: Postman
 
 # 2. Approach To my Solution 
 
 ###  a. first initialize basic nodejs and express app.
 ###  b. Create necessary folders such as
          controllers, config, models and routes necessary for MVC approach.
 ###  c. Start making the Todo model.
 
<img src ="https://user-images.githubusercontent.com/42107838/102281211-87053400-3f54-11eb-8351-ce8d865e1640.png">

 ###  d. Follow the MVC approach and write down the apis (Refer repository for good understanding).


# 3.  How to Run on your PC

###   a. Download the zip file and unzip it or you shall clone it from the link.
###   b. Run npm install to install all the npm pacakages required.
###   c. After step 3(b) run the command node server.js or nodemon server.js.

# (NOTE..If it does not work) 4.  How to set up Database.

###   a. Follow 1(b) and make account on mongodb atlas get a connection DBURL.
###   b. Use ORM mongoose to get connected to the database.

#     Functionalities Implemented
       The user is now able to create/read/update/delete todos.
       The user is now able to search an existing todo by title/date/priority/state.
       The user is already able to prioritize the todos through schema.
       
#     Following is the GIF of the working of the web application as asked.
#     CREATE Functionality
<img src= "https://user-images.githubusercontent.com/42107838/102305078-19253080-3f85-11eb-9435-39898c1c3710.gif">
      
#     READ Functionality
<img src ="https://user-images.githubusercontent.com/42107838/102305265-85079900-3f85-11eb-9635-5150130b274a.gif">
      
#     UPDATE Functionality
<img src ="https://user-images.githubusercontent.com/42107838/102305386-eb8cb700-3f85-11eb-99ba-f863da6977e5.gif"> 
      
#      DELETE Functionality
<img src ="https://user-images.githubusercontent.com/42107838/102305681-a452f600-3f86-11eb-8006-386cc4026b6e.gif">
