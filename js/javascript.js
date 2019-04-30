/*var numOne = parseInt(document.getElementById('num-one'));*/
/*var numTwo = parseInt(document.getElementById('num-two'));*/
/*var addSum = document.getElementById('add-sum');*/

function tipCalculator() {
var billAmt = document.getElementById("bill").value ;
var tipValue = document.getElementById("tipValue").value;
var totalPeople = document.getElementById("totalPeople").value;

if(billAmt ==="" || tipValue == 0){
	alert("Please Enter Value")
	return;
}

if(totalPeople === "" || totalPeople <= 1){
	totalPeople=1;
	document.getElementById("each").style.display="none";
}else{
	document.getElementById("each").style.display="block";
}
   var total = (billAmt * tipValue) / totalPeople;
   total = Math.round(total * 100) / 100;
   total = total.toFixed(2);
   document.getElementById("totalTip").style.display="block";
   document.getElementById("tip").innerHTML = total;

	}

	document.getElementById("totalTip").style.display="none";
	document.getElementById("each").style.display="none";

	document.getElementById("calculate").onclick = 
	function(){

		tipCalculator();
	}

	

