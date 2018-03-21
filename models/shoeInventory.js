'use strict';

module.exports = function(sequelize, DataTypes)
{
	let shoeInventory = sequelize.define('shoeInventory' , 
	{
		item_id: 
		{
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},

		provider_name: 
		{
			type: DataTypes.STRING,
			allowNull: false,
			validate:
			{
				notIn: [['script']]
			}
		},

		department_name: 
		{
			type: DataTypes.STRING,
			allowNull: false,
			validate:
			{
				notIn: [['script']]
			}
		},

		shoe_name:  
		{
			type: DataTypes.STRING,
			allowNull: false,
			validate:
			{
				notIn: [['script']]
			}
		},

		shoe_color:  
		{
			type: DataTypes.STRING,
			allowNull: false,
			notIn: [['script']]
			
		},

		img_url:  
		{
			type: DataTypes.STRING,
			allowNull: false,
			validate:
			{
				notIn: [['script']],
				isUrl: true
			}
		},

		price: 
		{
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false
		},

		stock_quantity: 
		{
			type: DataTypes.INTEGER,
			allowNull: false
		}

	});

	return shoeInventory;
};