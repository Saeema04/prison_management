function validate()
{
 var n=document.getElementById("cname");
 if(n.value=="")
 alert("Please enter your name");
 var init=document.getElementById("first");
 var str=init.value;
 var count=0;
 var pos=str.search(/[a-z]/);
 if(pos>=0)
 count++;
 pos=str.search(/[A-Z]/);
 if(pos>=0)
 count++;
 pos=str.search(/[0-9]/);
 if(pos>=0)
 count++;
 pos=str.search(/[^A-Za-z0-9]/);
 if(pos>=0)
 count++;
 if(count<4)
 {
 alert("One lowercase character\nOne uppercase character\nOne number\nOne special character");
 init.focus();
 init.select();
 }
 else 
 return;
}
function check()
{
var init=document.getElementById("first");
var sec=document.getElementById("second");
if(init.value=="")
{
alert("You did not enter password");
return
}
if(init.value!=sec.value)
{
alert("Password and confirm password did not match");
sec.focus();
sec.select();
}
}