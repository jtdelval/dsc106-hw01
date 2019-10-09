function getMaleApplied(data){
  var outputArray = [];
  for (var i=0; i<data.length; i++){
    outputArray.push(data[i].fulltime_men_applied);
  }
  return outputArray;
}

var dataset = d3.json("admissions.json").then(function(data){ console.log(data)});
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var jj = d3.json('admissions.json');
var fMA = jj.then(function(data) { return getMaleApplied(data);})

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;
var barWidth = svgWidth / 14
var svg = d3.select('svg')
 .attr("width", svgWidth)
 .attr("height", svgHeight);

var barChart = svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", function(d) {
    return svgHeight - d
  })
  .attr("height", function(d) {
    return d;
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", function(d, i) {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });
