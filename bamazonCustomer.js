var mysql = require("mysql");
var inquirer = require("inquirer");

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
    run();

});

function start() {
    console.log( "showing products available: \n");
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.table(res);
    });
}


function run() {
    connection.query("SELECT * FROM products", function(err,results){
        if (err) throw err;
inquirer.prompt([
    {
        type: "list",
        name:"productChoice",
        choices: function() {
            var choiceArray = [];
            for(var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
            }
            return choiceArray;
        },
        message: "What product do you want to buy?\n",
    },
    {
        name: "number",
        type: "input",
        message: "How many do you want to buy?"
    }

])
.then(function(answer) {
    var chosenItem;
    
    for(var i = 0; i < results.length; i++) {
        if(results[i].product_name === answer.productChoice) {
            chosenItem = results[i];
        }
    }
    var updatedStock = parseInt(chosenItem.stock_quantity) - parseInt(answer.number);

    if (chosenItem.stock_quantity > parseInt(answer.number)) {
        connection.query("UPDATE products SET ? WHERE ?", 
        [
            {
                stock_quantity: updatedStock
            },
            {
                itemID: chosenItem.itemID
            }
        ],
        function(err) {
            if (err) throw err;
            console.log("Product purchesed successfully.\n");
            console.log("Total: " + "$" + (chosenItem.price * parseInt(answer.number))+"\n");
            start();
        });
    }
    else {
        console.log("Insufficient Stock.\n")
        start();
    }
});
});
}
