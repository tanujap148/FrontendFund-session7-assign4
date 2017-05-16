		function outerFunction(innerFunction) {
			   //it is a good idea to check if the parameter is actually not null
			   //and that it is a function
			   if (innerFunction && (typeof innerFunction == "function")) {
				  innerFunction();   
			   }
			}

			//this calls outerFunction and sends the other function to it
			outerFunction(function(){
			  console.log("Hello World from Inner Function");
			});