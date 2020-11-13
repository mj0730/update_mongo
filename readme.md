# Update MongoDB

This tool updates mongoDB with information from csv files by reading the csv and converting it to json to send to the database.

## Setup

Install the dependencies ([mongoose](https://www.npmjs.com/package/mongoose) and [csv-parser](https://www.npmjs.com/package/csv-parser))
`npm i`

Create `secret.js` file in the root directory, and add the connection string for the database.

Copy the csv files being used to input data into the `/csv` directory. JSON output will be the same file name as the csv file, saved in the `/json` directory.

## Use

`npm run-all`: Creates new json files from the csv inputs, then updates the database.  
`npm run update`: Updates the database with the current json data.  
`npm run json`: Creates new json files from the csv inputs only.
