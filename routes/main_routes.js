'use strict';
let express = require('express');
let fs = require('fs');
let db = require('../models');
let main_routes = require('express').Router();




/* main_routes.post('/renter', ...) is the function that is called when
   someone submits the renter form.  Note that there is no error checking
   and there is no interaction with the database.
*/
main_routes.post('/renter', function(req,res)
{ 
	 db.shoeInventory.findOne({
      where: {
        department_name: req.body.department_name,
        shoe_color: req.body.shoe_color,
        shoe_name: req.body.brand
      }
    })

    .then(function(shoeInventory) {
      	res.render('iShoeFormSuccess', 
		{ string: "Your order has been processed.  Thank you for renting from us.",
		  layout: 'iShoeSuccess',
		  title:"Renter Feedback"});
    
	
	console.log("Someone just submitted a renter form.");
	}

).
	catch (function(error)
	{

			let dataArray = [];
			let i = 0;
			for(i = 0; i< error.errors.length; ++i)
		{
			dataArray.push(error.errors[i].message);
		}

		res.render('iShoeFormErr', { array: dataArray});
	}
	);
}); // End of the catch clause


/* main_routes.post('/provider', ...) is the function that is called when
   someone submits the provider form.  Note that there is no error checking
   and there is no interaction with the database.
*/
main_routes.post('/provider', function(req,res)

{
    console.log(req.body);
    db.shoeInventory.create(


        {
            provider_name: req.body.name,
            department_name: req.body.department,
            shoe_name: req.body.brand,
            shoe_color: req.body.color,
            img_url: req.body.img_url,
            price: req.body.price,
            stock_quantity: req.body.stockQuantity

		})
	//End of the anonymous object passed to create()

     //End of db.shoeInventory.create

		.then(function(shoeInventory)
        {

            res.render('iShoeFormSuccess',
                { string: "Thank you for providing shoes for us to rent.",
                    layout: 'iShoeSuccess',
                    title: "Provider Feedback"});
        } // End of the function definition for the then

    ). // End of the then clause

    catch (function(error)
        {
            let dataArray = [];
            let i = 0;
            for(i = 0; i< error.errors.length; ++i)
            {
                dataArray.push(error.errors[i].message);
            }

            res.render('iShoeFormErr', { array: dataArray});

        }

    ); // End of the catch clause

});

/* main_routes.get('/provider', ...) is the function that is called when
   someone clicks to go to the provider form webpage.  Note that there is
   no error checking and there is no interaction with the database.
*/
main_routes.get('/providers.html', function(req,res)
	{
		res.writeHead(200, {"Content-Type" : "text/html"});
	    fs.createReadStream("./public/provider.html").pipe(res);

	} // End of function(req,res) definition

); // End of the main_routes.get() function call

/* main_routes.get('/renter', ...) is the function that is called when
   someone clicks to go to the renter form webpage.  Note that there is
   no error checking and there is no interaction with the database.
*/
main_routes.get('/renters.html', function(req,res)
{
	res.writeHead(200, {"Content-Type" : "text/html"});
    fs.createReadStream("./public/renter.html").pipe(res);

}
);

/* main_routes.get('/add', ...) was going to be the function that
   was called when the provider form was submitted.  This DOES interface
   to the database to create a new record.  The "then" function is called
   if the new record is inserted with no problems, and the catch method
   is called if there is a problem.  We could fuss with the object that
   is sent in the db.shoeInventory.create() function to cheat and still
   use this code to illustrate validating input.
*/
main_routes.get('/add', function(req,res)
	{
		db.shoeInventory.create(
		{
	      	provider_name: "Joe Schmoe",
	      	department_name: "Men's Department",
	      	shoe_name: "Herbert",
	      	shoe_color: "black",
	      	img_url: "iNeed2.charlesroberts.org",
	      	price: 255.99,
	      	stock_quantity: 300


		} // End of the anonymous object passed to create()

	). // End of db.shoeInventory.create

	then(function(shoeInventory)
	{
		console.log(shoeInventory);
		res.redirect('/');
	} // End of the function definition for the then		

	). // End of the then clause

	catch (function(error)
	{
		let dataArray = [];
		let i = 0;
		for(i = 0; i< error.errors.length; ++i)
		{
			dataArray.push(error.errors[i].message);
		}

		res.render('iShoeFormErr', { array: dataArray});
		
	}

	); // End of the catch clause

	} // End of the function definition of the function pass to main_routes.get()

); // End of the main_routes.get function call

module.exports = main_routes;
