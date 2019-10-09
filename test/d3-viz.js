function getMaleApplied(data){
  var outputArray = [];
  for (var i=0; i<data.length; i++){
    outputArray.push(data[i].fulltime_men_applied);
  }
  return outputArray;
}

var jj = d3.json('admissions.json');
var fMA = jj.then(function(data) { return getMaleApplied(data);})

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;
var barWidth = svgWidth / 14
var svg = d3.select('svg')
 .attr("width", svgWidth)
 .attr("height", svgHeight)
 .attr("class", "bar-chart");
