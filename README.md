# Capstone - Lunar Exchange
DigitalCrafts group capstone project featuring a cryptocurrency market place for registration and watching a portfolio.
## Members
* Zak O'Pry - Project Manager/Full Stack Developer
* Dustin Clisbee - Back End Developer
* Tim Davis - Front End/Design
* Matthew Valicoff - Front End/Design
## Links
* https://hopeful-mahavira-d5e74d.netlify.app/#/ - Live Site
* https://www.youtube.com/watch?v=7FWlimkSDMU - Video Walkthrough
* https://github.com/mattstr23/capstone-server - Server Repo
* https://medium.com/@MatthewValicoff/crypto-capstone-completion-e3f7b54edc71 - Medium Article
## Technologies
* React
* React Redux
* JavaScript
* React Router
* CSS
* Node.js
* ElephantSQL
* JSON Web Tokens
* Heroku
* Netlify
* Coin Gecko API 
## Rundown
Application can be opend through the live site link above.
### Landing
Application opens into a landing page with a login or register feature. These both have redirects to one another at the bottom. Site user can then register account and then login to begin using the site.
![Screen Shot 2021-11-22 at 2 26 08 PM](https://user-images.githubusercontent.com/88062670/142930405-95a72951-7f24-4c01-9887-f97ff4ee0ed6.png)
### Markets
Markets page has 250 cryptocurrencies pulled from Coin Gecho's API with useEffect and Redux storing the state, with updated info about each one. Users can search through the cryptos with the search bar. The name of each crypto is a link to a more detailed info page on each crypto using a seperate API fetch.
![Screen Shot 2021-11-22 at 2 32 04 PM](https://user-images.githubusercontent.com/88062670/142931157-59635104-d573-4991-bb94-3dac9b164c89.png)
Users can add cryptos to their portoflio clicking the add botton and then completeing the quantity form. Once done, it will be added to the users portolio.
### Portolio
With added cryptos on a users portfolio, the user will have the option to remove them. Using a node.js route, the onclick delete triggers removal.
![Screen Shot 2021-11-22 at 2 38 31 PM](https://user-images.githubusercontent.com/88062670/142931949-d2e4ffcc-0f20-4b3f-a900-cac9370b0d49.png)
### Accounts
Account info page displays user info that they assigned when they created an account. This information can be changed by clicking update, inputing into desired fields, and submitting the update. The users info will then be updated accordingly again using routes.
![Screen Shot 2021-11-22 at 2 42 12 PM](https://user-images.githubusercontent.com/88062670/142932347-9453e238-62ad-42b2-bb6b-f262370a42bf.png)
## Notes
* JS for the server side will be under that seperate repo https://github.com/mattstr23/capstone-server
* Most code will be inside the src folder of this repo, including components, styling, and the functions for the back end routes.
