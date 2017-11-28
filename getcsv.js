var csv = require('fast-csv');
var dataArr = [];
var i=0;
csv.fromPath("./list.csv", {headers: false})
.on("data", data => {
  console.log(data);
  dataArr[i]=data;
  i++;
})
.on("end", () => {
  console.log(dataArr.length);
  // > 4187
});

console.log(dataArr);