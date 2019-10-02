var mysql = require("mysql");
var inquirer = require("inquirer");
var console_table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
    start();
});

function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "what would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
        }
        ])

        .then(function(answer) {
            if (answer.selection === "View Products for Sale") {
                viewProducts();
                start();
            }
            else if (answer.selection === "View Low Inventory") {
                viewInventory();
                start();
            }
            else if (answer.selection === "Add to Inventory") {
                addInventory();
                
            }
            else if (answer.selection === "Add New Product") {
                addProduct();
            }
            else {
                connection.end();
            }
        });  
    });
}


function viewProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
        console.log("\n\n");
    });
}

function viewInventory() {
connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err,res){
    if (err) throw err;
    console.table(res);
    console.log("\n\n");
    
});
}

function addInventory() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;

inquirer.prompt([
    {
        name: "product",
        type: "list",
        choices: function() {
            var itemArray = [];
            for (var i = 0; i < results.length; i++) {
                itemArray.push(results[i].product_name);
            }
            return itemArray;
        },
        message: "Which item do you want to stock?"
    },
    {
        name: "number",
        type: "input",
        message: "How many do you want to stock?"
    }
])
.then(function(answer) {
    var chosenItem;
    console.log(updateNumber);
    for(var i = 0; i < results.length; i++) {
        if (results[i].product_name === answer.product) {
            chosenItem = results[i];
        }
    }
    connection.query("UPDATE products SET ? WHERE ?", [
        {
            stock_quantity: chosenItem.stock_quantity + parseInt(answer.number)
        },
        {
            itemID: chosenItem.itemID
        }
    ], function (err) {
        if (err)  throw err;
        console.log("Stock Added.\n\n");
        start();
    })
})
    });
}

function addProduct() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;

inquirer.prompt([
    {
        name: "addProduct",
        type: "input",
        message: "Which product do you want to add?"
    },
    {
        name: "number",
        type: "input",
        message: "How many do you want to add?"
    },
    {
        name: "price",
        type: "input",
        message: "How much will it cost?",
    },
    {
        name: "department",
        type: "list",
        choices: function() {
            var itemArray = [];
            for (var i = 0; i < results.length; i++) {
                itemArray.push(results[i].department_name);
            }
            return itemArray;
        },
        message: "Which department will it go?",
    }
])
.then(function(answer) {
    connection.query("UPDATE products SET ? WHERE ?", [
        {
            product_name: answer.addProduct,
            stock_quantity: answer.number,
            price: answer.price,
            department_name: answer.department,
        },
        {
            itemID: answer.id
        }
    ],
     function (err) {
        if (err)  throw err;
        console.log("Product Added.\n\n");
        start();
    });
});
    });
}