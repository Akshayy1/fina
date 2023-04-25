let count=0;
var p=document.getElementsByClassName("question1");
function next()
{
    if(count==0)
    {
       if(p[0].value== "")
       document.getElementById("ques_one").innerHTML="enter the array";
       else
       {
        count++;
        document.getElementsByClassName("page_one").style.display = "none";
         document.getElementsByClassName("page_two").style.display = "block";
         document.getElementsByClassName("page_three").style.display = "none";
       }
    }
}