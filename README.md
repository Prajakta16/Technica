# TECHNICA: LAW:GINGS


This project was created for the Technica 2020 Hackathon!!
The project can be accessed a thttps://stormy-meadow-83551.herokuapp.com.
The objective of the project is to make a tool for collaboration between pro bono lawyers, student lawyers as well as tenants/houseless who have been facing housing inequality. We provide features to enable tenants to chat or video call with a specific lawyer belonging to a specific category. Tenants also have a discussion forum where they can discuss common topics related to housing inequality and potential solutions. 

### HOW TO USE

The program can be run using the JAR file within the res/ folder in the zipped file.
1. Install node and npm
2. Download the code
3. Run npm start through command prompt
4. The program should run successfully

###PROBLEM STATEMENT
Create a solution to support low income or displaced families on finding and securing housing or other vital resources

### PROPOSED SOLUTION
We developed a web application that would allow the displaced or unlawfully evicted people by either connecting them to the lawyers, to see if they have been unlawfully evicted during this time and what are the steps that they can take to solve it. We have a search function that given name or location, parses through the database and displays the lawyers that match the criteria so that the user can use the links available to find their website and contact details. It has a chatting facility where once the user logins in he/she can chat with other available users so that fellow tenants can also talk about similar issues they might have faced and guide them through how they solved it. 

### FUTURE PROSPECTS

Since this project was developed as part of a Hackathon, the current application is just the version 1 of our idea. We plan to extend the project by creating a 
backend using MongoDb=B to store chats of users with each other. We also plan to integrate a video conferencing tool that will enable 
the users to hold meetings from within the flag. On the general discussion platform that we have, we will add more features such as ability to like/comment on a post.
The post can also take form of a donation for a displaced family wherein the other members pitch in some funds to help them out of the situation.
We will also create a UI interface for the Lawyer where they can provide their availability, fees or pro bono, as well as their speciality.
These are all the features our application will be extended into including general UI enhancements. 

## ARCHITECTURE AND TECHNOLOGY STACK
Code base: HTML, CSS, Bootstrap, Javascript, Handlebars
Host environment: Heroku https://stormy-meadow-83551.herokuapp.com/


## Referred datasets for filling up sample data
1. API service to fetch potential lawyers by text search http://avvo.github.io/api-doc/#avvo-api
https://www.kaggle.com/PromptCloudHQ/doctor-and-lawyer-profiles-on-avvocom-

2. Quality of life in a particular area:
https://api.placeilive.com/v1/

3. Reviews of the renter
https://www.programmableweb.com/api/honest-renter

4. To track homeless population:
https://www.kaggle.com/rezag7/homeless-dataset

5. Similar applications:
https://www.lowincomehousing.us/art/about



##Referred resources for Zoom Integration
https://marketplace.zoom.us/docs/sdk/native-sdks/developer-accounts
https://marketplace.zoom.us/docs/guides/build
https://devforum.zoom.us/t/zoom-meeting-api-create-instant-meeting-with-ability-to-join-the-meeting-before-host/9507
https://marketplace.zoom.us/docs/guides/build/chatbot-app
https://support.zoom.us/hc/en-us/articles/115005390806-Workplace-Zoom-Bot
https://marketplace.zoom.us/apps/R3Q-CQwqQvu2TZl5DLBlow
https://marketplace.zoom.us/apps/jGaV-kRrT3igAYnn-J5v2g
