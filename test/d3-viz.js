function getMaleApplied(data){
  var outputArray = [];
  for (var i=0; i<data.length; i++){
    outputArray.push(data[i].fulltime_men_applied);
  }
  return outputArray;
}

var dataset = d3.json("admissions.json").then(function(data){ console.log(data)});
var data = [18147, 19838, 20566, 21590, 21725, 22332, 25097, 28758, 31992, 34618, 37009, 39779, 41583, 45636];
var jj = d3.json('admissions.json');
var fMA = jj.then(function(data) { return getMaleApplied(data);})



var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;
var barWidth = svgWidth / 14
var svg = d3.select('svg')
 .attr("width", svgWidth)
 .attr("height", svgHeight);

 var max = Math.max.apply(null, data)
 var dataset = data.map(function(x) { return (x / max) * svgHeight})

var barChart = svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", function(d) {
    return svgHeight - d;
  })
  .attr("height", function(d) {
    return d;
  })
  .attr("width", barWidth - barPadding)
  .attr("transform", function(d, i) {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  });
