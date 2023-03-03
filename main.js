// if else
	var a=19,b=25;
	if(a<=b)
	{
		console.log("a is eligiple")
	}
	else
	{
		console.log("a is not eligible")
	}
// else if
	if(a>0)
	{
		console.log("a is positive")
	}
	else if(a==0)
	{
		console.log("a is zero")
	}
	else
	{
		console.log("a is negative")
	}
	// nested if
	
	

	
 for (i=1; i<=100; i++) {
	 if (i%5==0) {
		 console.log(i);
	 }
	 
 }
 let mar1=parseInt(prompt("enter tamil mark"));
	mar2=parseInt(prompt("enter english mark"));
	mar3=parseInt(prompt("enter maths mark"));
	mar4=parseInt(prompt("enter science mark"));
	mar5=parseInt(prompt("enter social mark"));
let total=mar1+mar2+mar3+mar4+mar5
	let avg=total/5
	Math.floor(avg)
	if (avg>=90&&avg<=100)
	{
		document.write("grade is S")
	}
	else if (avg>=80&&avg<90)
	{
		document.write("grade is A")
	}
	else if (avg>=70&&avg<80)
	{
		document.write("grade is B")
	}
	else if (avg>=40&&avg<70)
	{
		document.write("pass")
	}
	else if (avg>=0&&avg<40)
	{
		document.write("fail")
	}
	else{
		document.write("wrong")
	}
	