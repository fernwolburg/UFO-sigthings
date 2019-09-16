// from data.js
var tableData = data;

// declare variables
var filterbutton = d3.select("#filter-btn");
var tbody = d3.select("tbody");
var resetbutton = d3.select("#reset-btn");
var columns = ["date", "city", "state", "country", "shape", "duration", "comments"]
var date_time = d3.select("#datetime");


// populate table with tableData
var tabulate = (data) => data.forEach(function(info){
    var row = tbody.append("tr");

    Object.entries(info).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
});
tabulate(tableData);

// filter button
filterbutton.on("click", function () {
    d3.event.preventDefault();

    var inputValue = date_time.property("value");
    var filteredData = tableData.filter(date => date.datetime == inputValue);

    console.log(filteredData)
    
    tbody.html("");
    tabulate(filteredData);
});

// reset button
resetbutton.on("click", function () {
  tbody.html("");
  tabulate(tableData);
});


