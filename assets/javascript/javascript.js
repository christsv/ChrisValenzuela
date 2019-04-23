

fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&jsonp=?')
  .then(res => res.json())
  .then(post => console.log(post))
