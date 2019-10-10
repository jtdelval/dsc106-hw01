// code from https://www.highcharts.com/demo/pie-basic

Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'UCSD 2018 Applicants by Gender'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Genders',
    colorByPoint: true,
    data: [{
      name: 'Female',
      y: 53.385562966,
      sliced: true,
      selected: true
    }, {
      name: 'Male',
      y: 46.614437033
    }]
  }]
});
