const express = require('express')

const tokenController = require('./controllers/tokenController');
const fillTextFieldController = require('./controllers/fillTextFieldController');

const app = express()

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {patientId: ''});
});

app.use('/startSession', tokenController);

app.use('/create-record/get', fillTextFieldController);


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})