# Friend-Finder

# Friend Finder - Node and Express Servers

### Compatibility based application

* The application will take in results from users' surveys then compare their results against all other users who have completed it. The application will then display the name and picture of the user with the best match overall.

* The survey has 10 questions, answers to the survey questions are on a scale of 1-5 based on how much the user agrees or disagrees.


## Technical details
* The application uses Express to handle routing 
* The server.js file uses the npm packages: express, body-parser, path.
* Compatibility will be determined based on the following.

	* Each user's results is converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
	* Then will compare the difference between the user's scores against other users' scores, question by question. Then will add up the differences to calculate the `totalDifference`.
		
	* The person with the closest match will be the one with the "least" amount of difference.

* Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up. 

* The result will display both the name and picture of the closest match. 

## This is a Link to the App on heroku: [Friend Finder App At Heroku](https://friend-finder-express-app.herokuapp.com/)

## Below Are some screen shots and a link to a video of the working app:

![Friend Finder-1](./images/friend1.png)
![Friend Finder-1](./images/friend2.png)
![Friend Finder-1](./images/friend3.png)
![Friend Finder-1](./images/friend4.png)
![Friend Finder-1](./images/friend5.png)
![Friend Finder-1](./images/friend6.png)



* Here is a link to The Video:
https://drive.google.com/file/d/0B6pTtcpgmhdjNGxCS3huZk1ENVk/view?usp=sharing

















