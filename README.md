# Custom filter

## What is covered in this example?
You will understand how to create a simple filter that returns the length of the expression in a 
verbose format.   

You can also create a filter which accepts arguments. To create such a filter you would need to write the 
following in your script file (here: `script.js` )
```
angular.module("Index")
  .filter("length",function(){
    return function(input,argA){
      return "The length of "+input+" is "+ input.length+" with argument "+argA;
    }
  });  
```   
To use this filter, you would write something like `{{ "Hello World" | length:'sample text' }` in your HTML
file.   

This would result in the following output:   
`The length of Hello World is 11 with argument sample text`
