const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all('/sayfahepsi',function (req,res) {
  res.send('Sayfa Hepsi!');
});

app.get('/index',function (req,res) {
  res.sendFile('/public/index.html', {root: __dirname});
});

app.get('/ab?cd',function (req,res) {
  res.send('Sayfa ab?cd!');
});

app.get('/de+fg',function (req,res) {
  res.send('Sayfa de+fg!');
});

app.get('/hi*jk',function (req,res) {
  res.send('Sayfa hi*jk!');
});

app.get('/sayfa/:degisken1/parametre/:degisken2', function(req, res) {
  res.send(req.params);
});

app.use(express.static('public'));

app.use('/js',express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})