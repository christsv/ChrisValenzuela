
$.ajax({
  //this needs to be https so that is requesting from a secure site
  // since christsv is https it cant request from an insecure site http so i changed it to https 
  // this is called mixed content blocked
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

// This is for the scroll animation

$(".nav-link").click(function(){
  var text = $(this).text();
  var jumpText = text.toLowerCase().trim();
  console.log(jumpText);
  $('html,body').animate({
    scrollTop: $("[name = " + jumpText + "]").offset().top},
    'slow');
});

