const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var port = process.env.PORT || 3000;
const api = require('./routes/api')
const app = express();
const morgan = require('morgan');
var methodOverride = require('method-override');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/api', api);


app.get('/', function(req, res) {
	res.send('SOBAKA');
});


app.listen(port, function() {
	console.log('Server is running on localhost:' + port);
})