/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
let myName;
let myAge;
let string;
let para = document.querySelector('body p');
console.log(para);


		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
        myName = "Abinav";
        myAge = 22;

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
        myName = "Abinav Kadel";
        console.log(myName);
        myAge = 23;
        string = myName + " " + myAge;
        para.textContent = string;

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
        let numCourse = 6;
        para.textContent = numCourse;
		// Strings (use '' or "")
        let stringCourse = "ClientSide js";
        para.textContent = stringCourse;
        
		// Booleans
        let IamLive = true;
        let compare = 6>3;
        para.textContent = 'The value of comparision is: ' + compare;

		// Arrays
		let myArrays = ["Abinav","Kadel","ram"];
        console.log(myArrays[2]);

         myArrays = [20,30,40];
         console.log(myArrays[2]);

		// Objects
        let dog = {
            flame : 'simba',
            bread: 'staffy mix',
            colour: 'Brown'
        }
        console.log(dog.flame);


		// STEP 5: Typing (JavaScript is a loosely-typed language)
        var myNumber = 500;
        console.log(typeof(myNumber));
        myNumber = "abi";
        console.log(typeof(myNumber));