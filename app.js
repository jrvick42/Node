const express = require('express')
const app = express()
const path = require('path')
const port = 3001

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>
	res.render('./pages/home')
)

app.listen(port, () =>
	console.log('Server listening on port ' + port.toString())
)
