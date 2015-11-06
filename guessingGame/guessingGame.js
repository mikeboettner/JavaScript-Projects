
var num = Math.trunc(Math.random()*100 + 1);
var guessed = false;

function resetGame()
{
	guessed = false;
	num = Math.trunc(Math.random()*100 + 1);
	document.getElementById("userGuess").value = null;
	document.getElementById("smiley").innerHTML = "";
	document.getElementById("output").innerHTML = "&nbsp;";
};

function myRandomFunction()
{
	var originalUserNum = document.getElementById('userGuess').value;
	var userNum = originalUserNum*1;
	
	if (!guessed)
	{
		if (!isNaN(userNum))
		{
			if (userNum > num)
			{
				document.getElementById("output").innerHTML = userNum + " is too high!";
				if (document.getElementById("smiley").innerHTML !== "")
					resetAngry1();
				else
					angryEyes();
			}
				
			else if (userNum < num)
			{
				document.getElementById("output").innerHTML = userNum + " is too low!";
				if (document.getElementById("smiley").innerHTML !== "")
					resetAngry1();
				else
					angryEyes();
			}
				
			else
			{
				document.getElementById("output").innerHTML = userNum + "! You got it!";
				guessed = true;
				if (document.getElementById("smiley").innerHTML !== "")
					resetPretty1();
				else
					prettyEyes();
			}
		}
		else
		{
				document.getElementById("output").innerHTML = originalUserNum + " is invalid!";
				document.getElementById("smiley").style.color = "red";
				angryEyes();
		}
		
			document.getElementById("userGuess").value = null;	
	}
	

};

function angryEyes()
{
	document.getElementById("smiley").style.color = "red";
	document.getElementById("smiley").innerHTML = "X";
	setTimeout(angryMouth, 400);
};

function angryMouth()
{
	document.getElementById("smiley").innerHTML = "X&#40;";
};

function resetAngry1()
{
		document.getElementById("smiley").innerHTML = "X";
		setTimeout(resetAngry2, 150);
};

function resetAngry2()
{
	document.getElementById("smiley").innerHTML = "";
	setTimeout(angryEyes, 500);
};

function prettyEyes()
{
	document.getElementById("smiley").style.color = "green";
	document.getElementById("smiley").innerHTML = ":";
	setTimeout(prettyMouth, 400);
};

function prettyMouth()
{
	document.getElementById("smiley").innerHTML = ":D";
};

function resetPretty1()
{
		document.getElementById("smiley").innerHTML = "X";
		setTimeout(resetPretty2, 150);
};

function resetPretty2()
{
	document.getElementById("smiley").innerHTML = "";
	setTimeout(prettyEyes, 500);

};