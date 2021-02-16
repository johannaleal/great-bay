// DEPENDENCIES
// MySQL
// Inquirer
const inquirer = require('inquirer');
const mysql = require('mysql');

// STARTING DATA

// FUNCTIONS
    // 
    // "POST AN ITEM"
    // "BID ON AN ITEM"
    // EXIT


// sign up function

// login function
    // prompt user for a username and password upon loading up the app. 

// Prompt the USER TO EITHER "POST AN ITEM" OR "BID ON AN ITEM"

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

// Display menu
    // View user auctions
    // Add new auction
    // Modify auction
    // Close bidding on auction

// Function - Display user's previously auctions

// Function - add new auction

// Function - modify previous auction

// Fucntion - close bidding on an auction

// Function - view all of the auctions of which they are the leading bidder

// Create a third option on the main screen which allows administrators to modify the database as they see fit.

// Create visually appealing tables. This means making dynamic console code and it is a lot harder than it might seem at first so do not think this one is so simple.

// Create a search function that allows users to look through the database of available auctions to find those that share the specified keyword or username.

// Get creative! There are a lot of addons to this app which you could create so feel free to work with your group to come up with something not listed above!

// USER INTERACTIONS
// Prompt the user to get answers to questions.
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
            break;
        case "Bid on an item":
            break;
        case "Exit":
            
            break;

    };
  })
  // If there is an error, write an error to the console.
  .catch(err => {
    console.error(err);
  })
