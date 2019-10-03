# Bamazon App

Bamazon is an app for customers to order product that they like and see what is in stock, while managers can order new product for what is low as well as create new product.

## Files

There are 3 separate files in this app, they are as follows:

1. bamazonDB Start.sql - This is the file to initialize the database in mysql, this contains all the starting stock of the store as well as all the names that the later files call to.

2. bamazonCustomer.js - This file is what the customer uses when they access the app. It shows them what products are in stock, with how many of each, and the price of every items.

3. bamazonManager.js - The last file contains all the logic for what managers will use. This file allows them to look at the stock, view what is currently low and order more stock, it also allows them to enter in new items into the database(This final functionality is currently not working).

## Operation

To use this app, on the terminal/bash enter in either node bamazonCustomer.js or bamazonManager.js if your a customer or a manager. For the customer it will show all the products then ask what they want to buy. Every item is in a list for the customer to look through with the arrow keys and they will hit enter to select. They will then be asked how many they want to which they type in their response. They will then be told how much it will cost or if there is not enough stock for the purchase.

For the manager side of the app. They will first be prompted to select view the products for sale, view low inventory, add to inventory, or add new item. View inventory will give a table of the items available. View low inventory will show all the items that are below the threshold of 5 items or less. Add to inventory will prompt them to enter in which stock to add as well as how much. Finally add new inventory will prompt them with all the questions needed to add the new item into the database.

## Links

Repository link: https://github.com/connander/bamazon

Youtube link of product in action: https://youtu.be/DarMRKxMlU8


## Technologies

The tech used in this app are:

1. mySQL
2. Inquirer
3. console_table

This app was developed, tested, and polished by Connor Stark
