var firstname = "Syed";
var lastname = "Hussain";
var fullname = firstname + lastname;
var skills = "HTML, CSS, JS";
var address = "Hyderabad";
var designation = "UI Developer";
var company = "SAP Labs";
var salary = 45000;
// Single line Comment
/**
Output:
 Syed Hussain living near Hyderabad and working has UI Developer for SAP Labs
*/

// var output = firstname + " " + lastname + " living near " + address + " and working has " + designation + " for " + company;

var output = `${firstname} ${lastname} living near ${address} and working has ${designation} for ${company} and earning around ${salary * 12} per year`

console.log(output);
