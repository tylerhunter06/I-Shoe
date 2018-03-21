'use strict';
let express = require('express');
let fs = require('fs');
let db     = require('../models');
let main_routes = require('express').Router();



main_routes.get('/show', function(req,res)
	{
		console.log("Someone wants the test page.");

		db.shoeInventory.findAll({}).
		   then(function(shoeInventory)
		   {
			   	console.log(shoeInventory.length);
			   	res.redirect('/');
		   });
	}
);

main_routes.get('/add', function(req,res)
	{
		db.shoeInventory.create(
		{
	      	provider_name: "Joe Schmoe",
	      	department_name: "Men's Department",
	      	shoe_name: "Herbert",
	      	shoe_color: "Red",
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
		console.log("There was an error.");
		console.log(error);
		console.log(error.errors.length);
		let i = 0;
		for(i = 0; i< error.errors.length; ++i)
		{
			dataArray.push(error.errors[i].message);
		console.log(error.errors[i].message);
	}

	res.render('iShoeFormErr', { array: dataArray});


	
		
	}

	); // End of the catch clause

	} // End of the function definition of the function pass to main_routes.get()

); // End of the main_routes.get function call







module.exports = main_routes;