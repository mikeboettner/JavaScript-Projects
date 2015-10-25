//modularized script for handling cookies

var cookieHandler=
{
	setData: function(name, value, numDays) //void function
	{
		//if no expiration is specified, set the cookie with default expiration
		if (numDays === "")
		{
			document.cookie = name + "=" + value;
		}
		else 
		{
			//must calculate the expiration date based on optional numDays
			//use built-in js Date object
			var expirationDate = new Date();
			
			//add milliseconds to the current date by multiplying numDays by 86,400,000
			expirationDate.setTime(expirationDate.getTime() + (numDays*86400000));
			
			//Convert experationDate to correct format with toUTCString function
			//then concatenate all parameters and create the cookie
			document.cookie = name + "=" + value + "; expires=" + expirationDate.toUTCString();
		}
		
		alert(document.cookie); //testing to verify cookie has been added
	},
	
	getData: function(key) //takes cookie key, and returns String of the value
	{
		//create an array with each index holding a separate key-value pair
		var cookieArray = document.cookie.split('; ');
		
		console.log(cookieArray);
		
		//walk through the main array and create another two-element array,
		//which will hold the current key-value pair
		var currentPairString
		var currentPairArray;
		
		for (var i=0; i<cookieArray.length; i++)
		{
			currentPairString = cookieArray[i];
			currentPairArray = currentPairString.split('=');
			
			//now check to see if element 0 is the key we are searching for
			//if so, return element 1 of this two-element array, which holds the value
			if (key === currentPairArray[0])
			{
				alert(currentPairArray[1]); //testing to verify cookie has been found
				return currentPairArray[1];
			}
		}
		alert("Error: cookie is undefined"); //testing to verify cookie has (not) been found
		return "";
	},
	
	length: function() //returns Number of cookies
	{
		//create an array with each index holding a separate key-value pair
		var cookieArray = document.cookie.split('; ');
		
		//return the length of the array (number of cookies)
		alert(cookieArray.length); //testing to verify the correct length is being returned
		return cookieArray.length;
		
	}
};