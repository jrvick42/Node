# Node
Base NodeJS setup with Express Web Framework and EJS templating engine.

Use this set of steps to setup a base Node JS server with npm.

*** This has been tested on Ubuntu 18.04+ only, however it should would for most Debian based distros. ***


Install Node JS and NPM
```
apt-get install nodejs npm
```

Make your site directory
```
mkdir nodesite
cd nodesite
```

Initialize and install express and othe rpackages that will be used by the server
```
npm init
```
You can just Enter through the questions that NPM will ask about your site. We will revisit the tests directive later in the PM2 and nodemon setup.
```
npm install --save express
npm install --save path
npm install --save ejs
npm install --save pm2
npm install --save nodemon
```

Create your server file
```
touch app.js
vim app.js
```

```javascript
const express = require('express')
const app = express()
const port = YourPort
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('./pages/home'))

app.listen(port, () => console.log('Listening on port ' + port.toString()))
```
Create your pages
```
mkdir views
mkdir views/pages
touch views/pages/home.ejs
vim views/pages/home.ejs
```

```html5
<!DOCTYPE html>
<html>
<head><title>Node Site</title></head>
<body><h1>Hello World!</h1></body>
</html>
```

To simply run the server with node you can now use `node app.js` to star the server.
To view the site visit localhost:YourPort in a browser.

*** PM2 and nodemon instructions will be added soon ***
