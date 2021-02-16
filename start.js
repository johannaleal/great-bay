// DEPENDENCIES
// MySQL
// Inquirer
const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Trilogy2021',
    database: 'greatbay_db',
  });

// STARTING DATA

// FUNCTIONS
    // 
    // "POST AN ITEM"
    const add = () => {
        connection.query('', (err, res) => {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.table(res);
          connection.end();
        });
      };
    // "BID ON AN ITEM"
    // EXIT


// sign up function

// login function
    // prompt user for a username and password upon loading up the app. 

// If the user selects "POST AN ITEM" 
//  Prompt them for an assortment of information regarding the item
//  Add that information to the database so that others can bid on it

// Else if the user selects "BID ON AN ITEM" 
    // Show them a list of all available items
    // Prompt them to select what they would like to bid on. 
    // Console log them how much they would like to bid, and 
    // Compare their bid to the previous highest bid
        // If their bid is higher, 
            // Inform the user of their success 
            // Replace the previous bid with the new one.
        // Else if their bid is lower (or equal), 
        //  Inform the user of their failure
        //  Boot them back to the selection screen.

// Function - Display user's previously auctions

const saveItem = (item) => {

};

// Function - add new auction
const postItem = () => {
    inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter item descrition:',
        name: 'itemDescription'
    },
    {
        type: 'input',
        message: 'Enter item category:',
        name: 'itemCategory'
    }
  ])
  // Write a ReadMe file using the amswers to the prompts.
  .then(userResponse => {
        saveItem(userResponse);
  })
  // If there is an error, write an error to the console.
  .catch(err => {
    console.error(err);
  })
}

// Function - modify previous auction

// Fucntion - close bidding on an auction

// Function - view all of the auctions of which they are the leading bidder

// Create a third option on the main screen which allows administrators to modify the database as they see fit.

// Create a search function that allows users to look through the database of 
// available auctions to find those that share the specified keyword or username.

// USER INTERACTIONS
// Prompt the user for selection.
inquirer
  .prompt([
    {
        type: 'list',
        message: 'Which would you like to do?',
        name: 'action',
        choices: ["Post and item", "Bid on an item", "Exit"],
    }
  ])
  // Write a ReadMe file using the amswers to the prompts.
  .then(userResponse => {
    switch (userResponse.action) {
        case "Post and item":
            postItem();
            break;
        case "Bid on an item":
            break;
        case "Exit":
            connection.end();
            break;

    };
  })
  // If there is an error, write an error to the console.
  .catch(err => {
    console.error(err);
  })
