var express = require('express');
var router = express.Router();
var weather = require('openweather-apis');
 
weather.setLang('en');
// English - en, Russian - ru, Italian - it, Spanish - es (or sp),
// Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
// Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
// Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
// Turkish - tr, Croatian - hr, Catalan - ca


// set city by name
weather.setCity('Fairplay');
// or set the coordinates (latitude,longitude)
weather.setCoordinate(50.0467656, 20.0048731);
// or set city by ID (recommended by OpenWeatherMap)
weather.setCityId(4367872);

// or set zip code
weather.setZipCode(33615);

// 'metric'  'internal'  'imperial'
weather.setUnits('imperial');

// check http://openweathermap.org/appid#get for get the APPID
weather.setAPPID('b413f9c129c693c029efc0195b97bb24');

router.get('/', function(req, res,){
  res.render('index.hbs')
})

router.get('/tracker', function(req, res){
  res.render('tracker.hbs')
})



/* GET home page. */
router.get('/tracker/:zipcode', function(req, res, next) {
  // or set zip code
  weather.setZipCode(req.params.zipcode);
  // get all the JSON file returned from server (rich of info)
  weather.getAllWeather(function(err, JSONObj){
      console.log(JSONObj);
      console.log(JSONObj.weather[0].main)
      res.render('weather.hbs', {JSONObj:JSONObj});
  });
  
});


module.exports = router;
