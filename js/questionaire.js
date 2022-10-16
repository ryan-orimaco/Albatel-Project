var choseRed = 0;
var choseAmber = 0;
var choseGreen = 0;


function section1()
{
 
  var input = document.getElementsByTagName("input")
  for (var i=0;i<input.length;i++) 
  { 
    if (input[i].value=="Red" && input[i].checked==true) 
    {
      choseRed++;
    }   

    if (input[i].value=="Amber" && input[i].checked==true) 
    {
      choseAmber++;
    } 

    if (input[i].value=="Green" && input[i].checked==true) 
    {
      choseGreen++;
    } 
  }

  document.getElementById("answeredquestions").innerHTML = choseRed+choseAmber+choseGreen;

  if(choseRed > 25)
  {
    document.getElementById("evaluation").innerHTML = "Your company will require some assistance ";

  }

  if(choseAmber > 25)
  {
    document.getElementById("evaluation").innerHTML = "Your company is doing ok but loads of assistance is needed ";

  }

  if(choseGreen > 25)
  {
    document.getElementById("evaluation").innerHTML = "Everything in the company seems to be in tact but some assistance can still be required ";

  }

  else
  {
    document.getElementById("evaluation").innerHTML = "Mixed bag, seems your company is doing ok but loads of assistance is needed";
  }

  var xValues = ["Red", "Amber", "Green"];
  var yValues = [choseRed, choseAmber, choseGreen];
  var barColors = [
    "#FF0000",
    "#FF7502",
    "#02FF10",
  ];
  
  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Overall Results"
      }
    }
  });

  document.getElementById("download-pdf").style.display="block"; 
}




