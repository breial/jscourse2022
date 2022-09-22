var express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var router = express.Router();

/* GET newuser page. */
router.get('/', function(req, res, next) {
  res.render('newuser', { 
    title: 'Ny bruker',
    message: '',
   });
});

/* Register new user. */
router.post('/', function(req, res, next) {

  const navn = req.body.navn;
  const brukernavn = req.body.brukernavn;
  const passord_plain = req.body.passord;
  const passord = bcrypt.hashSync(passord_plain, saltRounds);
  const epost = req.body.epost;
  const dato = req.body.dato;

  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb://kurs:kurs123@noderia.com:31017/kurs?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });

  client.connect(err => {
      console.log("Connected successfully to server");
      const coll = client.db("kurs").collection("kursbrukere");
      // Insert a single document
      coll.insertOne({ "navn": navn, "brukernavn": brukernavn, "passord": passord, "epost": epost, "dato": dato }, function(err, r) {
          console.log(navn,brukernavn,passord,epost,dato);
          client.close();
      });

  });

  res.render('newuser', {
      title: 'Ny bruker',
      message: '${navn} opprettet'

  });
}); // end router.post


module.exports = router;
