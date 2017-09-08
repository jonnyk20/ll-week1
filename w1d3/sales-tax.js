
function addTotal(company, taxRates){
  //
}


function calculateSalesTax(salesData, taxRates) {
  var industryTotal = {};
  // Implement your code here
  salesData.forEach(function(company) {
    // Seperate function
    var totalSales = company.sales.reduce(function(a, b){
      return a + b;
    });
    var totalTaxes = (totalSales * salesTaxRates[company.province]);
    if (!industryTotal[company.name]){
      industryTotal[company.name] = {
      totalSales: totalSales,
      totalTaxes: totalTaxes
      };
    } else {
      industryTotal[company.name].totalSales += totalSales;
      industryTotal[company.name].totalTaxes += totalTaxes;
    }
  });
  return industryTotal;
}


var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
