var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.post('/', function(req, res, next) {
  request
      .post("https://www.google.com/recaptcha/api/siteverify", function(error, response, body) {
        console.log("response recaptcha");
        console.log(error);
        console.log(response);
        console.log(body);
      }).form({
          secret: "6LeUSxoUAAAAAOVofDp9XBxST9HeBu3Mt1I3FyvY",
          response: req.param("g-recaptcha-response"),
          remoteip: req.connection.remoteAddress
      });
  res.send('respond with a resource');
});

module.exports = router;
