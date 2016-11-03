console.log("firebase.js ready to roll!")

// connect to the firebase db (database)

  var config = {
    apiKey: "AIzaSyAzQ1O-ywhUcGmLsJNh12BUhEdCz1GOoec",
    databaseURL: "https://sport-venues.firebaseio.com"
  };
  firebase.initializeApp(config);

// This is the whole DB
var database = firebase.database();

// we want to grab only the "people" part of the database
var peopleData = database.ref('locations');

// create a list of people
var peopleList = []; // empty list, for now

// load all the children of "people"
// keep listening to new children
peopleData.on('child_added', function(childData){
    // run this instruction for each child
//    console.table(childData.val() );
    var person = childData.val(); // extract the data about the person
    peopleList.push( person ); // add the person to the people list
})