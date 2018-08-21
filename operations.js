var BackupData="";
//appending value into display-box
function display(input)
{     
      var inputValue=input.value;
      var inputScreen= document.getElementById("display-screen");
      inputScreen.value+=inputValue;
}
//performing calculation
function calculation()
{
      var expression=document.getElementById("display-screen").value;
      var outputScreen=document.getElementById("output-screen");
      try
      { 
        //if expression in null
       if(expression==="")
       throw null;
          BackupData+="Expression:"+expression+"<br>";
          BackupData+="output:"+eval(expression)+"<br>";
          outputScreen.value = eval(expression);
          
      }
      catch(err)
      {
           BackupData+="Error:"+"Enter a Valid Expression"+"<br>";
           outputScreen.value="Enter a Valid Expression";
      }
}
//clear button
function clearAll()
{
      document.getElementById("display-screen").value="";
      document.getElementById("output-screen").value ="";
    
}
//checking for values entered through keyboard
var assigner="";
function keyValues(event)
{
    var displayScreen=document.getElementById("display-screen");
    if((event.keyCode>48 && event.keyCode<58) || (event.keyCode===43) || (event.keyCode===45) || (event.keyCode===42) || (event.keyCode===47) )
     {
       assigner = (event.target.value);
       displayScreen.value=assigner;
     }
     else if(event.keyCode===13)
        calculation();
      else
      {
           alert("Only Integers are Allowed");
           displayScreen.value=assigner;  
      }
       
}
//storing history
function calcHistory()
{
     document.getElementById("historyContainer").innerHTML=BackupData;
}