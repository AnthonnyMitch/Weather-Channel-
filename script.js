$(document).ready(function () {


    $("weather-btn").on("click", function (event) {
        event.preventDefault();

        var cityInput = $("weather-input").val().trim();
        console.log(cityInput);
        currentWeather(citInput);
        forecast(cityInput);
        uvIndex(cityInput);

    })

    function currentWeather(city) {
        $.ajax({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8b72ac603491c525d3b358503d0dc22d&units=imperial"


        }).then(function (data){
console.log(data);


)}
function forecast(city) {
        $.ajax({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8b72ac603491c525d3b358503d0dc22d&units=imperial"


        }).then(function (data){
console.log(data);


)}
function uvIndex(city) {
    $.ajax({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8b72ac603491c525d3b358503d0dc22d&units=imperial"


    }).then(function (data){
console.log(data);

        }


























})