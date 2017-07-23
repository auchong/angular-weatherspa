//SERVICES
weatherApp.service('cityService', function(){

    this.city = 'New York, NY';

});

weatherApp.service('weatherService', ['$resource', function($resource){

    this.getWeather = function(city, days) {
        var weatherAPI = $resource('https://api.openweathermap.org/data/2.5/forecast/daily', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});

        return weatherAPI.get({q: city, cnt: days, appid: '1e91875ded79629d930964ad1b49bcfe'})

    };

}]);
