$(document).ready(function () {

    var apiKey ="94dd61b974f3c56fae9c3b1562808092";
    var citySearchURL= "https://developers.zomato.com/api/v2.1/cities?";
    var city = '';




$("#searchBtn").on("click", function() {


$.ajax({
    url: citySearchURL,
    method: "GET",
})




})

$("#getMessage").on("click", function() {
    var valueSearchBox = $('#getText').val()
    if (valueSearchBox === "") {
     return;
    }
    select();


})});
