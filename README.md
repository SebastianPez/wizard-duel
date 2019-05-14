# Wizard Duels
A player vs player, 90's style, pixel art game for the Harry Potter fans out there! SAP built with React, node.js, express, socket.io, and styled with css.

Contributors: @ronan-f, @SebastianPez



### **Shout-out**
-----------------
We started out with a boilerplate from @garrettgsb's [react-express-boilerplate](https://github.com/garrettgsb/react-express-boilerplate), which is a bootleg of @NimaBoscarino's [React Rails Boilerplate](https://github.com/NimaBoscarino/react-rails-boilerplate). We at Wizards Duel greatly appreciate their jump off for this project. 🙌


### Running Wizards Duels
-------------------------
You need **Three** terminals for this.
1. In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.
2. In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.
3. In the last terminal, `cd` into `socket-server`. Run `npm install` or `yarn` to install the dependencies, then `npm start` to launch the socket server.

In the browser, you will find dancing Dumbledore awaiting your name for entrance to a Duel.
If this doesn't work, please message me (@kcdporter).


### A quick change for local gameplay
--------------
Wizard duels is only hosted locally, which means this repo will need to be cloned and downloaded by one player. This player will have to open up `react-front-end/src/Game.js` and replace the `this.socket = socketIOClient('http://localhost:5000/')` (on line 34) with `this.socket = socketIOClient('http://<b>Your Local Ip </b>:5000/');`. This allows for a second user to connect from your wifi to the gameplay! 🤗

Please note that this game is a fan made project, and not associated with Warner Bros, and is a final project created at Lighthouse Labs in 2 weeks. There are definitly bugs, and we will fix them in time.


### Second Player Connection
-------
Your friend (or foe, who are we to judge?) will have to type `http://<b>Your Local Ip </b>:3000` into their search engine in order to connect to the duel.


### Will there be more?
-----
There are plans in the works to add more characters and spells. If you have someone you want to see, shoot me a message 😊
