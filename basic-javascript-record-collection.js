// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line

function updateRecords(id, prop, value) {
  function updateRecords(id, prop, value) {
  // Check for empty string FIRST
  if (prop === "tracks" && value !== "") {
   if(collection[id][prop]) {
    collection[id][prop].push(value);
   }
  
    else { // assign to already EXISTING value
      collection[id][prop]=[value];
    }

  } else if (prop === "tracks" && value !== "") {
    collection[id][prop]= [value]; // push the value into the tracks array, which gets created
 
  } else if (value !== "") {  // making a new prop that isn't an array here
    collection[id][prop] = value;
 
  } else { // remove prop from album
    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");