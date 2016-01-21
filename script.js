// script.js

angular.module("Index",[]);

// we create a custom filter called => length which returns the
// length of the input in verbose format

angular.module("Index")
  .filter("length",function(){
    return function(input){
      return "The length of "+input+" is "+ input.length ;
    }
  });
  
// NOTE: read the README.md file to understand how to add arguments to your custom filter
  
