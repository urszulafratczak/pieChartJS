var ctx = document.getElementById("myChart").getContext("2d");
var ctx2 = document.getElementById("myChart2").getContext("2d");


//Take value to chart
var value1 = document.getElementById('v1').value;
var value2 = document.getElementById('v2').value;
var value3 = document.getElementById('v3').value;

//Add value
var data = [
    {
        value: value1,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Value 1"
    },
    {
        value: value2,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Value 2"
    },
    {
        value: value3,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Value 3"
    }
];

//create charts
var myPieChart = new Chart(ctx).Pie(data, {animateRotate : false});
var myDonutChart = new Chart(ctx2).Doughnut(data);

//change value of chart
function updateChart(id){
    var number;
    var value;
    switch(id){
        case "v1":
            value = document.getElementById('v1').value;
            number = 0;
            break;
        case "v2": 
            value = document.getElementById('v2').value;
            number = 1; 
            break;
        case "v3":
            value = document.getElementById('v3').value;
            number = 2; 
            break;
    }
    if(isNaN(value))
        value=0;
    
    myPieChart.segments[number].value = value;
    myPieChart.update();
    
    myDonutChart.segments[number].value = value;
    myDonutChart.update();

}
