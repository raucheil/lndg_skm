var testFolder = './img/items/';
var fs = require('fs');
var glob = require("glob");
var csv = require('fast-csv');
// var glob_alt = require("glob");
// options is optional

// var list=['25.074.63.0065','25.071.63.0065','25.059.63.0065','25.057.99.0063','23.071.63.0065','25.072.99.0063','23.059.63.0065','23.022.00.0065','20.363.13.0065','20.361.13.0065','20.360.13.0065','26.234.13.0065','26.233.13.0065','27.200.13.0065','27.240.13.0065','20.362.13.0065','20.365.13.0065','22.820.13.0065','28.337.13.0065','28.339.13.0065','28.338.13.0065','28.340.13.0065','26.186.13.0065','26.212.13.0065','26.211.13.0065','73.107.03.0001','73.107.04.0001','73.107.05.0001','73.107.00.0001','73.108.02.0001','73.107.02.0001','73.107.01.0001','73.141.07.0001','73.141.08.0001','73.141.09.0001','73.142.07.0001','73.142.08.0001','73.142.09.0001','73.141.01.0001','73.141.03.0001','73.142.03.0001','73.141.05.0001','73.141.02.0001','73.141.04.0001','73.141.06.0001','73.142.06.0001','73.142.05.0001','73.142.04.0001','73.142.01.0001','73.142.02.0001','20.001.00.0065','20.002.00.0065','20.003.00.0065','20.004.00.0065','20.005.00.0065','20.006.00.0065','22.101.77.0065','22.127.77.0065','22.104.77.0065','22.126.77.0065','22.113.77.0065','25.741.63.0060','22.112.77.0065','22.136.77.0065','22.137.77.0065','22.138.77.0065','22.139.77.0065','22.140.77.0065','22.141.77.0065','22.151.77.0065','25.441.39.0069','22.161.77.0065','22.162.77.0065','22.163.77.0065','70.096.98.0062','26.100.63.0063','26.108.63.0063','26.202.63.0063','26.167.63.0063','26.106.63.0063','26.166.63.0068','26.137.63.0063','26.115.87.0068','26.136.87.0068','26.201.87.0063','50.203.00.0000','20.325.63.0063','25.742.63.0063','22.604.63.0068','22.607.63.0063','25.608.63.0068','22.610.01.0063','22.614.01.0063'];

function doit(files){
// console.log(pattern);
    var element={};
    var img={};
    var obj=[];
    var images=[];
    var err='';
    var codice='';
    for (var i=0; i<files.length; i++) {     
      if (i==0){
          codice=files[i];
          codice=codice.replace('./img/items/','');
          codice=codice.substring(0,14);
        //   console.log(codice);
      }
      img={"thumbnails":files[i]};
      images[i]=img;
  }
    
    element.id = codice;
    element.images = images;
    obj=element;
    console.log(obj);
  
 
//   console.log(obj);
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"] 
  // er is an error object or null.
//   console.log(files);
var jsonString = JSON.stringify(obj);
fs.stat('test_dir.json', function(err, stat) {
if(err == null) {
           fs.appendFile("./data/img.json", ","+jsonString+"\n", function(err) {
              if(err) {
                  return console.log(err);
              }
          });

    } else if(err.code == 'ENOENT') {
          fs.writeFile("./data/img.json", jsonString, function(err) {
              if(err) {
                  return console.log(err);
              }
          });
    } else {
        console.log('Some other error: ', err.code);
    }
});


} 

csv.fromPath("list.csv", {headers: false})
.on("data", data => {
  console.log(data);
  var pattern="./img/items/"+data+"*.jpg";
  var mg = new glob(pattern, function (er, files) {
        //  console.log(pattern);
        doit(files);
  });
})
.on("end", () => {

});

// console.log(csv);



// for (var k=0; k<list.length; k++) {
// // console.log(list[k]);
// var pattern="./img/items/gallery/"+list[k]+"*.jpg";
// var mg = new glob(pattern, function (er, files) {
//     //  console.log(pattern);
//     doit(files);
// });
// }







