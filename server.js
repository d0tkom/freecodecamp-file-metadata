var express = require('express');
var app = express();
var path = process.cwd();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


app.get('/', function (req, res) {
  res.sendFile(path + '/index.html');
})

app.post('/', upload.single('name1'), function (req, res) {
    res.json({size: req.file.size});
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})