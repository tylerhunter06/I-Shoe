var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    port:8889,
    user:"root",
    password:"root",
    database:"exclusiveSneaksDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  afterConnection();
});

function afterConnection() {
  con.query("SELECT * FROM shoeinventory", function(err, res) {
    if (err) throw err;
    //console.log(res);

	console.log(res[2].provider_name);
	console.log(res[3].department_name); 
	console.log(res[4].shoe_name); 
	console.log(res[5].shoe_color); 
	console.log(res[6].image_ur);
	console.log(res[7].price); 
	console.log(res[8].stock_quantity);  

    con.end();
  });
}
