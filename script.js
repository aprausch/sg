/* 
Hello! Thanks for reading my code. Since JavaScript doesn't play nice with databases, we have to manually enter the birth and death years in the script itself. The first two arrays defined below this comment serve as the database, and we enter the data like so:

	Birth Array:	Birth Year of Person 1, 2, 3, ... . 
	Death Array:	Death Year of Person 1, 2, 3, ... . 

There is no limit to the number of entries this program can take! Enjoy!
*/

// SAMPLE DATABASE
var birth = [1908, 1905, 1942, 1917, 1939, 1908, 1919, 1908, 1913, 1929, 1925, 1943, 1966];
var death = [2000, 1982, 1970, 1963, 1963, 1973, 1998, 1992, 1994, 1968, 1965, 1971, 1997];



//These are the other required variables.

var year = [];
var alive = [];
var pass = [];
for (var i = 0; i <= 100; ++i) {
		year[i] = 1900+i;
		alive[i] = 0;
		pass[i] = 0;
}
var final = [];
var amount = 0;



//Here we count the number of people alive in each year and store in the "alive" array.

for (var k = 0; k<=100; ++k){
	for (var j = 0; j <= birth.length; ++j) {
		if (birth[j]<=year[k] && year[k]<=death[j]){
			alive[k]++
		}
	}
}



//Here we test each year to see if it is one that contains the most alive, and we store this in the "pass" array. 

for (var j = 0; j <= alive.length; ++j){
	for (var n = 0; n<= alive.length; ++n){

		if (alive[j] >= alive[n]){
			pass[j]++
		}

	}
}



//Here we create an array ("final") that stores all the years with the max people, as well as a variable ("amount") that stores the actual max number of people alive during those years. 

for (var m = 0; m <= alive.length; ++m){
	if(pass[m]==101){
		final.push(year[m]);
		amount = alive[m];
	}

}

//Here we output the answer. 

alert("The greatest number of people alive between 1900 and 2000 was "+amount+". This happened in the following years: "+final+".")

//Thanks for reading! 