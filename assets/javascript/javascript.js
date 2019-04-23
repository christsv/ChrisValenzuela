
$.ajax({
  url:"https://quotes.rest/qod.json",
  method: "GET"
})
.then(function(response){

  //var title = response.contents.quotes[0].title;
  var quote = response.contents.quotes[0].quote;
  var author = response.contents.quotes[0].author;

  var fullQuote = ' " ' + quote + ' " ';
  var fullAuthor = " - " + author;
  console.log(response.contents.quotes[0]);

  $("#quotes").append(fullQuote);
  $("#quotes").append(fullAuthor);

})