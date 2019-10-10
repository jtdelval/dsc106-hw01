//Code Sourced from Discussion Code
// Data of the line chart
var series = [
    {
       name: 'Male',
       data: [18147, 19838, 20566, 21590, 21725, 22332, 25097, 28758, 31992, 34618, 37009, 39779, 41583, 45636]
    },
    {
       name: 'Female',
       data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 35408, 38822, 41047, 44430, 46845, 52265]
    }
 ];

 var title = {
    text: 'Yearly Applicants to UCSD by Gender'
 };
 var xAxis = {
    categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
 };
 var yAxis = {
    title: {
       text: 'Applicants'
    },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
 };
 var tooltip = {
    valueSuffix: ' Applicants'
 }
 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

 // Tying all the configurations
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);
