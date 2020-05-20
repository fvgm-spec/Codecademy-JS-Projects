var parseDate = d3.timeParse("%m/%d/%Y");
var urlCSV = "https://raw.githubusercontent.com/fvgm-spec/Codecademy-JS-Projects/master/prices.csv";
d3.csv(urlCSV)
    .row(function(d){ return {month: parseDate(d.month), price:Number(d.price.trim().slice(1))}; })
    .get(function(error,data){

console.log(data);

    });
