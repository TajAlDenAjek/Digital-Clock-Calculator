//clear
function clearScreen()
{
  document.querySelector("#display").value=" ";
}
document.querySelector("#clear").addEventListener("click",clearScreen);


//BackSpace function

function backSpace()
{
  document.querySelector("#display").value=document.querySelector("#display").value.slice(0,-1);
}


//buttons

//number one function
const one=()=>  /*function one()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="1";
  }
  else
  {
    document.querySelector("#display").value+="1";
  }
}

//number two function
const two=()=>  /*function two()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="2";
  }
  else
  {
    document.querySelector("#display").value+="2";
  }
}

//number three function
const three=()=>  /*function three()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="3";
  }
  else
  {
    document.querySelector("#display").value+="3";
  }
}
//number four function
const four=()=>  /*function four()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="4";
  }
  else
  {
    document.querySelector("#display").value+="4";
  }
}
//number five function
const five=()=>  /*function five()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="5";
  }
  else
  {
    document.querySelector("#display").value+="5";
  }
}
//number six function
const six=()=>  /*function six()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="6";
  }
  else
  {
    document.querySelector("#display").value+="6";
  }
}
//number seven function
const seven=()=>  /*function seven()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="7";
  }
  else
  {
    document.querySelector("#display").value+="7";
  }
}
//number eight function
const eight=()=>  /*function eight()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="8";
  }
  else
  {
    document.querySelector("#display").value+="8";
  }
}
//number nine function
const nine=()=>  /*function nine()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="9";
  }
  else
  {
    document.querySelector("#display").value+="9";
  }
}
//number zero function
const zero=()=>  /*function zero()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value="0";
  }
  else
  {
    document.querySelector("#display").value+="0";
  }
}
//number point function
const point=()=>  /*function point()*/
{
  if(document.querySelector("#display").value==" ")
  {
    document.querySelector("#display").value=".";
  }
  else
  {
    document.querySelector("#display").value+=".";
  }
}



////////////
//clock stuff
setInterval(showTime,1000);
function showTime()
{
  var date=new Date();
  var h=date.getHours();
  var m=date.getMinutes();
  var s=date.getSeconds();
  var session="AM";

  if(h==0)
  {
    h=12;
  }
  if(h>12)
  {
    h-=12;
    session="PM";
  }
  h=(h<10)?"0"+h:h;
  m=(m<10)?"0"+m:m;
  s=(s<10)?"0"+s:s;
  var time=h+":"+m+":"+s+" "+session;
  document.getElementById("ClockDisplay").innerText=time;
  document.getElementById("ClockDisplay").textContent=time;
}
showTime();
