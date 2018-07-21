function check() {

    // setting the p tag to NULL

    document.getElementById("result").innerHTML = "";

    var symbol = document.getElementById("symbol").value;

    const BASE_URL = 'https://api.iextrading.com/1.0/stock/market/batch';

    let url = `${BASE_URL}?types=quote&symbols=${symbol}`;

   fetch(url).then(response => response.json()).then(json => {
     let data = json[symbol];

     if (typeof(data) === 'undefined') {
       let result = `${symbol} was not found!`;
       document.getElementById("result").innerHTML = result;
     };

      tr = $('<tr/>');
      tr.append("<td>" + data.quote.companyName + "</td>");
      tr.append("<td>" + data.quote.primaryExchange + "</td>");
      tr.append("<td>" + data.quote.sector + "</td>");
      tr.append("<td>" + data.quote.latestPrice + "</td>");
      $('table').append(tr);
     
   });
}
