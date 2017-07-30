var app = angular.module('myMod');

app.factory('apiService', function($http) {

  var finalData = [];
  return {
    apiInfo: apiInfo,
    returnResults: returnResults
  };

  function apiInfo(userInput) {
    var promise = $http({
      method: 'GET',
      url: "https://numbersapi.p.mashape.com/random/"+ userInput.type +"?fragment=true&json=true&max="+ userInput.numberMax +"&min="+ userInput.numberMin +"",
      headers: {
        "X-Mashape-Key": "U48I2sLYTDmshXtc0viuq6d3PZmzp1fbVusjsnWd2xOBrCQp7Y",
        "Accept": "text/plain"
      }
    }).then(function(response) {
      finalData = response.data;
      console.log(response);
      console.log(finalData.number);
      console.log(finalData.text);
      console.log(finalData.type);
      console.log(finalData.year);
    });
    return promise;
  };
  function returnResults() {
    return finalData;
  };
});


// unirest.get("https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true&max=20&min=10")
// .header("X-Mashape-Key", "U48I2sLYTDmshXtc0viuq6d3PZmzp1fbVusjsnWd2xOBrCQp7Y")
// .header("Accept", "text/plain")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
//
// unirest.get("https://trailapi-trailapi.p.mashape.com/?lat=34.1&limit=25&lon=-105.2&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Denver&q[country_cont]=Australia&q[state_cont]=California&radius=25")
// .header("X-Mashape-Key", "U48I2sLYTDmshXtc0viuq6d3PZmzp1fbVusjsnWd2xOBrCQp7Y")
// .header("Accept", "text/plain")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
