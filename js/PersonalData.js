var sMyRetrievedData = localStorage.getItem("userData");
sMyRetrievedData = JSON.parse(sMyRetrievedData);

var MyData=sMyRetrievedData;
//console.log(MyData);

var MyPersonalData=MyData[1];
console.log(MyPersonalData)
var MyDutyHours=MyData[3];
//console.log(MyDutyHours)
var MyTraining=MyData[2];
//console.log(MyTraining);
var MyAccount=MyData[4];
//console.log(MyAccount)

var $personal= $('#personalData');
	$personal.append("<li></li>").text(MyPersonalData[0])





